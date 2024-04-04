import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import { SignOutButton, SignedIn, UserButton } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'

const LeftSideBar = () => {
  return (
    <div className='h-screen left-0 top-0 sticky overflow-auto max-md:hidden gap-6 px-10 py-6 flex flex-col text-white'>
      <span className='w-50 h-50 bg-blue-600 border-white rounded-full p-6'>
          ChatZone
      </span>

      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
          <Link href="/">
            <Image src="/profile.png" className='rounded-full' alt='profile' width={50} height={50}></Image>
          </Link>
          <p>Admin</p>
        </div>

        <div className='flex text-light-1 justify-between'>
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

        <hr />
          <Menu/>
        <hr />

        <div className='flex gap-4 items-center'>
          <UserButton/>
          <p className='text-light-1 text-body-bold'>Manage Account</p>
        </div>

        <SignedIn>
          <SignOutButton>
            <div className='flex cursor-pointer gap-4 items-center'>
              <Logout sx={{color:"white", fontSize: "32px"}}/>
              <p className='text-body-bold text-light-1'>Log Out</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  )
}

export default LeftSideBar
