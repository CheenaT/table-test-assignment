import React from 'react';

const SelectData = ({ setSelectedData }) => {
  const dataSelected = (e) => {
    setSelectedData(e.target.value);
  }
  return (
    <div className='select-data'>
      <label htmlFor="select-data">Select the amount of data:</label>
      <select name="data" onChange={dataSelected} className='select-data__select'>
          <option value="">choose data</option>
          <option value="small">32 rows</option>
          <option value="big">1000 rows</option>
      </select>
    </div>
  )
}

export default SelectData;
