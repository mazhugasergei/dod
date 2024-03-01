const Plan = () => {
  return (
    <section className="plan wrapper" id="plan">
      <h1>Программа Дня открытых дверей</h1>
      <ul className="grid">
        <li className="left grid-item">
          <ul>
            <li><div className="num">1</div><div>Встреча с ректором ДВФУ</div></li>
            <li><div className="num">2</div><div>Экскурсии по кампусу и научным лабораториям</div></li>
            <li><div className="num">3</div><div>Мастер-классы школ и институтов</div></li>
          </ul>
        </li>
        <li className="center grid-item">
          <div>и ещё</div>
          <div className="num">70+</div>
          <div>различных мероприятий!</div>
        </li>
        <li className="right grid-item">
          <a href="https://forms.yandex.ru/cloud/65dc6f4cc417f30452f555e8/" className="btn" target="_blank">Размещение на День открытых дверей 2024 г.</a>
          {/*<a href="/events" className="btn">Программа мероприятий</a>*/}
          {/*<a href="/excursions" className="btn">Экскурсии и мастер-классы</a>*/}
        </li>
      </ul>
    </section>
  )
}
 
export default Plan
