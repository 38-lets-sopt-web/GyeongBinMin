import style from './Card.module.css'

const Card = ({ member }) => {
  return (
    <div className={style.card}>
      <p>{member.name}</p>
      <p>{member.github}</p>
      <p>{member.englishName}</p>
    </div>
  )
}

export default Card