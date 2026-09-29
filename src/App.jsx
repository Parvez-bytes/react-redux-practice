import { Route, Routes } from "react-router-dom"
import { fetchGif, fetchPhoto, fetchVideo } from "./api/mediaApi"
import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import {ToastContainer} from 'react-toastify'
import { Link } from "react-router-dom";


const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950 flex flex-col gap-2">
       <div className="py-6 px-10 bg-pink-900 text-2xl">
        <h2 className="font-medium text-2xl">Media Search</h2>

        <div className="flex gap-4 items-center">
          <Link to="/">Search</Link>
          <Link to="/collection">Collection</Link>
        </div>

      </div>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/collection" element={<CollectionPage />}/>
      </Routes>
      <ToastContainer />
     
    </div>
  )
}

export default App