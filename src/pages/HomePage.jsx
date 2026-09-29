import { useSelector } from "react-redux";
import ResultGrid from "../components/ResultGrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store) => store.search)

  return (
    <div>
      <div className="py-6 px-10 bg-pink-900 text-2xl">
        <h2 className="font-medium text-2xl">Media Search</h2>

        <div className="flex gap-4 items-center">
          <Link to="/">Search</Link>
          <Link to="/collection">Collection</Link>
        </div>

      </div>
      <SearchBar />

      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
