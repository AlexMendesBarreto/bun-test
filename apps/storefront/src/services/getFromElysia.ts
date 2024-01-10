import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PROD_URL = "https://bun-api.onrender.com/";
const DEV_URL = "http://localhost:3000/";

const getPosts = async () => {
  try {
    const { data } = await axios.get(PROD_URL)
    return data
  } catch (err) {
    throw "Fetching posts failed"
  }
}

export function useGetData() {
  return useQuery({
    queryKey: ['test'],
    queryFn: getPosts,
  })
}