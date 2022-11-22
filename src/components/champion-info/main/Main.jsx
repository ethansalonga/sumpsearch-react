import { useEffect } from "react"
import { Progress } from "@chakra-ui/react"
import {
  RiSwordFill,
  RiShieldFill,
  RiScales3Fill,
  RiBookOpenFill,
} from "react-icons/ri"
import "./Main.css"

function Main({ champion }) {
  const progressBarMultiplier = 10

  const abilityKey = index => {
    switch (index) {
      case 0:
        return "(Q)"
      case 1:
        return "(W)"
      case 2:
        return "(E)"
      case 3:
        return "(R)"
    }
  }

  useEffect(() => {
    console.log(champion)
  }, [champion])

  return (
    <div className="main">
      {champion && (
        <>
          <div className="contentContainer">
            <div className="championImage__container">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                className="championImage"
              />
            </div>
            <div className="championInfo__container">
              <div className="championInfo__primaryInfo">
                <div className="championName">
                  {champion.name}{" "}
                  <span className="championTitle">{champion.title}</span>
                </div>
                <div className="championRoles">{champion.tags.join(", ")}</div>
              </div>
              <div className="championInfo__lore">
                <div className="sectionTitle">Lore</div>
                {champion.lore}
              </div>
              <div className="championInfo__stats">
                <div className="championInfo__stat">
                  <p className="championInfo__statsText">
                    <RiSwordFill style={{ marginRight: "4px" }} />
                    <span className="stats__textLabel">Attack</span>
                  </p>
                  <Progress
                    value={champion.info.attack * progressBarMultiplier}
                    hasStripe
                    height="18px"
                    colorScheme="red"
                    style={{ flexGrow: "1", borderRadius: "6px" }}
                    isAnimated
                  />
                </div>
                <div className="championInfo__stat">
                  <p className="championInfo__statsText">
                    <RiShieldFill style={{ marginRight: "4px" }} />
                    <span className="stats__textLabel">Defense</span>
                  </p>
                  <Progress
                    value={champion.info.defense * progressBarMultiplier}
                    hasStripe
                    height="18px"
                    colorScheme="green"
                    style={{ flexGrow: "1", borderRadius: "6px" }}
                    isAnimated
                  />
                </div>
                <div className="championInfo__stat">
                  <p className="championInfo__statsText">
                    <RiBookOpenFill style={{ marginRight: "4px" }} />
                    <span className="stats__textLabel">Magic</span>
                  </p>
                  <Progress
                    value={champion.info.magic * progressBarMultiplier}
                    hasStripe
                    height="18px"
                    colorScheme="blue"
                    style={{ flexGrow: "1", borderRadius: "6px" }}
                    isAnimated
                  />
                </div>
                <div className="championInfo__stat">
                  <p className="championInfo__statsText">
                    <RiScales3Fill style={{ marginRight: "4px" }} />
                    <span className="stats__textLabel">Difficulty</span>
                  </p>
                  <Progress
                    value={champion.info.difficulty * progressBarMultiplier}
                    hasStripe
                    height="18px"
                    colorScheme="purple"
                    style={{ flexGrow: "1", borderRadius: "6px" }}
                    isAnimated
                  />
                </div>
              </div>
              <div className="championInfo__allyTips">
                <div className="sectionTitle">{champion.name} Tips</div>
                {champion.allytips.map((tip, index) => (
                  <div className="championInfo__tip">
                    {index + 1}. {tip}
                  </div>
                ))}
              </div>
              <div className="championInfo__enemyTips">
                <div className="sectionTitle">Enemy Tips</div>
                {champion.enemytips.map((tip, index) => (
                  <div className="championInfo__tip">
                    {index + 1}. {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="contentContainer__abilities">
            <div className="sectionTitle">Abilities</div>
            <div className="championInfo__abilityPassive">
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/passive/${champion.passive.image.full}`}
                className="championInfo__abilityImg"
              />
              <div className="championInfo__abilityInfo">
                <p className="championInfo__abilityName">
                  {champion.passive.name} (Passive)
                </p>
                <p className="championInfo__abilityText">
                  {champion.passive.description.replace("<br>", " ")}
                </p>
              </div>
            </div>
            <div className="championInfo__abilities">
              {champion.spells.map((ability, index) => (
                <div className="championInfo__ability">
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${ability.id}.png`}
                    className="championInfo__abilityImg"
                  />
                  <div className="championInfo__abilityInfo">
                    <p className="championInfo__abilityName">
                      {ability.name} {abilityKey(index)}
                    </p>
                    <p className="championInfo__abilityText">
                      {ability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Main
