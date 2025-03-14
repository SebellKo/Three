import { Vector3 } from 'three';
import { create } from 'zustand';

interface Store {
  active: boolean;
  position: Vector3;
  setActive: (value: boolean) => void;
  setPosition: (value: Vector3) => void;
}

export const useOrbitControlStore = create<Store>((set) => ({
  active: true,
  position: new Vector3(0, 0, 0),
  setActive: (update) => set({ active: update }),
  setPosition: (update) => set({ position: update }),
}));
