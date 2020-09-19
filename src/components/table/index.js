import React, { useState, useEffect } from "react";
import Head from 'components/table-header';
import Footer from 'components/table-footer';
import Loader from 'components/loader-indicator';
import ColumnNames from 'components/column-names';
import NoRecordsText from 'components/no-records-text';
import { url, urlBiggerData, columns } from 'constants.js';

const Table = ({ selectedData, setSelectedRow, newRow }) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [currentColumn, setCurrentColumn] = useState('');
  const [asc, toggleAsc] = useState(true);
  const [currentSortIcon, setCurrentSortIcon] = useState(null);
  const [selectedRowCssRuleIndex, setCssRuleIndex] = useState(null);

  useEffect(() => {
    if (selectedData !== null) {
      setCurrentPage(1);
      setSavedData([]);
      setData([]);
      const dataUrl = selectedData === 'small' ? url : urlBiggerData;
      fetch(dataUrl)
        .then(response => response.json())
        .then(tableData => {
          setData(tableData);
          setSavedData(tableData);
          // if we want to add new rows to fetched data
          // setData([...savedData.filter((el) => el.id && !el.address), ...tableData]);
          // setSavedData([...savedData.filter((el) => el.id && !el.address), ...tableData]);
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
  const selectRow = (e, row) => {
    const sheet = window.document.styleSheets[0];
    console.log(sheet.cssRules.length, 'length')
    if (selectedRowCssRuleIndex) {
      sheet.deleteRule(selectedRowCssRuleIndex);
    }
    setCssRuleIndex(sheet.insertRule(`.ln${row.lastName + row.id} { background: grey; }`, sheet.cssRules.length));
    setSelectedRow(row);
  }
  return (
    <div className="table">
      <Head searchRowByValue={searchRowByValue} searchValue={searchValue} clearSearchField={clearSearchField}/>
      <table className="table__body">
        <ColumnNames columns={columns} sortByColumn={sortByColumn} />
        <tbody>
          {!savedData.length ? (
            <Loader selectedData={selectedData}/>
          ) : data.length ? (
            data
              .slice(50 * (currentPage - 1), 50 * currentPage)
              .map((row, key) => (
                <tr key={key} onClick={(e) => selectRow(e, row)} className={`table__body__row ln${row.lastName + row.id}`}>
                  <td><div>{row["id"]}</div></td>
                  <td><div>{row["firstName"]}</div></td>
                  <td><div>{row["lastName"]}</div></td>
                  <td><div>{row["email"]}</div></td>
                  <td><div>{row["phone"]}</div></td>
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
