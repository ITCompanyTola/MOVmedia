import { create } from "zustand";
import type { LocationId, PersonData } from "../data/data";
import { recordCompletedLocation } from "../utils/gameStats";

export type ModalType = "merch";

interface AppStore {
    started: boolean;
    person: PersonData | null;
    activeLocation: LocationId | null;
    completedLocations: LocationId[];
    activeModal: ModalType | null;
    exitTransitionActive: boolean;
    setStarted: (value: boolean) => void;
    setPerson: (person: PersonData | null) => void;
    setActiveLocation: (id: LocationId | null) => void;
    addCompletedLocation: (id: LocationId) => void;
    clearCompletedLocation: () => void;
    setExitTransitionActive: (value: boolean) => void;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
}

export const useAppStore = create<AppStore>((set) => ({
    started: false,
    person: null,
    activeLocation: null,
    completedLocations: [],
    activeModal: null,
    exitTransitionActive: false,
    setStarted: (value) => set({ started: value }),
    setPerson: (person) => set({ person }),
    setActiveLocation: (id) => set({ activeLocation: id }),
    addCompletedLocation: (id) =>
        set((state) => ({
            completedLocations: state.completedLocations.includes(id)
                ? state.completedLocations
                : (() => {
                      recordCompletedLocation(id);
                      return [...state.completedLocations, id];
                  })(),
        })),
    clearCompletedLocation: () => set({ completedLocations: [] }),
    setExitTransitionActive: (value) => set({ exitTransitionActive: value }),
    openModal: (modal) => set({ activeModal: modal }),
    closeModal: () => set({ activeModal: null }),
}));
