import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ChampionInfo({ latestVersion }) {
  const params = useParams()
  const { champ_id } = params

  const [champion, setChampion] = useState()

  useEffect(() => {
    if (latestVersion) {
      getChampionInfo()
    }
  }, [latestVersion])

  const getChampionInfo = async () => {
    const champions = await fetch(
      `http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${champ_id}.json`
    )
    const { data } = await champions.json()
    setChampion(Object.values(data)[0])
  }

  return (
    <div className="championInfo">
      <div className="flex flex-col flex-1">
        {champion.id}
      </div>
    </div>
  )
}

export default ChampionInfo
