import { create } from "zustand";
import type { LocationId, PersonData } from "../data/data";

export type ModalType = "merch";

interface AppStore {
    started: boolean;
    person: PersonData | null;
    activeLocation: LocationId | null;
    completedLocations: LocationId[];
    activeModal: ModalType | null;
    setStarted: (value: boolean) => void;
    setPerson: (person: PersonData | null) => void;
    setActiveLocation: (id: LocationId | null) => void;
    addCompletedLocation: (id: LocationId) => void;
    clearCompletedLocation: () => void;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
    started: false,
    person: null,
    activeLocation: null,
    completedLocations: [],
    activeModal: null,
    setStarted: (value) => set({ started: value }),
    setPerson: (person) => set({ person }),
    setActiveLocation: (id) => set({ activeLocation: id }),
    addCompletedLocation: (id) =>
        set((state) => ({
            completedLocations: state.completedLocations.includes(id)
                ? state.completedLocations
                : [...state.completedLocations, id],
        })),
    clearCompletedLocation: () => set({ completedLocations: [] }),
    openModal: (modal) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: null }),
}));
