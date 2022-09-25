import { useEffect, useState } from 'react'
import FilmCard from '../../components/FilmCard'
import styles from './HomePage.module.scss'

function HomePage () {

  return (
    <div className={styles['home-page']}>
      <div className={styles['header']}>
        <div>STAR</div>
        <div>WARS</div>
      </div>

      <div className={styles['films-container']}>
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </div>
  )
}

export default HomePage