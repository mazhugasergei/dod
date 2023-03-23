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
              <p>690922, Приморский край, г.&nbsp;Владивосток, о.&nbsp;Русский, п.&nbsp;Аякс,&nbsp;10,Кампу ДВФУ, корп.С, уровень 6, С 608</p>
            </div>
            <div className="item">
              <div className="title">Телефон</div>
              <a href="tel:8-800-555-0-888">8-800-555-0-888</a>
            </div>
            <div className="item">
              <div className="title">Почта</div>
              <a className="email" href="mailto:priem@dvfu.ru">priem@dvfu.ru</a>
            </div>
            <div className="item flex-cont">
              <div className="item">
                <div className="title">Социальные сети</div>
                <div className="links">
                  <a target="_blank" href="https://vk.com/fefudvfu" className="vk" />
                  <a target="_blank" href="https://ok.ru/group/68737064632375" className="ok" />
                  <a target="_blank" href="https://rutube.ru/channel/23787464/" className="rt" />
                </div>
              </div>
              <div className="item">
                <div className="title">Поступление</div>
                <div className="links">
                  <a target="_blank" href="https://www.dvfu.ru/admission/" className="ad" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title">Режим работы</div>
              <p>Пн-Пт: 10:00-17:00</p>
              <p>Сб-Вс: выходные</p>
            </div>
          </li>
          <li className="right">
            <a target="_blank" href="https://kraizemli.ru/vtour/dvfu/index.php">3D-тур по кампусу</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
 
export default Footer
