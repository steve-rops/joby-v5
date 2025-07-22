const API_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const API_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;

export const getJobs = async (searchQuery, country) => {
  const search = searchQuery.includes("&")
    ? searchQuery.split("&")[0].trim()
    : searchQuery;

  try {
    const res = await fetch(
      `http://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=${search}&content-type=application/json`
    );
    if (!res.ok) throw new Error("There was an error fetching the Jobs");

    const { results } = await res.json();

    return results;
  } catch (error) {
    console.error(error);
  }
};
