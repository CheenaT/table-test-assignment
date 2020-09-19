import React, { useState } from "react";
import Table from "components/table";
import AddRowButton from "components/add-row";
import SelectData from "components/select-data";
import SelectedRow from "components/selected-row";

function App() {
  const [selectedData, setSelectedData] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [newRow, setNewRow] = useState(null);
  return (
    <div className="App">
      <SelectData setSelectedData={setSelectedData} />
      <AddRowButton setNewRow={setNewRow} />
      <Table
        selectedData={selectedData}
        setSelectedRow={setSelectedRow}
        newRow={newRow}
      />
      {selectedRow && (
        <SelectedRow
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </div>
  );
}

export default App;
