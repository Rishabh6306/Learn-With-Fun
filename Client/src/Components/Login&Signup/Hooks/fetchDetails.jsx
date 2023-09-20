import axios from "axios";
import { useEffect, useState } from "react";
import { getUsername } from "../ApiRequest/ApiRequest";

const port = import.meta.env.VITE_REACT_APP_SERVER_PORT || 3000;
axios.defaults.baseURL = `http://localhost:${port}`;

export default function useFetch(query) {
  const [getData, setData] = useState({ isLoading: false, apiData: null, status: null, serverError: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));

        // Check if a query is provided
        if (query) {
          const { data, status } = await axios.get(`/api/${query}`);
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        } else {
          // Fetch username first
          const { username } = await getUsername();
          const { data, status } = await axios.get(`/api/user/${username}`);
          setData((prev) => ({ ...prev, apiData: data, status: status }));
        }

        setData((prev) => ({ ...prev, isLoading: false }));
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };
    fetchData();
  }, [query]);

  return [getData, setData];
}
