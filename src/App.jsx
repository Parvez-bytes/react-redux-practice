import { fetchGif, fetchPhoto, fetchVideo } from "./api/mediaApi"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"

const App = () => {
  return (
    <div className="h-screen text-white w-full bg-gray-950 flex flex-col gap-2">
      <SearchBar />
      <Tabs />
    </div>
  )
}

export default App