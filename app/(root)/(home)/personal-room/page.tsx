'use client'

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import React from 'react'
import { useRouter } from 'next/navigation';

const Table = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className='flex flex-col items-start gap-2 xl:flex-row'>
      <h1 className='text-base font-medium text-sky-1 lg:text-xl xL;min-w-32' >{title}</h1>
      <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{description}</h1>
    </div>
  )
}

const personalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

  const router = useRouter();

  const {call} = useGetCallById(meetingId!)
 const client = useStreamVideoClient();
  const startRoom = async () => {
    if(!client || !user) return ; 

    if(!call)
      {
        const newCall = client.call('default',meetingId!)
        await newCall.getOrCreate({
          data: {
            starts_at: new Date().toISOString(),
          },
        });
      }
    router.push(`/meeting/${meetingId}?personal=true`)
  }
  

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>Personal Room</h1>
      <div className='flex w-full flex-col gap-8 xl:max-w-[900px]'>
        <Table title='Topic' description={`${user?.username}'s meeting room`} />
        <Table title='Meeting ID' description={meetingId!} />
        <Table title='invite link' description={meetingLink} />
      </div>
      <div>
        <Button className='bg-blue-1' onClick={startRoom}> start meeting </Button>
        <Button className='bg-dark-2' onClick={() => {
          navigator.clipboard.writeText(meetingLink);
          toast({ title: 'Link Copied' });
        }}> Copy Invitation </Button>
      </div>
    </section>

  )
}

export default personalRoom