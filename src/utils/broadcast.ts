import type { PersonId } from "../data/data";

export type BroadcastQuizId = "quiz" | "quiz2";
export type BroadcastQuizResult = "idle" | "true" | "false";

export type BroadcastState =
    | {
          screen: "main" | "choice" | "completeMap" | "noInteractive" | "final";
      }
    | {
          screen: "start";
          personId: PersonId;
      }
    | {
          screen: "quiz";
          personId: PersonId;
          quizId: BroadcastQuizId;
          result: BroadcastQuizResult;
      };

const broadcastChannelName = "city-of-commonwealth-broadcast";
const broadcastStorageKey = "city-of-commonwealth-broadcast-state";

export const defaultBroadcastState: BroadcastState = {
    screen: "main",
};

export function publishBroadcastState(state: BroadcastState) {
    window.localStorage.setItem(broadcastStorageKey, JSON.stringify(state));

    const channel = new BroadcastChannel(broadcastChannelName);
    channel.postMessage(state);
    channel.close();
}

export function subscribeBroadcastState(
    onMessage: (state: BroadcastState) => void,
) {
    const channel = new BroadcastChannel(broadcastChannelName);

    channel.onmessage = (event: MessageEvent<BroadcastState>) => {
        onMessage(event.data);
    };

    return () => {
        channel.close();
    };
}

export function getSavedBroadcastState() {
    const savedState = window.localStorage.getItem(broadcastStorageKey);

    if (!savedState) {
        return defaultBroadcastState;
    }

    try {
        return JSON.parse(savedState) as BroadcastState;
    } catch {
        return defaultBroadcastState;
    }
}
