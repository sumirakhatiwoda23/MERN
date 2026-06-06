import React from "react";
import { useGetBlogsQuery } from "../blogs/blogApi.js";

export default function Home() {
  const { data, isLoading, error } = useGetBlogsQuery();

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <div>
      {data?.map((blog) => (
        <h1 key={blog.id}>{blog.title}</h1>
      ))}
    </div>
  );
}