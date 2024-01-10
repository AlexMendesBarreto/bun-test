import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "/api";

const getPosts = async () => {
  try {
    const { data } = await axios.get(URL)
    return data
  } catch (err) {
    throw "Fetching posts failed"
  }
}

export function useGetData2() {
  return useQuery({
    queryKey: ['test2'],
    queryFn: getPosts,
  })
}