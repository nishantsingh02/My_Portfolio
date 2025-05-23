import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import linkdinLight from "../../assets/linkedin-light.svg"
import linkdinDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";

function Hero() {

  const {theme , toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}> 
        <img
       className={styles.hero}
       src={heroImg}
      alt="Profile picture of Nishant Singh" 
      />
      <img 
      className={styles.colorMode} 
      src={themeIcon} alt="color mode icon"  
      onClick={toggleTheme}
      />
      </div>

    <div className={styles.info}>
      <h1> 
        Nishant
        <br />
        Singh
      </h1>
      <h2>Frontend Developer</h2>
      <span>
        <a href="https://x.com/nishantsingh211" target="_blank">
        <img src={twitterIcon} alt ="Twitter Icon" />
        </a>
        <a href="https://github.com/nishantsingh02" target="_blank">
        <img src={githubIcon} alt ="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/nishant-singh02/" target="_blank">
        <img src={linkdinIcon} alt ="Linkdin Icon" />
        </a>
      </span>
      <p className={styles.discription}>With a strong foundation in AI, machine learning, and web development, Nishant Singh is passionate about building intelligent and scalable solutions.</p>
      <a href={CV} download>
        <button className="hover">
          Resume
        </button>
      </a>
    </div>

    </section>
  )
}

export default Hero;
