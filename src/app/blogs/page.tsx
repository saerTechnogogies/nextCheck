import { AllBlogType } from "@/types/AllBlogs";
import { PerticularBlogs } from "@/types/PerticularBlogs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata :Metadata = {
   title:"All Blogs",
   description:'ServiceTasker All Blogs'
}

export default async function pageBlog() {
    
   const data: AllBlogType = { TypeFlag: "blogs" ,per_page:4 };
    
    const allBlogsRes = await fetch("https://api.servicetasker.com/api/v1/blogs?page=1" ,{
        method: 'POST',
        headers: {
			 "Content-Type": "application/json",
			'Accept': 'application/json',
		},
         body: JSON.stringify(data),
    });
    const allBlogs = (await allBlogsRes.json());

  return (
    <main style={{textAlign:'center'}} >
        <h3>All Blogs (SSR)</h3>

        {allBlogs?.data?.length > 0 ? (
          allBlogs?.data?.map((d:PerticularBlogs,i:number)=>(
            <div key={i+1} >
               <Image src={d?.image} width={200} height={100} style={{objectFit:'cover'}} alt="Picture of the author"  />
               <Link href={`/blogs/${d?.slug}/`}>{d?.title}</Link>
               <p>{d?.short_description}</p>
            </div>
            
          ))
        ):(
            <>
            <p>No Data Availabel</p>
            <p>{allBlogs?.data?.current_page}</p>
            </>
        )}
     
    </main>
  )
}
