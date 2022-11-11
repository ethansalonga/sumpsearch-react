import Navbar from "../components/explore/navbar/Navbar"
import Search from "../components/explore/search/Search"

function Explore() {
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
