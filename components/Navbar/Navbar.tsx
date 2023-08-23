"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import { Badge ,Dropdown, IconButton } from 'rsuite';
import { NavAuthLinks, NavLinks } from '../../constant';
import './navbar.css'


interface Message {
  ActivityActionType: string;
  ActivityStatus: string;
  ActivityStatusID: string;
  ActivityTaskID: string;
  ActivityTemplate: string;
  BidMessage: string;
  QTaskID: string | null;
  Q_Content: string | null;
  TaskTitle: string;
  TaskUUID: string;
  UserID_Login: string;
  bidUUID: string;
  created_at: string;
  display_name: string;
  is_read: string;
  notificationID: string;
  profile_photo: string;
}

const initialMessage: Message = {
  ActivityActionType: "25",
  ActivityStatus: "Task Bid Reply",
  ActivityStatusID: "25",
  ActivityTaskID: "457",
  ActivityTemplate: "{~UserName~} Task Bid Reply",
  BidMessage: "<p>check my offer&nbsp;check my offer&nbsp;</p>",
  QTaskID: null,
  Q_Content: null,
  TaskTitle: "Fix shower drain",
  TaskUUID: "qgao-vdwx-eona-gkzj-npmb",
  UserID_Login: "25",
  bidUUID: "50370cd131a5ab2c6632322bc1c83e2c",
  created_at: "2023-08-15 09:18:02",
  display_name: " ",
  is_read: "1",
  notificationID: "349",
  profile_photo: "1686095413.jpg",
};

const Navbar:React.FC = () => {
    const [showClass, setShowClass] = useState<boolean>(false);
    const [Actdropsub3, setActdropsub3] = useState<boolean>(false);
    const [Actdropsub, setActdropsub] = useState<boolean>(false);
    const [Actdropsub2, setActdropsub2] = useState<boolean>(false);
    const [Actdrop, setActdrop] = useState<boolean>(false);
    const [showSubmenu, setSubmenu] = useState<boolean>(false);
    const [allMsg, setAllMsg] = useState<Message[]>([initialMessage]);
    const isLogedin = true;
    const callLogout=()=>{
        console.log("logout")
    }
    const handleOpenNotMsgList = useCallback(() => {
    setActdrop(false);
    // callAllMsgNotApi();
  }, [Actdrop]);
  return (
  <>
        <div className="navbar-parent">
          <div className='nav-logo'>
          <Link href="/" >
            <h3>SERVICE<span className='s-color'>TASKER</span></h3>
          </Link>
          </div>

          <div className="nav-pages-link">
             {NavLinks?.map((link)=>(
               <Link href={link?.href} key={link?.key}>
                {link?.text}
               </Link>
             ))}
          </div>

          <div className="nav-login">
             {NavAuthLinks?.map((link)=>(
               <Link href={link?.href} key={link?.key}>
                {link?.text}
               </Link>
             ))}
          </div>     
                   
        </div>
          
  </>
  )
}

export default Navbar
