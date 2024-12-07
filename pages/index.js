import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Burhan Uddin - CV</title>
        <meta name="description" content="Burhan Uddin's Professional CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <nav className={styles.nav}>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </nav>

      <main className={styles.main}>
        <Section id="about" title="About Me" content="Brief introduction..." />
        <Section id="work" title="Work Experience" content="Details of work experience..." />
        <Section id="projects" title="Projects" content="Project details..." />
        <Section id="skills" title="Skills" content="Skills and proficiencies..." />
        <Section id="education" title="Education" content="Your educational background..." />
      </main>
    </div>
  )
}
