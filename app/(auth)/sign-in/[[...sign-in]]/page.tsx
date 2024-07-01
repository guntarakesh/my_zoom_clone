import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signinPage = () => {
  return (
    <div className='justify-center'>
        <SignIn></SignIn>
    </div>
  )
}

export default signinPage