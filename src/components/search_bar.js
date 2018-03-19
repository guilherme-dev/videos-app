import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputSearch" className="sr-only">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="inputSearch"
              placeholder="Search"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Search Videos
          </button>
        </form>
      </div>
    );
  }

  onInputChange(event) {}
}

export default SearchBar;
