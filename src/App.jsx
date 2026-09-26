import { fetchGif, fetchPhoto, fetchVideo } from "./api/mediaApi"
import SearchBar from "./components/SearchBar"

const App = () => {
  return (
    <div className="h-screen text-white w-full bg-gray-950 flex gap-2">
      <SearchBar />
    </div>
  )
}

export default App