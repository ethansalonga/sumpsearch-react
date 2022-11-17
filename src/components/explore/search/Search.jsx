import { useState } from "react"
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
}) {
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
      <div
        id="filter"
        className="content-wrapper justify-between"
      >
        <h1 className="search-info">
          <span className="black-text searchInfo__title">Search results:</span>
          <span className="black-text searchInfo__subtitle">
            Note: Empty data may be unavailable from the Data Dragon API
          </span>
          <button
            className="searchInfo__button"
            onClick={() => {
              handleViewAll()
              setCurrentPage(1)
            }}
          >
            View all champions
          </button>
        </h1>
        <div className="role-filter flex flex-col justify-center">
          <h2 className="filter__title">
            <span
              className="black-text"
              style={{ marginRight: "8px" }}
            >
              Filter by role:
            </span>
          </h2>
          <h3 className="filtersContainer flex flex-wrap">
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Assassin
            </label>
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Fighter
            </label>
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Mage
            </label>
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Marksman
            </label>
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Support
            </label>
            <label className="filterSelection">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Tank
            </label>
          </h3>
        </div>
      </div>
      <div id="champions">
        <div className="content-wrapper championCards">
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
            currentChamps.map(champion => (
              <ChampionCard
                image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                name={champion.name}
                title={champion.title}
                attack={champion.info.attack}
                defense={champion.info.defense}
                magic={champion.info.magic}
                difficulty={champion.info.difficulty}
                roles={champion.tags}
              />
            ))
          )}
          <Pagination
            champsPerPage={champsPerPage}
            totalChamps={filteredChampions.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </section>
  )
}

export default Search
