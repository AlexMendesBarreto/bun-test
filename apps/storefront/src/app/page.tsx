"use client";
import { CounterButton, Link } from "@repo/ui";
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

function useGetData() {
  return useQuery({
    queryKey: ['test'],
    queryFn: getPosts,
  })
}


export default function Store(): JSX.Element {
  const { data, error, isLoading } = useGetData()

  return (
    <div className="container">
      {isLoading ? <span>Loading</span> : error ? <span>Error</span> :
        <>
          <h1 className="title">
            {data}
          </h1>
          <CounterButton />
        </>
      }
    </div>
  );
}
