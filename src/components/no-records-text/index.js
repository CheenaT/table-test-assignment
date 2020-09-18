import React from "react";

const NoRecordsText = ({ text }) => {
  return (
    <React.Fragment>
      <tr>
        <td></td>
        <td></td>
        <td>{text ? text : 'no records to display'}</td>
        <td></td>
        <td></td>
      </tr>
      {[...Array(5)].map((el, key) => (
        <tr key={key} />
      ))}
    </React.Fragment>
  );
};

export default NoRecordsText;
