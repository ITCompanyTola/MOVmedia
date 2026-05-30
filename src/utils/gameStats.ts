import type { LocationId, PersonId } from "../data/data";

type ExitRecord = {
    personId: PersonId;
    stage: string;
    completedLocations: LocationId[];
};

type CurrentSession = {
    personId: PersonId;
    completedLocations: LocationId[];
    finalReached: boolean;
};

type GameStats = {
    totalStarted: number;
    totalFinished: number;
    totalExitedBeforeFinal: number;
    completedLocationCounts: Partial<Record<LocationId, number>>;
    exits: ExitRecord[];
    currentSession: CurrentSession | null;
};

const statsStorageKey = "city-of-commonwealth-game-stats";

const defaultStats: GameStats = {
    totalStarted: 0,
    totalFinished: 0,
    totalExitedBeforeFinal: 0,
    completedLocationCounts: {},
    exits: [],
    currentSession: null,
};

function getStats(): GameStats {
    const savedStats = window.localStorage.getItem(statsStorageKey);

    if (!savedStats) {
        return defaultStats;
    }

    try {
        return {
            ...defaultStats,
            ...JSON.parse(savedStats),
        };
    } catch {
        return defaultStats;
    }
}

function saveStats(stats: GameStats) {
    window.localStorage.setItem(statsStorageKey, JSON.stringify(stats));
}

export function startGameStats(personId: PersonId) {
    const stats = getStats();

    stats.totalStarted += 1;
    stats.currentSession = {
        personId,
        completedLocations: [],
        finalReached: false,
    };

    saveStats(stats);
}

export function recordCompletedLocation(locationId: LocationId) {
    const stats = getStats();

    if (!stats.currentSession) {
        saveStats(stats);
        return;
    }

    if (!stats.currentSession.completedLocations.includes(locationId)) {
        stats.currentSession.completedLocations.push(locationId);
        stats.completedLocationCounts[locationId] =
            (stats.completedLocationCounts[locationId] ?? 0) + 1;
    }

    saveStats(stats);
}

export function recordFinalReached() {
    const stats = getStats();

    if (!stats.currentSession || stats.currentSession.finalReached) {
        saveStats(stats);
        return;
    }

    stats.currentSession.finalReached = true;
    stats.totalFinished += 1;

    saveStats(stats);
}

export function recordExitBeforeFinal(stage: string) {
    const stats = getStats();

    if (!stats.currentSession) {
        saveStats(stats);
        return;
    }

    if (!stats.currentSession.finalReached) {
        stats.totalExitedBeforeFinal += 1;
        stats.exits.push({
            personId: stats.currentSession.personId,
            stage,
            completedLocations: [...stats.currentSession.completedLocations],
        });
    }

    stats.currentSession = null;
    saveStats(stats);
}

export function finishCurrentSession() {
    const stats = getStats();
    stats.currentSession = null;
    saveStats(stats);
}

export function createStatsText() {
    const stats = getStats();
    const locationLines = Object.entries(stats.completedLocationCounts).map(
        ([locationId, count]) => `${locationId}: ${count}`,
    );
    const exitLines = stats.exits.map((exit, index) => {
        const completed =
            exit.completedLocations.length > 0
                ? exit.completedLocations.join(", ")
                : "нет";

        return `${index + 1}. Герой: ${exit.personId}; этап выхода: ${exit.stage}; пройдено локаций: ${exit.completedLocations.length}; локации: ${completed}`;
    });

    return [
        `Всего начали игру: ${stats.totalStarted}`,
        `Прошли до финала: ${stats.totalFinished}`,
        `Не прошли до финала и вышли из игры: ${stats.totalExitedBeforeFinal}`,
        "",
        "Сколько раз проходили локации:",
        ...(locationLines.length > 0 ? locationLines : ["нет данных"]),
        "",
        "Выходы до финала:",
        ...(exitLines.length > 0 ? exitLines : ["нет данных"]),
    ].join("\n");
}

export function downloadStatsFile() {
    const file = new Blob([createStatsText()], {
        type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");

    link.href = url;
    link.download = "game-stats.txt";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}
