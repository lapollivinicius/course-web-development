"use client"

import { useParams, useSearchParams } from "next/navigation";

export default function UserPage() {


  // user/123
  const params = useParams()

  // user/123?mode=edit
  const searchParams = useSearchParams()

  console.log(params, searchParams.get("mode"))

  return (
    <div className="border border-gray-300">
      <h1>User Page {params.userid}</h1>
    </div>
  );

}
