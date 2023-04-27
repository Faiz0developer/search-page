import React from "react";

const Header = ({onSetInput, setSearchInput}) => {
    const searchHandler = (e) => {
             onSetInput(e.target.value);
    }
    
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            id="myInput"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={searchHandler}
          />
          <button className="button" >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
