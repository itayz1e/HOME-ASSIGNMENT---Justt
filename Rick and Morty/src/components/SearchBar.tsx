import "../style/SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="main_search_container">
      <div className="search_container">
        <span className="search_icon"></span>
        <input
          type="text"
          className="search_input"
          placeholder="Browse for characters..."
        />
      <div>
        <button className="search_button">Go</button>
      </div>
      </div>
    </div>
  );
};

export default SearchBar;
