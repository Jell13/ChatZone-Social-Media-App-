import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto max-md:hidden gap-6 px-10 py-6 flex flex-col text-white'>
      <span className='w-50 h-50 bg-blue-600 border-white rounded-full p-6'>
          CZ
      </span>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
          <Link href="/">
            <Image src="/profile.png" className='rounded-full' alt='profile' width={50} height={50}></Image>
          </Link>
          <p>Admin</p>
        </div>

        <div className='flex text-light-1 gap-4 justify-between'>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Post</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Followers</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Following</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default LeftSideBar
