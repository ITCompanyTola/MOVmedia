import { create } from "zustand";

interface Person {
    id: string;
}

interface AppStore {
    started: boolean;
    person: Person | null;
    setStarted: (value: boolean) => void;
    setPerson: (person: Person) => void;
}

export const useAppStore = create<AppStore>((set) => ({
    started: false,
    person: null,
    setStarted: (value) => set({ started: value }),
    setPerson: (person) => set({ person }),
}));
