// next
import Head from 'next/head'
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default () => {
  return (
    <>
      <Head>
        <title>День открытых дверей ДВФУ</title>
        <meta name="description" content="1 апреля Дальневосточный федеральный университет в очном формате проводит День открытых дверей. Приглашаем абитуриентов и родителей!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="wrapper events">
        <h1>Программа Дня открытых дверей</h1>
        <h2>Корпус А</h2>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A6.svg" alt="" />
          <div className="right lightblue">
            <h3>Холл 6 уровень</h3>
            <h4>9:00 – 17:00</h4>
            <p>Основной ресепшен / запись на экскурсии</p>
          </div>
        </div>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A5a.svg" alt="" />
          <div className="right blue">
            <h3>Холл 5 уровень</h3>
            <h4>9:00 – 17:00</h4>
            <p>Приемная комиссия / Договорной отдел / Представители банков: Сбер и Газпром / Служба проректора по международным отношениям: «Возможности ДВФУ: стажировки и обучение за рубежом» / Дополнительное профессиональное образование</p>
          </div>
        </div>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A4.svg" alt="" />
          <div className="right orange">
            <h3>Холл 4 уровень</h3>
            <h4>9:00 – 17:00</h4>
            <p>Ярмарка Институтов (12 стендов) + Военный учебный центр</p>
          </div>
        </div>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A4.svg" alt="" />
          <div className="right lightblue">
            <h3>Кафе «Аякс» 4 уровень</h3>
            <h4>13:00 – 13:30</h4>
            <p>Русский язык: ЕГЭ (ГИА-11) «Как писать сочинения по русскому языку?». Консультация для школьников от заместителя председателя предметной комиссии по литературе Панчеко Т.Ф.</p>
            <h4>14:00 – 15:00</h4>
            <p>Встреча со студентами «Как пережить ЕГЭ? Личный опыт»</p>
          </div>
        </div>

        <h2>Корпус В</h2>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6.svg" alt="" />
          <div className="right blue">
            <h3>Синий зал 6 уровень</h3>
            <h4>11:00 – 12:30</h4>
            <p>Открытие Дня открытых дверей - Пленарная дискуссия «Как поступить в лучший университет на Дальнем Востоке?»</p>
            <h4>13:00 – 14:00</h4>
            <p>Открытая встреча с директорами Институтов о возможностях ДВФУ, партнеров, ответы на вопросы участников. ИМКТ.</p>
            <h4>14:30 – 15:30</h4>
            <p>Открытая встреча с директорами Институтов о возможностях ДВФУ, партнеров, ответы на вопросы участников. ШЭМ.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6.svg" alt="" />
          <div className="right lightblue">
            <h3>Средний зал 6 уровень (центральный лекторий)</h3>
            <h4>10:00 – 10:30</h4>
            <p>Открытая встреча с директорами Институтов о возможностях ДВФУ, партнеров, ответы на вопросы участников. ШИГН.</p>
            <h4>13:00 – 14:00</h4>
            <p>Открытая встреча с директорами Институтов о возможностях ДВФУ, партнеров, ответы на вопросы участников. ВИ-ШРМИ.</p>
            <h4>14:30 – 15:30</h4>
            <p>Открытая встреча с директорами Институтов о возможностях ДВФУ, партнеров, ответы на вопросы участников. ПИ.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6.svg" alt="" />
          <div className="right orange">
            <h3>Холл 6 уровень</h3>
            <h4>9:00 – 17:00</h4>
            <p>Дополнительный ресепшен Ярмарка студенческих организаций, студенческих активностей / Студенческое научное общество / AR/VR Мобильная телестудия для выступлений проректоров, директоров Институтов, руководителей направлений.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}