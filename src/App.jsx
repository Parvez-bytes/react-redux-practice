import { fetchPhoto, fetchVideo } from "./api/mediaApi"

const App = () => {
  return (
    <div>
      <button onClick={async () => {
        const data = await fetchPhoto('cat')
        console.log(data);
      }

      }>Get Photo</button>


      <button onClick={async () => {
        const data = await fetchVideo('cat')
        console.log(data.data.videos);
      }
      }>Get Video</button>
    </div>
  )
}

export default App