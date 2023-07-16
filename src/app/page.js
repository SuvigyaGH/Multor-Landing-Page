import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import LandingPage from '@/LandingPage/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <LandingPage/>

    </>
  )
}
