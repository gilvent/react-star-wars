import styles from './FilmCard.module.scss'

function FilmCard ({ film }) {
  return (
    <div className={styles['film-card']}>
      <div className={styles['subtitle']}>Episode { film.episode_id }</div>
      <div className={styles['title']}>{ film.title }</div>
    </div>
  )
}

export default FilmCard;