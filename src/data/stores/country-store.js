import { create } from "zustand";

export const useCountryStore = create((set) => ({
  country: "gb",
  setCountry: (countryCode) => set({ country: countryCode }),
}));
