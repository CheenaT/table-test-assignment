import React, { useState } from 'react';
import Table from 'components/table';
import AddRowButton from 'components/add-row';
import SelectData from 'components/select-data';
import { columns } from './constants'

function App() {
  const [selectedData, setSelectedData] = useState(null);
  const [newRow, setNewRow] = useState(null);
  return (
    <div className='App'>
      <SelectData setSelectedData={setSelectedData}/>
      <AddRowButton setNewRow={setNewRow}/>
      <Table selectedData={selectedData} columns={columns} newRow={newRow}/>
    </div>
  );
}

export default App;
