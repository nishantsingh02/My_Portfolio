import styles from "./SkillsStyles.module.css"
import checkMarkIcon from "../../assets/checkmark-dark.svg"
import SkillsList from "../../common/SkillsList";

function Skills() {
  return <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.SkillsList}>
        <SkillsList src={checkMarkIcon} skill = "HTML" />
        <SkillsList src={checkMarkIcon} skill = "CSS" />
        <SkillsList src={checkMarkIcon} skill = "JavaScript" />
        <SkillsList src={checkMarkIcon} skill = "Node" />
        <SkillsList src={checkMarkIcon} skill = "TypeScript" />

        <hr />
    </div>
    <div className={styles.SkillsList}>
        
        <SkillsList src={checkMarkIcon} skill = "Angular" />
        <SkillsList src={checkMarkIcon} skill = "Vue" />
        <SkillsList src={checkMarkIcon} skill = "React" />
        <SkillsList src={checkMarkIcon} skill = "Tailwind CSS" />
        
        <hr />
    </div>
    <div className={styles.SkillsList}>
        <SkillsList src={checkMarkIcon} skill = "Redux" />
        <SkillsList src={checkMarkIcon} skill = "Git" />
        <SkillsList src={checkMarkIcon} skill = "GitHub" />
        <SkillsList src={checkMarkIcon} skill = "Jest" />

        <hr />
    </div>
  </section>
}

export default Skills;
