import { createContext, useState } from "react";
import { swApi } from "../constants/api";

const FilmContext = createContext()

function FilmProvider ({ children }) {
  const [films, setFilms] = useState([])

  async function getFilms () {
    const response = await fetch(swApi.films)
    const data = await response.json()
    setFilms(data.results)
  }

  const providerValue = { films, getFilms }

  return (
    <FilmContext.Provider value={providerValue}>
      { children }
    </FilmContext.Provider>
  )
}

export { FilmProvider }
export default FilmContext;