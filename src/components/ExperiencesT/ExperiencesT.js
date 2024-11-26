import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import Experience from '../Experience/Experience'
import './ExperiencesT.css'

const ExperiencesT = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section experiences'>
      <h2 className='section__title'>Experiences</h2>

      <div className='experiences__grid'>
        {experiences.map((experience) => (
          <Experience key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default ExperiencesT
