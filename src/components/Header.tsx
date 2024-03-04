// react
import { useEffect, useRef, useState } from "react"
// images
import Logo from "@/assets/images/logos/logo.svg"
import VK from "@/assets/images/logos/vk.svg"
import TG from "@/assets/images/logos/tg.svg"
import OK from "@/assets/images/logos/ok.svg"
import RT from "@/assets/images/logos/rt.svg"

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const menuBtn = useRef<HTMLInputElement>(null)
  const [menu, setMenu] = useState<boolean>(false)

  useEffect(()=>{
    if(menu) document.body.style.overflow = "hidden"
    else{
      menuBtn.current!.checked = false
      document.body.style.overflow = "unset"
    }
  }, [menu])

  return (
    <header ref={headerRef}>
      <div className="bg" />
      <div className="wrapper">
        <a className="logo" href="/" style={{ backgroundImage: `url("${Logo.src}")` }} />
        <div className="menuBtn">
          <input ref={menuBtn} type="checkbox" id="menuBtn" onChange={(e)=>{setMenu(e.target.checked)}} />
          <label htmlFor="menuBtn" />
        </div>
        <nav className={menu? "": "hidden"}>
          <ul></ul>
          <ul>
            <li><a href="/#" onClick={()=>{setMenu(false)}}>Главная</a></li>
            {/*<li><a href="/#plan" onClick={()=>{setMenu(false)}}>Программа мероприятий</a></li>*/}
            <li><a href="/#qa" onClick={()=>{setMenu(false)}}>Вопросы</a></li>
            <li><a href="#contact" onClick={()=>{setMenu(false)}}>Контакты</a></li>
          </ul>
          <ul>
            <li><a target="_blank" style={{ backgroundImage: `url("${VK.src}")` }} href="https://vk.com/tvoidvfu" /></li>
            <li><a target="_blank" style={{ backgroundImage: `url("${TG.src}")` }} href="https://t.me/tvoidvfu" /></li>
            <li><a target="_blank" style={{ backgroundImage: `url("${OK.src}")` }} href="https://ok.ru/group/68737064632375" /></li>
            <li><a target="_blank" style={{ backgroundImage: `url("${RT.src}")` }} href="https://rutube.ru/channel/23787464/" /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
 
export default Header
