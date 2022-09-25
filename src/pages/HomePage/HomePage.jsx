import { useContext, useEffect, useState } from 'react'
import FilmCard from '../../components/FilmCard'
import FilmContext from '../../context/FilmContext'
import styles from './HomePage.module.scss'

function HomePage () {
  const { films, getFilms } = useContext(FilmContext)
  const [filmList, setFilmList] = useState([])

  useEffect(() => {
    getFilms()
  }, [])

  useEffect(() => {
    const list = films.map(film => <FilmCard film={film}/>)
    setFilmList(list)
  }, [films])

  return (
    <div className={styles['home-page']}>
      <div className={styles['header']}>
        <div>STAR</div>
        <div>WARS</div>
      </div>

      <div className={styles['films-container']}>
        { filmList }
      </div>
    </div>
  )
}

export default HomePage