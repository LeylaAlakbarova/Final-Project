import { Link } from "react-router-dom";

const SearchButton = ({ name }) => {
  return <Link to={`searchedProducts/${name}`}>{name}</Link>;
};

export default SearchButton;
