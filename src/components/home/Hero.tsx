// images
import Fox from "@/assets/images/vlad.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="cont">
          <p>1 апреля 2023</p>
          <h1>День<br/>открытых<br/>дверей</h1>
        </div>
        <img src={Fox.src} alt="" />
      </div>
    </section>
  )
}
 
export default Hero
