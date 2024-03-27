// next
import Head from "next/head"
// components
import Header from "@/components/Header"
import Footer from "@/components/Footer"


const Excursions = () => {
return (
<>

        <Head>
                <title>День открытых дверей ДВФУ</title>
                <meta name="description"
                        content="1 апреля Дальневосточный федеральный университет в очном формате проводит День открытых дверей. Приглашаем абитуриентов и родителей!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
                <section className="excursions wrapper">
                        <h1>Экскурсии, мастер-классы и квесты Дня открытых дверей</h1>
                        <p>Чтобы лучше познакомиться с Дальневосточным федеральным университетом, его уникальным
                                кампусом, условиями обучения и проживания, а также возможностями для занятий наукой и
                                всевозможными полезными и интересными делами во внечебное время, мы подготовили для
                                участников Дня открытых дверей насыщенную программу экскурсий, мастер- классов и даже
                                квестов. </p>
                        <p><br />Записаться можно заранее по ссылкам ниже или непосредственно 30 марта во время Дня
                                открытых дверей на специальной стойке, которая будет располагаться на 6 уровне холла
                                корпуса А (напротив центрального входа справа от основного ресепшена). Всем, кто прошел
                                регистрацию онлайн, необходимо перед экскурсией подтвердить свое участие волонтерам на
                                стойке.</p>
                        <div className="container">
                                <div className="item">
                                        <h3>1. Обзорная экскурсия по кампусу ДВФУ </h3>
                                        <h4>10:00-16:00 каждый час, кроме 12:00</h4>
                                        <p>Автобусно-пешеходная экскурсия по кампусу ДВФУ.</p>
                                        <p>Во время экскурсии мы посетим такие инфраструктурные объекты, как:</p>
                                        <ul>
                                                <li>Гостиничные номера студентов;</li>
                                                <li>Спортивный комплекс;</li>
                                                <li>Набережная кампуса;</li>
                                                <li>Учебные корпуса.</li>
                                        </ul>



                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824621/">Записаться</a>
                                </div>
                                <hr />
                                <div className="item">
                                        <h3>2. Экскурсия и мастер-классы в Школе медицины и наук о жизни ДВФУ </h3>
                                        <p>Школа медицины и наук о жизни ДВФУ занимается подготовкой медицинских кадров.
                                                Преимущества перед другими медицинскими образовательными заведениями:
                                                наличие современной университетской клиники, практикующий
                                                профессорско-преподавательский состав, а также постоянное развитие
                                                технической базы. Это позволяет обучать в стенах ДВФУ высококлассных
                                                специалистов в соответствии с самыми современными отечественными и
                                                мировыми стандартами для работы во всех сферах здравоохранения.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824701/">Записаться</a>
                                </div>
                                <div className="item">
                                        <h3>Экскурсия в Центр геномной и регенеративной медицины </h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>Во время экскурсии вы увидите не только уникальное оборудование, аналогов
                                                которого нет в России, но еще у вас будет уникальная возможность
                                                провести генетическое исследование своими руками во время мастер-класса
                                                «Генетические и клеточные технологии для жизни и борьбы с опасными
                                                заболеваниями». </p>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Здоровье зубов – здоровье всего организма»</h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>На мастер-классе откроется правда и развеются мифы про здоровые зубы.
                                                Научимся определять уровень здоровья ротовой полости и узнаем все
                                                тонкости профессии врача-стоматолога.</p>
                                </div>

                                <div className="item">
                                        <h3>Мастер-класс «Химия минеральной воды»</h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>На мастер-классе вы познакомитесь с основами физико-химических методов для
                                                элементного анализа материалов (на примере воды различного состава) и
                                                самостоятельно проведете различные качественные реакции.</p>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Аптечное изготовление лекарственных средств» </h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>На мастер-классе вы познакомьтесь ближе со специальностью фармация и своими
                                                руками научитесь изготавливать лекарственные формы.</p>



                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Аптечное изготовление лекарственных средств» </h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>На мастер-классе вы познакомьтесь ближе со специальностью фармация и своими
                                                руками научитесь изготавливать лекарственные формы.</p>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Химичим по-медицински» </h3>
                                        <p>На мастер-классе вы научитесь определять группу крови при помощи цоликлона по
                                                системе АВ0, выделять нуклеопротеины из банана, проведете качественные
                                                реакции на витамины.</p>
                                </div>
                                <div className="item">
                                        <h3> Мастер-класс «Узнай возраст своих легких» </h3>
                                        <p> На мастер-классе вы поучаствуете в проведении спирометрии с определением
                                                возраста легких, а также узнаете о важности сохранения здоровья легких,
                                                как главного источника кислорода.</p>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Заглянем внутрь» </h3>
                                        <p>На мастер-классе мы покажем вам особенности строения и функционирования
                                                внутренних органов человека на натуральных анатомических препаратах.
                                        </p>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Кто Я? (особенности памяти)» </h3>
                                        <p>На мастер-классе вы познакомитесь с особенностями формирования памяти и с
                                                условиями формирования долговременной памяти, выясните какая память у
                                                вас ведущая. </p>

                                </div>

                                <hr />
                                <div className="item">
                                        <h3>3. Погружение в Институт Мирового океана</h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>В Институте Мирового океана (ИМО) ДВФУ вы окажетесь в научно-образовательном
                                                центре Ocean Science и смежных наук. Вы сможете изучать биологию и
                                                гидрометеорологию, науки о Земле, заниматься мехатроникой
                                                и робототехникой. Географическое расположение ДВФУ позволяет студентам
                                                ИМО на практике познакомиться с океаном во время занятий.
                                        </p>
                                        <p>На экскурсии в Институте Мирового океана ДВФУ вы познакомитесь с
                                                преподавателями и студентами, побываете в научно-исследовательских
                                                лабораториях и узнаете, чему можно научиться в ИМО на тематических
                                                мастер-классах и познавательных лекциях.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824784/">Записаться</a>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Всё о нашей земле и немного больше»</h3>
                                        <p>Если вы хотите делать окружающий нас мир лучше, то приходите к нам на
                                                экскурсию. Вы сможете очистить морскую среду, узнать будут ли ещё в
                                                нашем мире ледниковые периоды и изучить микроорганизмы, которые влияют
                                                на нашу среду.</p>

                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Погружение в мир биологии»</h3>
                                        <p>Вы всегда интересовались научными исследованиями, хотели вырастить себе
                                                милого друга или увлекались растениеводством? Приходите к нам, мы
                                                расскажем вам про множество интересных фактов о почве, вы сможете сами
                                                измерить почвенное плодородие, а также мы расскажем вам про научные
                                                лаборатории, работу генетиков, цитологов и других исследователей, вы
                                                сможете понять как устроены лаборатории и с какими приборами работают
                                                учёные.</p>

                                </div>
                                <hr />
                                <div className="item">
                                        <h3>4. Экскурсия Политеха «Хочешь стать инженером? Спроси меня как!» </h3>
                                        {/* <h4>(начало в 11:00 и 15:00)</h4> */}
                                        <p>Подготовка инженерных кадров для развития инновационной экономики России –
                                                приоритетное направление в деятельности ДВФУ и главная миссия
                                                Политехнического института.</p>
                                        <p>Спектр образовательных программ Политехнического института ДВФУ обеспечивает
                                                потребности практически всех отраслей промышленности: нефтедобычи и
                                                нефтепереработки, горного и геологического профиля, архитектуры,
                                                строительства и энергетики, проектирования и производства морского и
                                                сухопутного транспорта, приборов различного назначения, а также
                                                инноватики, безопасности жизнедеятельности и т.д.</p>
                                        <p>На экскурсии вы сможете познакомиться с проектами направления «Дизайн
                                                архитектурной среды и архитектура», увидеть пространства для обучения
                                                инженеров, посмотреть оснащение современных аудиторий и лабораторий,
                                                посетить Центр проектной деятельности ДВФУ и пообщаться со студентами
                                                Института.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824794/">Записаться</a>

                                </div>
                                <hr />
                                <div className="item">
                                        <h3>5. Terra Humaniora: экскурсия в Школу искусств и гуманитарных наук</h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>Вы познакомитесь с тем, как свой профессиональный путь находят будущие
                                                историки, философы, дизайнеры, психологи, логопеды, журналисты,
                                                рекламщики, теологи, конфликтологи, социологи, медийщики. Мы откроем для
                                                вас двери лабораторий и мастерских. Земля гуманитариев ждет.</p>
                                        <p>После экскурсии вас ждут увлекательные мастер-классы.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824860/">Записаться</a>

                                </div>
                                <hr />
                                <div className="item">
                                        <h3>6. Мастер-классы в Институте наукоемких технологий и передовых материалов
                                        </h3>
                                        <p>Институт наукоемких технологий и передовых материалов – это
                                                научно-образовательный центр мирового уровня, ведущий подготовку
                                                высококвалифицированных кадров через исследование природы вещества,
                                                создание новых материалов и развитие наукоемких технологий, которые
                                                определяют наше будущее.</p>
                                        <p>Во время мастер-класса <b>«Определение содержания легкорастворимых форм
                                                        химических элементов в почве. Способы очистки веществ от
                                                        примесей»</b> вы познакомитесь с некоторыми качественными
                                                реакциями, а также сами приготовите вытяжки из почвы с последующим
                                                качественным определением тяжелых металлов. </p>
                                        <p>А молодые ученые физики проведут вам мастер-класс <b>«Увлекательные
                                                        эксперименты»</b>, покажут, как жидкий азот способен изменить
                                                привычный нам мир, нарисуют ваши рисунки металлической плёнкой, и это
                                                ещё не всё!</p>
                                        <p>В рамках мастер-класса <b>«Химическое материаловедение как инструмент новой
                                                        энергетики XXI-века»</b> вы узнаете, как получают специальные
                                                материалы для атомной отрасли, проведете эксперимент по химическому
                                                синтезу слоистых двойных гидроксидов, а также узнаете из чего состоит
                                                полученное вещество. </p>
                                        <p>Искровое плазменное спекание, синтез материалов, современное оборудование –
                                                всё это ждет вас на мастер-классе <b>«Многофункциональные керамические
                                                        материалы» </b></p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824868/">Записаться</a>
                                </div>
                                <hr />
                                <div className="item">
                                        <h3>7. «Way to success» – квест-знакомство со Школой экономики и менеджмента
                                        </h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>Путь к успеху начинается здесь – в Школе экономики и менеджмента! Вы
                                                погрузитесь в жизнь наших студентов и познакомитесь с представителями
                                                самых разных направлений: экономики, менеджмента, туризма,
                                                бизнес-аналитики, цифровой торговли и гостиничного дела, сервис-дизайна
                                                в бизнесе и управлении, а также экономической безопасности. Пройти
                                                испытания смогут только те, кто не запутается на тропах Школы.</p>
                                        <p>Собирай команду и участвуй! Мы ждем тебя на нашем квесте!</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824873/">Записаться</a>


                                </div>
                                <hr />
                                <div className="item">
                                        <h3>8. Передовая инженерная школа «Институт биотехнологий, биоинженерии и
                                                пищевых систем»: создавай революционные изменения в бизнесе, науке и
                                                образовании в главном восточном вузе России</h3>
                                        <p>Передовая инженерная школа ДВФУ входит в 50 передовых инженерных школ РФ
                                                различной специализации, определённых в результате Федерального Конкурса
                                                Министерства науки и высшего образования и поддерживаемых Правительством
                                                РФ.</p>
                                        <p>Школа является первой на Дальнем Востоке и одной из трёх в России по
                                                биотехнологической специализации, получивших статус Передовых инженерных
                                                школ федерального значения.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824877/">Записаться</a>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Выделение ДНК из фруктов»</h3>
                                        {/* <h4>(начало в 10:00 и 14:00)</h4> */}
                                        <p>Посетите лабораторию Передовой инженерной школы, чтобы вместе с практикующими
                                                генетиками выделить ген банана. Во время мастер-класса, ты познакомишься
                                                с методами выделения генов и узнаешь, как это можно делать в домашних
                                                условиях.</p>

                                </div>

                                <hr />
                                <div className="item">
                                        <h3>9. Wanted: найди преступника вместе с Юридической школой ДВФУ</h3>
                                        <p>В рамках мастер-класса на криминалистическом полигоне попытаемся вместе
                                                обнаружить следы преступления, воспользовавшись следственным чемоданом.
                                                Узнаем о некоторых тонкостях криминалистической деятельности и работы
                                                следователем на месте происшествия. После мастер-класса посетим музей
                                                криминалистики и познакомимся с экспонатами.</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824885/">Записаться</a>
                                </div>
                                <hr />
                                <div className="item">
                                        <h3>10. Школьники ДВФУ: стань частью университета до поступления</h3>

                                        <p>Проекты, образовательные программы, хакатоны и олимпиады – твоя возможность
                                                стать частью лучшего вуза на Дальнем Востоке до поступления. Виртуальная
                                                реальность, Квадрокоптеры, Медицинская химия, Нейросети и многое другое
                                                в нашем Доме научной коллаборации!</p>
                                        <a className="btn"
                                                href="https://dod-dvfu.timepad.ru/event/2824888/">Записаться</a>
                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Моя первая картина в VR»</h3>
                                        <p>В этом мастер-классе вы познакомитесь с возможностями создания цифрового
                                                искусства в виртуальной реальности. Вы узнаете, как использовать
                                                специальные инструменты и программы для рисования в VR, и создадите свою
                                                первую картину в этом формате.</p>

                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Передача эмоций в дизайне»</h3>
                                        <p>В этом мастер-классе вы узнаете, как с помощью дизайна передавать эмоции и
                                                создавать гармоничные пространства. Вы изучите основные принципы дизайна
                                                и их влияние на человека, а также познакомитесь с различными способами
                                                передачи эмоций через цвет, форму, текстуру и другие элементы дизайна.
                                        </p>

                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Паразиты под микроскопом»</h3>
                                        <p>Этот мастер-класс посвящен изучению микроскопического мира паразитов. Вы
                                                увидите, как выглядят различные паразиты в объектив микроскопа, изучите
                                                их строение и особенности жизненного цикла. Кроме того, вы узнаете,
                                                какими методами сотрудники Роспотребнадзора выявляют источники заражения
                                                паразитами.</p>

                                </div>
                                <div className="item">
                                        <h3>Мастер-класс «Нейросети - на пальцах»</h3>
                                        <p>Этот мастер-класс посвящен одному из самых актуальных направлений в области
                                                искусственного интеллекта - нейросетям. Вы узнаете, чем нейросети
                                                отличаются от традиционных алгоритмов, как они строятся и обучаются.
                                                Практические занятия позволят вам самостоятельно обучить простую
                                                нейросеть и понять, как она работает.</p>

                                </div>
                                <div className="item">
                                        <h3>Интерактивная экскурсия в Доме научной коллаборации</h3>
                                        <p>В рамках экскурсии можно познакомиться с деятельностью департамента
                                                довузовского образования, узнать, как получить льготы и дополнительные
                                                баллы при поступлении. Участники так же смогут познакомиться с
                                                технологией 3d-печати, попробовать себя в пилотировании квадрокоптера,
                                                управлять роботами.</p>

                                </div>
                                <hr />
                                <div className="item">
                                        <h3> Аякс</h3>
                                        <p>В Аяксе будет находиться зона интеллектуальных активностей ДВФУ. Всех гостей
                                                ждут всеми любимые шахматы, шашки, а также более экзотические виды -
                                                сеги, го и маджонг. Мы приготовили для всех желающих крутые настольные
                                                игры, в которые можно поиграть одному или с друзьями и с весельем
                                                провести время. В 15 часов пройдёт блиц-турнир по шахматам 5+3, где
                                                гости смогут побороться за звание лучшего абитуриента ДВФУ.</p>
                                </div>


                        </div>
                </section>
        </main>
        <Footer />
</>
)
}

export default Excursions
