export const useApi = () => {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.API_URL;
  const fetchBooks = async (limit) => {
    try {
      const response = await fetch(`${apiBaseUrl}/books?limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching books:", error);
      return null;
    }
  };
  const fetchBookById = async (id) => {
    try {
      const response = await fetch(`${apiBaseUrl}/books/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching book:", error);
      return null;
    }
  };
  return { fetchBooks, fetchBookById };
};
