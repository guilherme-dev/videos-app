import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

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
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
          {/* <button type="submit" className="btn btn-primary mb-2">
            Search Videos
    </button> */}
        </form>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
