import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signinPage = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
        <SignIn></SignIn>
    </div>
  )
}

export default signinPage