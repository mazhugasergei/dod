// next
import Head from 'next/head'
// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// images
import A6_hall from "@/assets/images/floors/A6_hall.svg"
import A5_hall from "@/assets/images/floors/A5_hall.svg"
import A4_hall from "@/assets/images/floors/A4_hall.svg"
import B6_hall from "@/assets/images/floors/B6_hall.svg"
import B6_blue from "@/assets/images/floors/B6_blue.svg"
import B6_middle from "@/assets/images/floors/B6_middle.svg"
import B6_column from "@/assets/images/floors/B6_column.svg"
import B7_hill from "@/assets/images/floors/B7_hill.svg"
import B5_marine from "@/assets/images/floors/B5_marine.svg"

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
            <img src={A6_hall.src} alt="" />
            <div className="right lightblue">
              <h3>Холл 6 уровень</h3>
              <h4>9:00 - 16:00</h4>
              <p>Ресепшен. Консультации по Дню открытых дверей (1)</p>
              <h4>10:00 - 15:00</h4>
              <p>Запись на экскурсии (2)</p>
            </div>
          </div>
          <div className="item">
            <img src={A5_hall.src} alt="" />
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
            <img src={A4_hall.src} alt="" />
            <div className="right orange">
              <h3>Холл 4 уровень</h3>
              <h4>10:00 - 16:00</h4>
              <p>Образовательная ярмарка институтов и школ</p>
            </div>
          </div>
          <div className="item">
            <img src="https://raw.githubusercontent.com/markuswedler/dod/main/public/assets/images/floors/A4cafe.svg" alt="" />
            <div className="right lightblue">
              <h3>Кафе «Аякс» 4 уровень</h3>
              <h4>10:00 - 10:40</h4>
              <p>Русский язык: ЕГЭ (ГИА-11). Как писать сочинение по русскому языку. Консультация для школьников от председателя предметной комиссии ЕГЭ по русскому языку Панченко Татьяны Федоровны.</p>
              <h4>13:00 - 14:00</h4>
              <p>Русский язык: ЕГЭ (ГИА-11). Как писать сочинение по русскому языку. Консультация для школьников от председателя предметной комиссии ЕГЭ по русскому языку Панченко Татьяны Федоровны.</p>
              <h4>14:00 - 15:30</h4>
              <p>Встреча со студентами «Как пережить ЕГЭ? Личный опыт». Студенты ДВФУ разных курсов и направлений расскажут о выборе профессии, о том, как готовиться к экзаменам и не выгореть, о поддержке, ожиданиях и результатах.</p>   
              <p>Модератор: Черепнина Валерия, студентка 1 курса направления «Конфликтология», старший наставник.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>Корпус В</h2>
          <div className="item">
            <img src={B6_hall.src} alt="" />
            <div className="right orange">
              <h3>Холл 6 уровень</h3>
              <h4>9:00 - 16:00</h4>
              <p>Ресепшен. Консультации по Дню открытых дверей</p>
              <h4>10:00 - 16:00</h4>
              <p>Ярмарка студенческих организаций. Мастер-классы. Учебная телестудия</p>
            </div>
          </div>
          <div className="item">
            <img src={B6_blue.src} alt="" />
            <div className="right darkblue">
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
            <img src={B6_middle.src} alt="" />
            <div className="right blue">
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
            <img src={B6_column.src} alt="" />
            <div className="right lightblue">
              <h3>Зал «Колонный» 6 уровень</h3>
              <h4>10:00 - 11:00</h4>
              <p>Встреча с директором Института наукоемких технологий и передовых материалов</p>
              <h4>13:00 - 14:30</h4>
              <p>Встреча с проректором по дополнительному образованию</p>
            </div>
          </div>
          <div className="item">
            <img src={B7_hill.src} alt="" />
            <div className="right lightblue">
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
            <img src={B5_marine.src} alt="" />
            <div className="right blue">
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
