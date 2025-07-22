const API_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const API_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;

export const getCategories = async (countryCode) => {
  try {
    const res = await fetch(
      `http://api.adzuna.com/v1/api/jobs/${countryCode}/categories?app_id=${API_ID}&app_key=${API_KEY}&&content-type=application/json`
    );
    if (!res.ok) throw new Error("Something went wrong fetching ADZUNA APi");

    const { results } = await res.json();

    return results;
  } catch (error) {
    console.error(error);
  }
};
