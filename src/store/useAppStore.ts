import { create } from "zustand";
import type { Data } from "../data/data";

type Person = Data["data"]["persons"][number];

interface AppStore {
    started: boolean;
    person: Person | null;
    activeLocation: string | null;
    completedLocations: string[];
    setStarted: (value: boolean) => void;
    setPerson: (person: Person | null) => void;
    setActiveLocation: (id: string | null) => void;
    addComletedLocaton: (id: string) => void;
    clearCompletedLocation: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
    started: false,
    person: null,
    activeLocation: null,
    completedLocations: [],
    setStarted: (value) => set({ started: value }),
    setPerson: (person) => set({ person }),
    setActiveLocation: (id) => set({ activeLocation: id }),
    addComletedLocaton: (id) =>
        set((state) => ({
            completedLocations: [...state.completedLocations, id],
        })),
    clearCompletedLocation: () => set({ completedLocations: [] }),
}));
