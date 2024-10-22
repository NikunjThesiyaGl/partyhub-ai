import React from 'react'
import Button from '../atoms/Button'
import Typography from '../atoms/Typography'
import Image from 'next/image'
import { BackgroundLines } from '../atoms/BackgroundLines'

const ComingSoon = () => {
  return (
    <BackgroundLines className='w-full bg-gradient-to-r from-theme-purple-950 to-theme-yellow-900'>
      <div className='theme-container min-h-screen flex items-center justify-center w-full overflow-hidden py-24 relative'>
        <Image src="/images/characters/gift.png" width={80} alt='Gift Box' height={300} className='w-[48px] top-52 sm:top-auto sm:w-[56px] md:w-[66px] lg:w-[80px] object-contain absolute left-14 sm:left-36 md:left-40 lg:left-64 -rotate-45 z-10' />
        <Image src="/images/characters/party-cap.png" width={80} alt='Party Cap' height={300} className='w-[48px] top-40 sm:top-auto sm:w-[56px] md:w-[66px] lg:w-[80px] object-contain absolute right-14 sm:right-36 md:right-40 lg:right-64 z-10' />
        <div className='flex flex-col items-center text-center'>
          <Image src="/images/party-hub-logo.svg" width={140} alt='Logo' height={300} className='w-[80px] -mb-6 md:w-[100px] object-contain z-10' />
          <div className='flex flex-col items-center text-center gap-5 lg:gap-7'>
            <Image src="/images/characters/happy-woman.png" width={140} alt='Happy Woman' height={300} className='w-[140px] mb-16 md:mb-0 md:w-[140px] object-contain z-10 animate-bounceUpDown' />
            <h3 className='text-theme-yellow-500 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-theme-yellow-500 to-theme-purple-300 sm:leading-[6rem] md:leading-[8rem] animate-pulse -mt-20'>Launching Soon</h3>
            <p className='text-theme-neutral-0 text-sm md:text-base lg:text-lg md:-mt-6 lg:-mt-3'>We are going to launch our website very soon</p>
            <div className='flex flex-wrap items-center justify-center gap-3 md:gap-5'>
              <Typography as='a' href="https://vendor.partyhub.ai/" target="_blank">
                <Button type="filled-light" className="rounded-full">
                  Get Started
                </Button>
              </Typography>
              <Typography as='a' href="mailto:hi@partyhub.ai">
                <Button type="outlined" className="rounded-full">
                  Contact us
                </Button>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  )
}

export default ComingSoon