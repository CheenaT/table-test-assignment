import React from "react";

const Head = ({ searchRowByValue, searchValue, clearSearchField }) => {
  return (
    <div className="table__header">
      <div className="table__header__title">Data table</div>
      <div className="table__header__search-field__input-wrap">
        <img className="icon" src={require("assets/search-24px.svg")} alt="" />
        <input
          className="table__header__search-field__input"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => searchRowByValue(e.target.value)}
        />
        <img
          className="icon"
          src={require("assets/clear-24px.svg")}
          onClick={clearSearchField}
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
