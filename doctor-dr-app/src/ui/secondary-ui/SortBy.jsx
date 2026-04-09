import { useSearchParams } from "react-router-dom";
import Selector from "./Selector";

function SortBy({ sortByFilted,oprions }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(sortByFilted) || "";

  const handleChange = (e) => {
    searchParams.set(sortByFilted, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Selector
      options={oprions}
      value={sortBy}
      type="white"
      onChange={handleChange}
    />
  );
}
export default SortBy;
