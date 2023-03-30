// images
import Image from "@/assets/images/campus.jpeg"

const Intro = () => {
  return (
    <section className="intro wrapper grid">
      <div>
        <p>Приглашаем абитуриентов и родителей! <br/>Вы сможете узнать о подготовке к поступлению в Дальневосточный федеральный университет.</p>
      </div>
      <img src={Image.src} alt="" />
    </section>
  )
}
 
export default Intro
