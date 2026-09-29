import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"

const CollectionPage = () => {
  const { items } = useSelector((state) => state.collection)
  return (
    <div className="grid grid-cols-5 gap-6 px-10 py-6">
      {
        items.map((item, idx) => {
          return (
              <CollectionCard key={item.id} item={item} />
          )
        })
      }
    </div>
  )
}

export default CollectionPage