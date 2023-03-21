// next
import Head from 'next/head'
// react
import { useEffect, useRef } from "react"
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from "@/components/home/Hero"
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

        <!-- Yandex.Metrika counter -->
        <script defer type="text/javascript" >
           (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();
           for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
           k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

           ym(92890214, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
           });
        </script>
        <noscript defer><div><img src="https://mc.yandex.ru/watch/92890214" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
      </Head>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <main className="wrapper grid invitation">
          <p>Приглашаем абитуриентов и родителей! Вы сможете узнать о подготовке к поступлению в Дальневосточный федеральный университет</p>
        </main>
        <Plan />
        <QA />
      </main>
      <Footer />
    </>
  )
}
