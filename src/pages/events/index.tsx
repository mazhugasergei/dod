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
        <div className="container">
          <h2>Корпус А</h2>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A6.svg" alt="" />
            <div className="right lightblue">
              <h3>Холл 6 уровень</h3>
              <h4>9:00 - 16:00</h4>
              <p>Ресепшен. Консультации по Дню открытых дверей (1)</p>
              <h4>10:00 - 15:00</h4>
              <p>Запись на экскурсии (2)</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A5.svg" alt="" />
            <div className="right blue">
              <h3>Холл 5 уровень</h3>
              <h4>10:00 - 16:00</h4>
              <p>Приемная комиссия. Консультации по поступлению (пк)</p>
              <h4>10:00 - 16:00</h4>
              <p>Договорной отдел. Консультации по платному обучению (дог)</p>
              <h4>10:00 - 16:00</h4>
              <p>Дополнительное профессиональное обучение (дпо)</p>
              <h4>10:00 - 16:00</h4>
              <p>Международные программы и стажировки</p>
              <h4>10:00 - 16:00</h4>
              <p>Представители банков. Образовательные кредиты</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A4hall.svg" alt="" />
            <div className="right orange">
              <h3>Холл 4 уровень</h3>
              <h4>10:00 - 16:00</h4>
              <p>Образовательная ярмарка институтов и школ</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A4ajax.svg" alt="" />
            <div className="right lightblue">
              <h3>Кафе «Аякс» 4 уровень</h3>
              <h4>13:00 - 14:00</h4>
              <p>Лекторий «Как писать сочинения по русскому языку?» (консультация для школьников от заместителя председателя предметной комиссии по литературе Панчеко Т.Ф.)</p>
              <h4>14:00 - 15:30</h4>
              <p>Встреча со студентами «Как пережить ЕГЭ? Личный опыт»</p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Корпус В</h2>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6hall.svg" alt="" />
            <div className="right orange">
              <h3>Холл 6 уровень</h3>
              <h4>9:00 - 16:00</h4>
              <p>Ресепшен. Консультации по Дню открытых дверей</p>
              <h4>10:00 - 16:00</h4>
              <p>Ярмарка студенческих организаций. Мастер-классы. Учебная телестудия</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6blue.svg" alt="" />
            <div className="right blue">
              <h3>Зал «Синий» 6 уровень</h3>
              <h4>11:00 - 13:00</h4>
              <p>Открытие Дня открытых дверей. Пленарная дискуссия «Как поступить в лучший университет на Дальнем Востоке?»</p>
              <h4>13:00 - 14:30</h4>
              <p>Встреча с директором Института математики и компьютерных технологий</p>
              <h4>14:30 - 16:00</h4>
              <p>Встреча с директором Школы экономики и менеджмента</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6middle.svg" alt="" />
            <div className="right lightblue">
              <h3>Зал «Средний» 6 уровень</h3>
              <h4>10:00 - 11:00</h4>
              <p>Встреча с директором Школы искусств и гуманитарных наук</p>
              <h4>13:00 - 14:30</h4>
              <p>Встреча с директором Восточного института</p>
              <h4>14:30 - 16:00</h4>
              <p>Встреча с директором Политехнического института</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B6column.svg" alt="" />
            <div className="right orange">
              <h3>Зал «Колонный» 6 уровень</h3>
              <h4>10:00 - 11:00</h4>
              <p>Встреча с директором Института наукоемких технологий и передовых материалов</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B7.svg" alt="" />
            <div className="right orange">
              <h3>Зал «Сопка» 7 уровень</h3>
              <h4>10:00 - 11:00</h4>
              <p>Встреча с директором Института наук о жизни и биомедицины</p>
              <h4>13:00 - 14:30</h4>
              <p>Встреча с директором Передовой инженерной школы</p>
              <h4>14:30 - 16:00</h4>
              <p>Встреча с директором Школы педагогики</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/B5marine.svg" alt="" />
            <div className="right orange">
              <h3>Зал «Морской» 5 уровень</h3>
              <h4>10:00 - 11:00</h4>
              <p>Встреча с директором Школы медицины</p>
              <h4>13:00 - 14:30</h4>
              <p>Встреча с директором Института Мирового океана</p>
              <h4>14:30 - 16:00</h4>
              <p>Встреча с директором Юридической школы</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
