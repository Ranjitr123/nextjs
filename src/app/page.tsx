import Image from 'next/image'
import styles from './page.module.css'
import Homepage from "./components/Home"

export default function Home() {
  return (
    <main >
     <h1>this is next js app</h1>
     <p>we are using this for practice</p>
     <h3>changes</h3>
     <Homepage />
    </main>
  )
}
