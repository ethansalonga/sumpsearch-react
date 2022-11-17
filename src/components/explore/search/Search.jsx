import { useState, useEffect } from "react"
import ChampionCard from "./ChampionCard"
import Pagination from "../../common/Pagination"
import "./Search.css"

function Search({
  champions,
  filteredChampions,
  setFilteredChampions,
  loading,
  setLoading,
  currentPage,
  setCurrentPage,
  setChampionQuery,
}) {
  const [checkedAssassin, setCheckedAssassin] = useState(false)
  const [checkedFighter, setCheckedFighter] = useState(false)
  const [checkedMage, setCheckedMage] = useState(false)
  const [checkedMarksman, setCheckedMarksman] = useState(false)
  const [checkedSupport, setCheckedSupport] = useState(false)
  const [checkedTank, setCheckedTank] = useState(false)
  const [clearFiltersEnabled, setClearFiltersEnabled] = useState(false)

  useEffect(() => {
    setCurrentPage(1)

    if (
      checkedAssassin ||
      checkedFighter ||
      checkedMage ||
      checkedMarksman ||
      checkedSupport ||
      checkedTank
    ) {
      setClearFiltersEnabled(true)
    } else {
      setClearFiltersEnabled(false)
    }

    if (checkedAssassin) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Assassin"))
      )
    }
    if (checkedFighter) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Fighter"))
      )
    }
    if (checkedMage) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Mage"))
      )
    }
    if (checkedMarksman) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Marksman"))
      )
    }
    if (checkedSupport) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Support"))
      )
    }
    if (checkedTank) {
      setFilteredChampions(prevState =>
        prevState.filter(champion => champion.tags.includes("Tank"))
      )
    }

    if (
      !checkedAssassin &&
      !checkedFighter &&
      !checkedMage &&
      !checkedMarksman &&
      !checkedSupport &&
      !checkedTank
    ) {
      setFilteredChampions(champions)
    }
  }, [
    checkedAssassin,
    checkedFighter,
    checkedMage,
    checkedMarksman,
    checkedSupport,
    checkedTank,
  ])

  useEffect(() => {
    console.log(checkedAssassin)
  }, [checkedAssassin])

  // PAGINATION //
  const [champsPerPage] = useState(9)

  const indexOfLastChamp = currentPage * champsPerPage
  const indexOfFirstChamp = indexOfLastChamp - champsPerPage
  const currentChamps = filteredChampions.slice(
    indexOfFirstChamp,
    indexOfLastChamp
  )

  const paginate = pageNumber => setCurrentPage(pageNumber)
  // END PAGINATION //

  const handleViewAll = () => {
    setChampionQuery("")
    setLoading(true)
    setFilteredChampions(champions)
    setTimeout(() => {
      setLoading(false)
    }, [500])
  }

  return (
    <section id="search">
      <div
        className="search-progress-bar indeterminate theme-default"
        style={{ position: "absolute", top: "0px", left: "0px", right: "0px" }}
      >
        <div className={`${loading && "progress-bar-track"}`}></div>
        <div className={`${loading && "progress-bar-fill"}`}></div>
        <div className="progress-bar-buffer"></div>
      </div>
      {loading ? (
        <div className="loading-state flex justify-center">
          <svg
            data-v-cf78a876=""
            data-v-ca62299c=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="spinner"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="loading-state__icon"
            style={{ fontSize: "30px", color: "#00adb5" }}
          >
            <path
              data-v-cf78a876=""
              fill="currentColor"
              d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
              className=""
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div
            id="filter"
            className="content-wrapper justify-between"
          >
            <h1 className="search-info">
              <span className="black-text searchInfo__title">
                Search results:
              </span>
              <span className="black-text searchInfo__subtitle">
                Note: Empty data may be unavailable from the Data Dragon API
              </span>
              <button
                className={`${
                  champions.length !== filteredChampions.length
                    ? "searchInfo__button"
                    : "searchInfo__button--disabled"
                }`}
                onClick={() => {
                  if (champions.length !== filteredChampions.length) {
                    handleViewAll()
                    setCurrentPage(1)
                  }
                }}
              >
                View all champions
              </button>
            </h1>
            <div
              className={`${
                champions.length !== filteredChampions.length && "hidden"
              } role-filter flex flex-col justify-center`}
            >
              <h2 className="filter__title">
                <span
                  className="black-text"
                  style={{ marginRight: "8px" }}
                >
                  Filter by role:
                </span>
              </h2>
              <button
                className={`${
                  clearFiltersEnabled ? "filterClear" : "filterClear--disabled"
                }`}
                onClick={() => {
                  if (clearFiltersEnabled) {
                    setCheckedAssassin(false)
                    setCheckedFighter(false)
                    setCheckedMage(false)
                    setCheckedMarksman(false)
                    setCheckedSupport(false)
                    setCheckedTank(false)
                  }
                }}
              >
                Clear Filters
              </button>
              <h3 className="filtersContainer flex flex-wrap">
                <label
                  className={`${
                    checkedAssassin && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedAssassin}
                    value={checkedAssassin}
                    onChange={() => setCheckedAssassin(prevState => !prevState)}
                    disabled={checkedAssassin}
                  />
                  <span className="checkmark"></span>
                  Assassin
                </label>
                <label
                  className={`${
                    checkedFighter && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedFighter}
                    value={checkedFighter}
                    onChange={() => setCheckedFighter(prevState => !prevState)}
                    disabled={checkedFighter}
                  />
                  <span className="checkmark"></span>
                  Fighter
                </label>
                <label
                  className={`${
                    checkedMage && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedMage}
                    value={checkedMage}
                    onChange={() => setCheckedMage(prevState => !prevState)}
                    disabled={checkedMage}
                  />
                  <span className="checkmark"></span>
                  Mage
                </label>
                <label
                  className={`${
                    checkedMarksman && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedMarksman}
                    value={checkedMarksman}
                    onChange={() => setCheckedMarksman(prevState => !prevState)}
                    disabled={checkedMarksman}
                  />
                  <span className="checkmark"></span>
                  Marksman
                </label>
                <label
                  className={`${
                    checkedSupport && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedSupport}
                    value={checkedSupport}
                    onChange={() => setCheckedSupport(prevState => !prevState)}
                    disabled={checkedSupport}
                  />
                  <span className="checkmark"></span>
                  Support
                </label>
                <label
                  className={`${
                    checkedTank && "filterSelection--disabled"
                  } filterSelection`}
                >
                  <input
                    type="checkbox"
                    checked={checkedTank}
                    value={checkedTank}
                    onChange={() => setCheckedTank(prevState => !prevState)}
                    disabled={checkedTank}
                  />
                  <span className="checkmark"></span>
                  Tank
                </label>
              </h3>
            </div>
          </div>
          <div id="champions">
            <div className="content-wrapper championCards">
              {currentChamps.map(champion => (
                <ChampionCard
                  key={champion.id}
                  image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  name={champion.name}
                  title={champion.title}
                  attack={champion.info.attack}
                  defense={champion.info.defense}
                  magic={champion.info.magic}
                  difficulty={champion.info.difficulty}
                  roles={champion.tags}
                />
              ))}
              <Pagination
                champsPerPage={champsPerPage}
                totalChamps={filteredChampions.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Search
