import React from 'react'
import './footer.css'
import Link from 'next/link'
import { footerLinks } from '../../constant';

type linksType ={
    href:string , key:string , text:string
}

type ColumnProps = {
    title: string;
    links: linksType []; 
};

const FooterColumn=({title , links}:ColumnProps)=>(
    <div className="col-2"><a className="br-item header">
          <div className="content text-down-01 text-bold text-uppercase">{title}</div>
         </a>
        <div className="br-list"><span className="br-divider d-md-none"></span>
          {links?.map((link)=><Link className="content" href="/" key={link?.key} >{link?.text}</Link>)}
        </div>
      </div>
);

const Footer = () => {
  return (
   <>
   
<footer className="br-footer">
  <div className="container-lg">
    <div className='nav-logo'>
          <Link href="/" >
            {/* <h3>SERVICE<span className='s-color'>TASKER</span></h3> */}
          </Link>
          </div>
    <div className="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
      <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
    </div>
    <div className="br-list horizontal" data-toggle="data-toggle" data-sub="data-sub">
      <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
    </div>
  
  </div>
</footer>
   </>
  )
}

export default Footer
