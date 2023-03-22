// next
import Head from 'next/head'
// react
import { useEffect, useRef } from "react"
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from "@/components/home/Hero"
import Intro from '@/components/home/Intro'
import Plan from "@/components/home/Plan"
import QA from "@/components/home/QA"

export default () => {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    mainRef.current!.style.marginTop = `${-1 * document.querySelector("header")!.offsetHeight}px`
  }, [])

  return (
    <>
      <Head>
        <title>День открытых дверей ДВФУ</title>
        <meta name="description" content="Приглашаем абитуриентов и родителей! Вы сможете узнать о подгтовке к поступлению в Дальневосточный федеральный университет" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <Intro />
        <Plan />
        <QA />
      </main>
      <Footer />
    </>
  )
}
