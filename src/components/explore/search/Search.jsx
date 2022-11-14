import { Progress } from "@chakra-ui/react"
import {
  RiSwordFill,
  RiShieldFill,
  RiScales3Fill,
  RiBookOpenFill,
  RiTeamFill,
} from "react-icons/ri"
import "./Search.css"

function Search() {
  return (
    <section id="search">
      <div
        className="search-progress-bar indeterminate theme-default"
        style={{ position: "absolute", top: "0px", left: "0px", right: "0px" }}
      >
        <div className="progress-bar-track"></div>
        <div className="progress-bar-fill"></div>
        <div className="progress-bar-buffer"></div>
      </div>
      <div
        id="filter"
        className="content-wrapper justify-between"
      >
        <h1 className="search-info">
          <span className="black-text">Search results:</span>
        </h1>
        <div className="price-filter flex flex-col">
          <h2 className="filter__title">
            <span
              className="black-text"
              style={{ marginRight: "8px" }}
            >
              Price range:
            </span>
            450 to 7800 BE
          </h2>
          <div className="slider-wrapper">
            <div
              role="slider"
              aria-valuemin="0"
              aria-valuemax="100000"
              aria-orientation="horizontal"
              className="el-slider"
              aria-valuetext="0-100000"
              aria-label="slider between 0 and 100000"
            >
              <div className="el-slider__runway">
                <div
                  className="el-slider__bar"
                  style={{ width: "100%", left: "0%" }}
                ></div>
                <div
                  tabIndex="0"
                  className="el-slider__button-wrapper"
                  style={{ left: "0%" }}
                >
                  <div
                    className="el-tooltip el-slider__button"
                    aria-describedby="el-tooltip-3771"
                    tabIndex="0"
                  ></div>
                </div>
                <div
                  tabIndex="0"
                  className="el-slider__button-wrapper"
                  style={{ left: "100%" }}
                >
                  <div
                    className="el-tooltip el-slider__button"
                    aria-describedby="el-tooltip-7000"
                    tabIndex="0"
                  ></div>
                </div>
                <div>
                  <div
                    className="el-slider__stop el-slider__marks-stop"
                    style={{ left: "0%" }}
                  ></div>
                  <div
                    className="el-slider__stop el-slider__marks-stop"
                    style={{ left: "100%" }}
                  ></div>
                </div>
                <div className="el-slider__marks">
                  <div
                    className="el-slider__marks-text"
                    style={{ left: "0%" }}
                  >
                    450 BE
                  </div>
                  <div
                    className="el-slider__marks-text"
                    style={{ left: "100%" }}
                  >
                    7800 BE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="champions">
        <div className="content-wrapper championCards">
          {/* <div className="loading-state flex justify-center">
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
          </div> */}
          <div className="championCard flex flex-col">
            <img
              src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg"
              className="championCard__image"
            />
            <div className="championCard__name">
              Akali{" "}
              <span className="championCard__title">the Rogue Assassin</span>
            </div>
            <div className="championCard__stats">
              <div className="stat">
                <p className="stats__text">
                  <RiSwordFill style={{ marginRight: "4px" }} />
                  <span className="stats__textLabel">Attack</span>
                </p>
                <Progress
                  value={50}
                  hasStripe
                  height="18px"
                  colorScheme="red"
                  style={{ flexGrow: "1", borderRadius: "6px" }}
                />
              </div>
              <div className="stat">
                <p className="stats__text">
                  <RiShieldFill style={{ marginRight: "4px" }} />
                  <span className="stats__textLabel">Defense</span>
                </p>
                <Progress
                  value={30}
                  hasStripe
                  height="18px"
                  colorScheme="green"
                  style={{ flexGrow: "1", borderRadius: "6px" }}
                />
              </div>
              <div className="stat">
                <p className="stats__text">
                  <RiBookOpenFill style={{ marginRight: "4px" }} />
                  <span className="stats__textLabel">Magic</span>
                </p>
                <Progress
                  value={80}
                  hasStripe
                  height="18px"
                  colorScheme="blue"
                  style={{ flexGrow: "1", borderRadius: "6px" }}
                />
              </div>
              <div className="stat">
                <p className="stats__text">
                  <RiScales3Fill style={{ marginRight: "4px" }} />
                  <span className="stats__textLabel">Difficulty</span>
                </p>
                <Progress
                  value={70}
                  hasStripe
                  height="18px"
                  colorScheme="purple"
                  style={{ flexGrow: "1", borderRadius: "6px" }}
                />
              </div>
            </div>
            <div className="championCard__roles">
              <RiTeamFill style={{ marginRight: "4px" }} />
              <span className="stats__textLabel">Roles: Assassin</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
