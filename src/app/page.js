import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import SignIn from './components/SignIn'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <SignIn/>
    </main>
  )
}
