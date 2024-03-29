// images
import Tour from "@/assets/images/3D_Tour.jpg"
import VK from "@/assets/images/logos/vk.svg"
import TG from "@/assets/images/logos/tg.svg"
import OK from "@/assets/images/logos/ok.svg"
import RT from "@/assets/images/logos/rt.svg"
import FEFU from "@/assets/images/logos/fefu.svg"

const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrapper">
        <h1>Контакты приемной комиссии</h1>
        <ul className="grid">
          <li className="left">
            <a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0"}}>Yandex Maps</a>
            <a href="https://yandex.com/maps/11409/primorsky-krai/house/kampus_dalnevostochnogo_federalnogo_universiteta_ks/ZUoHaA9pTU0HVUJuYGJxc3hgZgg=/?ll=131.895853%2C43.024252&utm_medium=mapframe&utm_source=maps&z=18.67" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Kampus Dalnevostochnogo federalnogo universiteta, кE — Yandex Maps</a>
            <iframe src="https://yandex.com/map-widget/v1/?ll=131.895853%2C43.024252&mode=whatshere&whatshere%5Bpoint%5D=131.894398%2C43.024317&whatshere%5Bzoom%5D=15&z=15" allowFullScreen={true}></iframe>
          </li>
          <li className="center">
            <div className="item">
              <div className="title">Адрес</div>
              <p>690922, Приморский край, г.&nbsp;Владивосток, о.&nbsp;Русский, п.&nbsp;Аякс,&nbsp;10, Кампус ДВФУ, корп.С, уровень 6, С 608</p>
            </div>
            <div className="item">
              <div className="title">Телефон</div>
              <a href="tel:8-800-555-0-888">8-800-550-38-38</a>
            </div>
            <div className="item">
              <div className="title">Почта</div>
              <a className="email" href="mailto:priem@dvfu.ru">priem@dvfu.ru</a>
            </div>
            <div className="item flex-cont">
              <div className="item">
                <div className="title">Социальные сети</div>
                <div className="links">
                  <a target="_blank" style={{ backgroundImage: `url("${VK.src}")` }} href="https://vk.com/tvoidvfu" />
                  <a target="_blank" style={{ backgroundImage: `url("${TG.src}")` }} href="https://t.me/tvoidvfu" />
                  <a target="_blank" style={{ backgroundImage: `url("${OK.src}")` }} href="https://ok.ru/group/68737064632375" />
                  <a target="_blank" style={{ backgroundImage: `url("${RT.src}")` }} href="https://rutube.ru/channel/23787464/" />
                </div>
              </div>
              <div className="item">
                <div className="title">Поступление</div>
                <div className="links">
                  <a target="_blank" style={{ backgroundImage: `url("${FEFU.src}")` }} href="https://www.dvfu.ru/admission/" className="ad" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title">Режим работы</div>
              <p>Пн-Пт: 10:00-17:00</p>
              <p>Сб-Вс: выходные</p>
            </div>
          </li>
          <li className="right" style={{ backgroundImage: `url("${Tour.src}")` }}>
            <a target="_blank" href="https://kraizemli.ru/vtour/dvfu/index.php">3D-тур по кампусу</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
 
export default Footer
