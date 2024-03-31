import { create } from "zustand";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const useSidebar = create<Props>((set) => ({
  isOpen: true, // Set initial value to true if you want it opposite
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));