"use client";
import { CounterButton, Link } from "@repo/ui";
import { useGetData } from "../services/getFromElysia";
import { useGetData2 } from "../services/getFromNextJS";



export default function Store(): JSX.Element {
  const { data, error, isLoading } = useGetData()

  const { data: data2, error: error2, isLoading: isLoading2 } = useGetData2()

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
      {isLoading2 ? <span>Loading</span> : error2 ? <span>Error</span> :
        <>
          <h1 className="title">
            {JSON.stringify(data2)}
          </h1>
          <CounterButton />
        </>
      }
    </div>
  );
}
