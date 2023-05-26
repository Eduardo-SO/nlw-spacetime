import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as RobotoFlex,
} from 'next/font/google'

import './globals.css'

import Blur from '@/components/Blur'
import Hero from '@/components/Hero'
import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'
import Stripes from '@/components/Stripes'
import Copyright from '@/components/Copyright'

const roboto = RobotoFlex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jam-juree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construida com React Next.js Tailwind e Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid h-screen lg:grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/5 bg-[url(../assets/bg-stars.svg)] bg-cover px-8 py-10 lg:px-28 lg:py-16 ">
            <Blur />
            <Stripes />

            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {/* Right */}
          <div className="hidden flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16 lg:flex ">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
