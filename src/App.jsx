import { fetchGif, fetchPhoto, fetchVideo } from "./api/mediaApi"

const App = () => {
  return (
    <div>
      <button onClick={async () => {
        const data = await fetchPhoto('cat')
        console.log(data);
      }

      }>Get Photo</button>


      <button onClick={async () => {
        const data = await fetchVideo('fish')
        console.log(data.data.videos);
      }
      }>Get Video</button>

      <button onClick={async () => {
        const data = await fetchGif('dog')
        console.log(data);
      }
      }>Get GIF</button>
      
    </div>
  )
}

export default App