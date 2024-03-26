// images
import Fox from "@/assets/images/vlad.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="cont">
          <p>30 марта 2024, 10:00</p>
          <h1>День<br/>открытых<br/>дверей</h1>
        </div>
        <img src={Fox.src} alt="" />
      </div>
    </section>
  )
}
 
export default Hero
