import { ReactNode } from 'react'
import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as RobotoFlex,
} from 'next/font/google'
import './globals.css'

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
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
