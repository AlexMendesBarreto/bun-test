"use client";
import { CounterButton, Link } from "@repo/ui";
import { useQuery } from "@tanstack/react-query";

// export const metadata = {
//   title: "Store | Kitchen Sink",
// };

const getPosts = async () => {
  try {
    const data = await fetch("https://bun-api.onrender.com/")
    const json = await data.json()
    return json

  } catch (err) {
    throw "Fetching posts failed"
  }
}


export default function Store(): JSX.Element {
  const { data, error } = useQuery({
    queryKey: ['test'],
    queryFn: getPosts,
  })

  console.log(data)
  console.log({ error })


  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
