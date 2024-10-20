//@ts-nocheck
'use client'


import SignIn from '@/components/signIn';
import SignUp from '@/components/signUp';
import { useState } from 'react';

export default function Login() {

    const [toggleSign,setToggleSign] = useState<boolean>(true);

 

    function toggle() {
      setToggleSign(prev => !prev);
    }

  return (
    <div className='w-full flex items-center bg-zinc-700 justify-center min-h-screen'>

        {
            toggleSign ? <SignIn toggle={toggle}/> : <SignUp toggle={toggle}/>
        }
        
      
    </div>
  )
}
