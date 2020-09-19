import React from 'react';

const ColumnNames = ({ columns, sortByColumn }) => {
  return(
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
  )
}

export default ColumnNames;
