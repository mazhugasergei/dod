// react
import { useState } from "react"

const QA = () => {
  const questions = [
    "Как подготовиться к первому посещению вуза?",
    "Что интересного можно узнать на Дне открытых дверей?",
    "Как добраться?",
    "Как будет организован проезд и проход в корпуса?",
    "Как записаться на экскурсии?",
    "Возможно ли проживание на кампусе на период Дня открытых дверей?"
  ]
  const answers = [
    "Первое посещение университета часто вызывает волнение у абитуриентов, но не стоит переживать и волноваться, ведь у нас будет организован свободный доступ на кампус, чтобы легче сориентироваться смонтированы навигационные вывески, также наши волонтёры подскажут, где находятся аудитории, а руководство университета, сотрудники приёмной комиссии и преподаватели ответят на все интересующие вопросы по поступлению. Чтобы первое знакомство с университетом было максимально продуктивным заранее изучите программу Дня открытых дверей, запишитесь на экскурсии, постарайтесь посетить как можно больше мероприятий, не стесняйтесь задавать все интересующие вас вопросы, можете заранее их подготовить, смело берите информационные буклеты, знакомьтесь с инфраструктурой кампуса.",
    "День открытых дверей поможет получить больше информации об интересующих специальностях, узнать об особенностях поступления, пообщаться с преподавателями и сотрудниками приёмной комиссии, познакомиться с кампусом, а также посетить экскурсии по научным лабораториям, посетить мастер-классы, лектории от школ и институтов ДВФУ. Обо всех мероприятиях можно узнать из программы Дня открытых дверей.",
    "День открытых дверей пройдет в кампусе ДВФУ на о. Русском, вход для всех свободный. Добраться до университета можно на городском общественном транспорте до остановки «Кампус ДВФУ» (автобусы следующих маршрутов: 74, 76, 77, 15, 63, 29 д,), школьных автобусах для организованных групп, такси и личных автомобилях. Адрес кампуса ДВФУ — «ДВФУ кампус, о. Русский, пос. Аякс, 10».",
    "Для гостей Дня открытых дверей будут доступны для свободного посещения корпуса А и В. Остальные корпуса открыты для посещения в рамках организованных групп. Обращаем внимание, что служба безопасности кампуса может проверить крупные сумки и подозрительные предметы. Внутри кампуса для посетителей будет доступна многоуровневая крытая парковка напротив центральной группы корпусов (ГР-3). Маломобильные граждане и гости с ограниченными возможностями здоровья смогут парковаться на центральной площади, перед корпусом А.",
    "Для записи на экскурсии необходимо подойти к информационной стойке, сообщить специалисту приёмной комиссии о желании посетить экскурсию, выбрать время для её посещения. Рекомендуем записываться заранее на те экскурсии, которые хотите посетить, а также не опаздывать к выбранному времени.",
    "Для размещения иногородних гостей будут работать гостиницы ДВФУ. Чтобы забронировать номер, необходимо заполнить <a target="_blank" href="https://forms.yandex.ru/cloud/65dc6f4cc417f30452f555e8/">форму<a/>. Стоимость проживания для групп 450 рублей с каждого школьника, 450 рублей - 1 сопровождающий. Если приезжаете семьей, то 1700 с человека."
  ]
  const [questionsStates, setQuestionsStates] = useState<boolean []>(new Array(questions.length).fill(false))

  return (
    <section className="qa wrapper" id="qa">
      <h1>Часто задаваемые вопросы</h1>
      <ul>
        { questions.map((question, i) => (
            <li className={questionsStates[i]? "" : "hidden"} key={i}>
              <div className="question" onClick={()=>{
                let tmp = [...questionsStates]
                tmp[i] = !tmp[i]
                setQuestionsStates(tmp)
              }}>
                { question }
                <div className="sign"/>
              </div>
              <div className="answer">{ answers[i] }</div>
            </li>
        )) }
      </ul>
    </section>
  )
}
 
export default QA
