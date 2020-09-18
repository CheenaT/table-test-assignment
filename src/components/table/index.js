import React, { useState, useEffect } from "react";
import Head from 'components/table-header';
import Footer from 'components/table-footer';
import Loader from 'components/loader-indicator';
import NoRecordsText from 'components/no-records-text';
import { url, urlBiggerData } from 'constants.js';

const Table = ({ selectedData, columns, newRow }) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [currentColumn, setCurrentColumn] = useState('');
  const [asc, toggleAsc] = useState(true);
  const [currentSortIcon, setCurrentSortIcon] = useState(null);

  useEffect(() => {
    if (selectedData !== null) {
      setSavedData([]);
      setData([]);
      const dataUrl = selectedData === 'small' ? url : urlBiggerData;
      fetch(dataUrl)
        .then(response => response.json())
        .then(tableData => {
          setData(tableData);
          setSavedData(tableData);
        });
    }
  }, [selectedData]);
  useEffect(() => {
  }, [data])
  useEffect(() => {
    if (newRow) {
      setSavedData([newRow, ...savedData]);
      setData([newRow, ...data]);
    }
  }, [newRow])
  const sortByColumn = (e, order) => { // add toLowerCase
    const column = e.currentTarget.textContent;
    const sortIcon = e.currentTarget.lastElementChild;
    if (column !== currentColumn) {
      order = true;
      toggleAsc(true);
      setCurrentColumn(column);
      if (currentSortIcon !== null) {
        currentSortIcon.classList.remove('icon-direction-asc');
      }
      setCurrentSortIcon(sortIcon);
    } else if (column === currentColumn) {
      order = asc;
    }
    if (order) {
      sortIcon.classList.add('icon-direction-asc');
    } else {
      sortIcon.classList.remove('icon-direction-asc');
    }
    setData([...data].sort(function(a, b){
        if(a[column] < b[column]) { return order ? -1 :  1; }
        if(a[column] > b[column]) { return order ?  1 : -1; }
      return 0;
    }));
    toggleAsc(!asc);
  }
  const searchRowByValue = (value) => {
    setSearchValue(value);
    if (value === "") {
      setData(savedData);
    } else {
      console.log(savedData);
      setData(
        [...savedData].filter((o) =>
          ["id", "firstName", "lastName", "email", "phone"].some((prop) =>
            o[prop].toString().toLowerCase().includes(value.toLowerCase())))
      );
    }
  }
  const clearSearchField = () => {
    setData(savedData);
    setSearchValue('');
  }
  return (
    <div className="table">
      <Head searchRowByValue={searchRowByValue} searchValue={searchValue} clearSearchField={clearSearchField}/>
      <table className="table__body">
        <thead>
          <tr>
            {columns.map((column, key) => (
              <th key={key}>
                <span
                  className="table__body__thead-column"
                  onClick={(e) => sortByColumn(e)}
                >
                  <div>{column}</div>
                  <img
                    className="table__body__sort-icon"
                    src={require("assets/arrow_downward-24px.svg")}
                    alt=""
                  />
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!savedData.length ? (
            <Loader selectedData={selectedData}/>
          ) : data.length ? (
            data
              .slice(50 * (currentPage - 1), 50 * currentPage)
              .map((row, key) => (
                <tr key={key}>
                  <td>{row["id"]}</td>
                  <td>{row["firstName"]}</td>
                  <td>{row["lastName"]}</td>
                  <td>{row["email"]}</td>
                  <td>{row["phone"]}</td>
                </tr>
              ))
          ) : <NoRecordsText/>}
          {data.length < 9 && [...Array((data.length ? 9 : 3) - data.length)].map((el, key) => <tr key={key}/>)}
        </tbody>
      </table>
      <Footer
        dataLength={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Table;
