import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchBar =(props) => {
    const [searchTerm, setSearchTerm] = useState("");
      return (
    <form className="searchBar" noValidate autoComplete="off">
      <IconButton className="iconButton">
        <SearchIcon />
      </IconButton>
      <TextField value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className="searchInput" label="Search...." />
    </form>
  );
}
export default SearchBar;
