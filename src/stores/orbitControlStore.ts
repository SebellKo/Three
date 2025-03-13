import { create } from 'zustand';

interface Store {
  active: boolean;
  setActive: (value: boolean) => void;
}

export const useOrbitControlStore = create<Store>((set) => ({
  active: true,
  setActive: (update) => set({ active: update }),
}));
