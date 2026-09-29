
const CollectionCard = ({ item }) => {
    return (
        <div className="relative w-full h-64 rounded overflow-hidden">
            {item.type === "photo" ? (
                <img src={item.src} alt="" className="w-full h-full object-cover" />
            ) : item.type === "video" ? (
                <video
                    autoPlay
                    loop
                    muted
                    src={item.src}
                    className="w-full h-full object-cover"
                />
            ) : (
                <img src={item.src} alt="" className="w-full h-full object-cover" />
            )}

            <div className="absolute bottom-0 left-0 w-full flex justify-between items-center p-3">
                <p className="text-white text-sm">{item.title}</p>
                <button onClick={() => {
                    console.log("remove");
                    
                }} className="text-white text-sm bg-red-950 p-1 rounded">
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CollectionCard