import { create } from "zustand";

export const useSearchQueryStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (_searchQuery) => set({ searchQuery: _searchQuery }),
}));
