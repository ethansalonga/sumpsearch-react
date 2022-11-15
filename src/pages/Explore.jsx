import { useState, useEffect } from "react"
import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"
import { ChakraProvider } from "@chakra-ui/react"

function Explore({ champions, championQuery, setChampionQuery }) {
  const [filteredChampions, setFilteredChampions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (championQuery) {
      setFilteredChampions(
        champions.filter(
          champion =>
            champion.id.toLowerCase().includes(championQuery) ||
            champion.name.toLowerCase().includes(championQuery)
        )
      )
    } else {
      setFilteredChampions(champions)
    }
  }, [])

  return (
    <ChakraProvider>
      <div className="explore">
        <div className="flex flex-col flex-1">
          <Navbar
            champions={champions}
            championQuery={championQuery}
            setChampionQuery={setChampionQuery}
            setLoading={setLoading}
            setFilteredChampions={setFilteredChampions}
          />
          <Search
            champions={filteredChampions}
            loading={loading}
          />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default Explore
