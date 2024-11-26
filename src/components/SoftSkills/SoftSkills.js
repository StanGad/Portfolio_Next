import uniqid from 'uniqid'
import { softskills } from '../../portfolio'
import './SoftSkills.css'

const SoftSkills = () => {
  if (!softskills.length) return null

  return (
    <section className='section soft skills' id='softskills'>
      <h2 className='section__title'>SoftSkills</h2>
      <ul className='softskills__list'>
        {softskills.map((softskills) => (
          <li key={uniqid()} className='softskills__list-item btn btn--plain'>
            {softskills}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SoftSkills
