import Image from "next/image";


interface ParamsProps {
   params:{
    blogsDetail:string
   }
}

export default async function blogDetailCom({params} : ParamsProps){
    const blogDetail = await fetch(`https://api.servicetasker.com/api/v1/blog-detail?Slug=${params?.blogsDetail}`,{
        method: 'POST',
        headers: {
			 "Content-Type": "application/json",
			'Accept': 'application/json',
		},
    });
    const bdetail = (await blogDetail.json());


    return (
        <>
  

        <h3 style={{ textAlign: "center" }}> Blogs Detail (SSR)</h3>
        <main style={{textAlign:'center'}} className="blog-detail-wrapper">
             <img src={bdetail?.response?.image} width={200} height={100} style={{objectFit:'cover'}} alt="Picture of the author"  />
            <h1 className="y">{bdetail?.response?.title}</h1>
            <p>{bdetail?.response?.short_description}</p>
              <figure
                          dangerouslySetInnerHTML={{
                            __html: bdetail?.response?.description,
                          }}
                        ></figure>
        </main>
        </>
    )
}