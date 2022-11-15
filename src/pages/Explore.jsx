import { useState, useEffect } from "react"
import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"
import { ChakraProvider } from "@chakra-ui/react"

function Explore() {
  const [champions, setChampions] = useState([])

  const getChampions = async () => {
    const champions = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json"
    )
    const { data } = await champions.json()
    setChampions(Object.values(data))
  }

  useEffect(() => {
    getChampions()
  }, [])

  useEffect(() => {
    console.log(champions)
  }, [champions])

  return (
    <ChakraProvider>
      <div className="explore">
        <div className="flex flex-col flex-1">
          <Navbar />
          <Search champions={champions} />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default Explore
