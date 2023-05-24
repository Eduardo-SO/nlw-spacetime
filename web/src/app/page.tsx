import { cookies } from 'next/headers'

import Blur from '@/components/Blur'
import Copyright from '@/components/Copyright'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import Stripes from '@/components/Stripes'
import Profile from '@/components/Profile'

export default function Home() {
  const isAuthenticated = cookies().has('token')

  return (
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
        <EmptyMemories />
      </div>
    </main>
  )
}
