"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CsrAllBlog() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.servicetasker.com/api/v1/blogs?page=1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ TypeFlag: "blogs", per_page: 4 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Blogs data</p>;

  return (
    <>
      <h3 style={{ textAlign: "center" }}>All Blogs (CSR)</h3>
      {data?.data?.map((d, i) => (
        <div key={i + 1} style={{ textAlign: "center" }}>
          <Image
            src={d?.image}
            width={200}
            height={100}
            style={{ objectFit: "cover" }}
            alt="Picture of the author"
          />
          <Link href={`/blog/${d?.slug}/`}>{d?.title}</Link>
          <p>{d?.short_description}</p>
        </div>
      ))}
    </>
  );
}
