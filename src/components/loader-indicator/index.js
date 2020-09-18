import React from "react";
import NoRecordsText from 'components/no-records-text';

const Loader = ({ selectedData }) => {
  return (
    <React.Fragment>
      {selectedData ? (
        <tr className="loader-tr">
          <td></td>
          <td></td>
          <td>
            <div className="loader" />
          </td>
        </tr>
      ) : (
        <NoRecordsText text='please select the amount data'/>
      )}
    </React.Fragment>
  );
};

export default Loader;
