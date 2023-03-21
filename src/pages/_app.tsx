import '@/style/index.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(()=>{
  //   (function(m: any, e: any, t: any, r: any, i: any, k: any, a: any){
  //     m[i] = m[i] || function(){ (m[i].a = m[i].a || []).push(arguments) }
  //     m[i].l = new Date()
  //     for(var j=0; j<document.scripts.length; j++) if(document.scripts[j].src === r) { return }
  //     k = e.createElement(t)
  //     a = e.getElementsByTagName(t)[0]
  //     k.async = 1
  //     k.src = r
  //     a.parentNode.insertBefore(k, a)
  //   })( window, document, "scripts", "https://mc.yandex.ru/metrika/tag.js", "ym", null, null )
  
  //   ym(92890214, "init", {
  //     clickmap:true,
  //     trackLinks:true,
  //     accurateTrackBounce:true,
  //     webvisor:true
  //   })
  // }, [])
  
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}