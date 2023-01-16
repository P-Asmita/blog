import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../component/header'
import Footer from '../component/footer'
import Format from '../layout/format'

import Section from '../component/section1'
import Section2 from '../component/section2'
export default function Home() {
  return (
    <div>
      <Format>
        <Section></Section>
        <Section2></Section2>
      </Format>
    </div>
  )
}

