import axios from "axios";

const baseUrl = "https://api.openbrewerydb.org/breweries";

export const getByPage = async (page: number): Promise<BreweryType[]> => {
  const response = await axios.get(`${baseUrl}?page=${page}&per_page=9`);

  return response.data;
};

export const searchByFilter = async (
  filter: string,
  value: string,
  page: number
): Promise<BreweryType[]> => {
  const response = await axios.get(
    `${baseUrl}?page=${page}&${filter}=${value}&per_page=9`
  );
  return response.data;
};
