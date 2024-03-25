// next
import Head from 'next/head'
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// images
import A6_hall from "@/assets/images/floors/A6_hall.svg"
import A5_hall from "@/assets/images/floors/A5_hall.svg"
import A4_hall from "@/assets/images/floors/A4_hall.svg"
import A4_cafe from "@/assets/images/floors/A4_cafe.svg"
import B6_hall from "@/assets/images/floors/B6_hall.svg"
import B6_blue from "@/assets/images/floors/B6_blue.svg"
import B6_middle from "@/assets/images/floors/B6_middle.svg"
import B6_column from "@/assets/images/floors/B6_column.svg"
import B7_hill from "@/assets/images/floors/B7_hill.svg"
import B5_marine from "@/assets/images/floors/B5_marine.svg"
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".events h6") as NodeListOf<HTMLHeadingElement>
    icons.forEach(icon => {
      const textLength = icon.innerText.length
      switch (textLength) {
        case 1:
          icon.style.fontSize = ".65rem"
          break
        case 2:
          icon.style.fontSize = ".45rem"
          break
        case 3:
          icon.style.fontSize = ".3rem"
          break
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>День открытых дверей ДВФУ</title>
        <meta name="description" content="30 марта Дальневосточный федеральный университет в очном формате проводит День открытых дверей. Приглашаем абитуриентов и родителей!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="wrapper events">
          <h1>Программа Дня открытых дверей</h1>
          <div className="container">
            <h2>Корпус А</h2>
            <div className="item">
              <img src={A6_hall.src} alt="" />
              <div className="right lightblue">
                <h3>Холл 6 уровень</h3>
                <h4>9:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">1</h6>
                  <p>Ресепшен. Консультации по Дню открытых дверей</p>

                </div>
                <div className="flex">
                  <h6 className="orange">ДДО</h6>
                  <p>Дополнительное образование школьников</p>
                </div>
                {/*                <h4>10:00 - 15:00</h4>
                <div className="flex">
                  <h6 className="orange">2</h6>
                  <p>Запись на экскурсии</p>
                </div> */}
              </div>
            </div>
            <div className="item">
              <img src={A5_hall.src} alt="" />
              <div className="right blue">
                <h3>Холл 5 уровень</h3>
                <h4>10:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">Б</h6>
                  <p>Представители банков. Образовательные кредиты</p>
                </div>
                <div className="flex">
                  <h6 className="orange">ДОГ</h6>
                  <p>Договорной отдел. Консультации по платному обучению</p>
                </div>
                <div className="flex">
                  <h6 className="orange">ПК</h6>
                  <p>Приемная комиссия. Консультации по поступлению</p>
                </div>
                <div className="flex">
                  <h6 className="orange">ДПО</h6>
                  <p>Дополнительное профессиональное образование</p>
                </div>
                <div className="flex">
                  <h6 className="orange">ЦП</h6>
                  <p>Целевой прием</p>
                </div>
                <div className="flex">
                  <h6 className="orange">Р</h6>
                  <p>Представители работодателей</p>
                </div>
                {/* <h4>10:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">ДОГ</h6>
                  <p>Договорной отдел. Консультации по платному обучению</p>
                </div>
                <h4>10:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">ДПО</h6>
                  <p>Дополнительное профессиональное образование</p>
                </div>
                <h4>10:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">МО</h6>
                  <p>Международные программы и стажировки</p>
                </div>
                <h4>10:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="orange">Б</h6>
                  <p>Представители банков. Образовательные кредиты</p>
                </div> */}
              </div>
            </div>
            <div className="item">
              <img src={A4_hall.src} alt="" />
              <div className="right orange">
                <h3>Холл 4 уровень</h3>
                <h4>10:00 - 16:00</h4>
                <p>Образовательная ярмарка институтов и школ</p>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#E7799C" }}>1</h6>
                  <p>Институт математики и компьютерных технологий (ИМКТ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#FDBB40" }}>2</h6>
                  <p>Юридическая школа (ЮШ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#138879" }}>3</h6>
                  <p>Восточный институт — Школа региональных и международных
                    исследований (ВИ-ШРМИ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#FDBB40" }}>4</h6>
                  <p>Школа искусств и гуманитарных наук (ШИГН)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#C94D71" }}>5</h6>
                  <p>Школа педагогики (ШП)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#97D5CB" }}>6</h6>
                  <p>Институт Мирового океана (ИМО)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#97D5CB" }}>7</h6>
                  <p>Институт наукоемких технологий и передовых материалов (ИТПМ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#5A69A8" }}>8</h6>
                  <p>Военный учебный центр (ВУЦ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#66C18B" }}>9</h6>
                  <p>Политехнический институт (ПИ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#65C18B" }}>10</h6>
                  <p>Передовая инженерная школа «Институт биотехнологий, биоинженерии и пищевых систем» (ПИШ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#7377B7" }}>11</h6>
                  <p>Школа экономики и менеджмента (ШЭМ)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#FBBA41" }}>12</h6>
                  <p>Институт физической культуры и спорта (ИФКС)</p>
                </div>
                <div className="flex">
                  <h6 style={{ backgroundColor: "#71BCDC" }}>13</h6>
                  <p>Школа медицины и наук о жизни (ШМиНЖ)</p>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={A4_cafe.src} alt="" />
              <div className="right lightblue">
                <h3>Кафе «Аякс» 4 уровень</h3>
                <p>«Зона интеллектуальных активностей»</p>
                <h4>11:00–12:00</h4>
                <p>Марафон «ЕГЭ на сотку»</p>
                <h4>14:00–15:00</h4>
                <p>Встреча с проректором по дополнительному
                  образованию о платном и дополнительном
                  образовании в ДВФУ</p>
                <h4>13:00–17:00</h4>
                <p>Марафон «ЕГЭ на сотку»</p>
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Корпус В</h2>
            <div className="item">
              <img src={B7_hill.src} alt="" />
              <div className="right lightblue">
                <h3>Зал «Сопка» 7 уровень</h3>
                <h4>10:00–14:00</h4>
                <p>Фестиваль «Мой курс – на Восток!»</p>
                <h4>14:00–15:30</h4>
                <p><b>Восточный вектор </b><br />
                  Встреча с директором Восточного института</p>
              </div>
            </div>
            <div className="item">
              <img src={B6_hall.src} alt="" />
              <div className="right orange">
                <h3>Холл 6 уровень</h3>
                <h4>9:00 - 16:00</h4>
                <div className="flex">
                  <h6 className="lightblue">1</h6>
                  <p>Ресепшен. Запись на экскурсии</p>
                </div>
                <div className="flex">
                  <h6 className="lightblue">2</h6>
                  <p>Ярмарка студенческих организаций. Мастер-классы.
                    Творческая программа</p>
                </div>
                <div className="flex">
                  <h6 className="lightblue">3</h6>
                  <p>Фестиваль биотехнологических профессий</p>
                </div>
                <h3>Холл 5 уровень</h3>
                <h4>9:00 - 16:00</h4>
                <div className="flex">
                  {/* <h6 className="lightblue">1</h6> */}
                  <p>Студенческие организации</p>
                </div>

              </div>
            </div>
            <div className="item">
              <img src={B6_blue.src} alt="" />
              <div className="right darkblue">
                <h3>Зал «Синий» 6 уровень</h3>
                <h4>12:00–13:30</h4>
                <p><b>Открытие Дня открытых дверей </b><br />

                  Открытый диалог «Как поступить в лучший
                  университет на Дальнем Востоке?»</p>
                <h4>14:00–15:30</h4>
                <p><b>Цифровое будущее </b><br />Встреча с директором Института математики и компьютерных технологий</p>

              </div>
            </div>
            <div className="item">
              <img src={B6_middle.src} alt="" />
              <div className="right blue">
                <h3>Зал «Средний» 6 уровень</h3>
                <h4>10:00–11:30</h4>
                <p><b>Топ менеджмент компаний: юристы,
                  экономисты, управленцы</b><br />
                  Встреча с директорами Школы экономики
                  и менеджмента и Юридической школы</p>
                <h4>14:00–15:30</h4>
                <p><b>Высокие технологии: инженеры
                  и биотехнологи</b><br />
                  Встреча с директорами Передовой инженерной
                  школы, Политехнического института и Военного
                  учебного центра</p>

              </div>
            </div>
            {/*             <div className="item">
              <img src={B6_column.src} alt="" />
              <div className="right lightblue">
                <h3>Зал «Колонный» 6 уровень</h3>
                <h4>10:00 - 11:00</h4>
                <p>Встреча с директором Института наукоемких технологий и передовых материалов</p>
                <h4>13:00 - 14:30</h4>
                <p>Встреча с проректором по дополнительному образованию</p>
              </div>
            </div> */}
            <div className="item">
              <img src={B5_marine.src} alt="" />
              <div className="right blue">
                <h3>Зал «Морской» 5 уровень</h3>
                <h4>10:00–11:30</h4>
                <p><b>Мама, я гуманитарий</b><br />
                  Встреча с директорами Школы педагогики,
                  Школы искусств и гуманитарных наук и Института
                  физической культуры и спорта</p>
                <h4>14:00–15:30</h4>
                <p><b>От клетки до организма: физика и химия
                  живых процессов</b><br />
                  Встреча с директорами Института Мирового океана,
                  Института наукоемких технологий и передовых
                  материалов и Школы медицины и наук о жизни</p>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
