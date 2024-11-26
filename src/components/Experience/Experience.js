import './Experience.css'

const Experience = ({ experience }) => (
  <div className='experience'>
    <h3 className='experience__company'>{experience.name}</h3>
    <p className='experience__dates'>{experience.dates}</p>
    <p className='experience__location'>{experience.location}</p>
    <p className='experience__description'>{experience.description}</p>
  </div>
)

export default Experience
