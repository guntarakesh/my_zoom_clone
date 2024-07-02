import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Alert = ({title}:{title:string}) => {
  return (
    <div className='text-white w-[300px] flex flex-col gap-5 absolute left-[40%] top-[40%]'>
<h2 className='bg-red-500 p-5'>        {title}</h2>
<Button className='bg-blue-1'>   <Link href='/'>Go to Home</Link> 
</Button>
    </div>
  )
}

export default Alert