import "./styles.css";
import SearchIcon from "../../assets/icons/search.svg";
import { FC, useState } from "react";
import { useSearchParams } from "react-router";

type Props = {
  onSearch: (term: string) => void;
};

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [searchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("search") || "");

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(term);
      }}
    >
      <img src={SearchIcon} className="search__icon" />
      <input
        type="text"
        value={term}
        placeholder="Search for product..."
        className="search__input"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

