'use client'

import { useAppSelector } from '@/redux/store'
import { redirect, usePathname } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react'

export default function AuthProvider({children} : {children : ReactNode}) {

    const {user} = useAppSelector((state) => state['user slice']);
    const currentUrl = usePathname();

    useEffect(() => {
        if (!user && (currentUrl !== "/login")) {
            redirect("/login"); 
        }else if (user && currentUrl == "/login" ) {
            redirect("/home");
        }

    },[])
   
  return (
    <div>

        {children}
    </div>
  )
}
