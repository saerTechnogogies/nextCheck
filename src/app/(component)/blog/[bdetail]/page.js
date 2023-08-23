"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CsrBlogDetail({ params }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.servicetasker.com/api/v1/blog-detail?Slug=${params?.bdetail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No Blogs Detail data</p>;

  return (
    <>
      <h3 style={{ textAlign: "center" }}> Blogs Detail (CSR)</h3>
      <main style={{ textAlign: "center" }} className="blog-detail-wrapper">
        <img
          src={data?.response?.image}
          width={200}
          height={100}
          style={{ objectFit: "cover" }}
          alt="Picture of the author"
        />
        <h1 className="y">{data?.response?.title}</h1>
        <p>{data?.response?.short_description}</p>
        <figure
          dangerouslySetInnerHTML={{
            __html: data?.response?.description,
          }}
        ></figure>
      </main>
    </>
  );
}
