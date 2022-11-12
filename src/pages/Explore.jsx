import { useState, useEffect } from "react"
import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"

function Explore() {
  const [champions, setChampions] = useState([])

  const getChampions = async () => {
    const champions = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json"
    )
    setChampions(await champions.json())
  }

  useEffect(() => {
    getChampions()
  }, [])

  useEffect(() => {
    console.log(champions)
  }, [champions])

  return (
    <div className="explore">
      <div className="flex flex-col flex-1">
        <Navbar />
        <Search />
      </div>
    </div>
  )
}

export default Explore
