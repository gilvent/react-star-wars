import styles from './FilmCard.module.scss'

function FilmCard ({ film }) {
  return (
    <div className={styles['film-card']}>
      <div className={styles['subtitle']}>Episode</div>
      <div className={styles['title']}>A New Hope</div>
    </div>
  )
}

export default FilmCard;