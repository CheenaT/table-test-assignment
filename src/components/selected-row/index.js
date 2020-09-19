import React, { useEffect } from "react";

const SelectedRow = ({ selectedRow, setSelectedRow }) => {
  useEffect(() => {
    if (!selectedRow.address) {
      setSelectedRow({...selectedRow, address: {
        streetAddress: 'no info',
        city: 'no info',
        state: 'no info',
        zip: 'no info',
      }, description: 'no info'});
    }
  });
  return (
    <div className="selected-row">
      <span>Выбран пользователь </span>
      <b>{selectedRow.firstName}</b>
      <label htmlFor="description">Описание:</label>
      <textarea id="description" value={selectedRow.description} readOnly />
      {[
        ...Array(
          { description: "Адрес проживания: ", prop: "streetAddress" },
          { description: "Город: ", prop: "city" },
          { description: "Провинция/штат: ", prop: "state" },
          { description: "Индекс: ", prop: "zip" }
        ),
      ].map((el, key) => (
        <div key={key} className="selected_row__prop">
          <span>{el.description}</span>
          <b>{selectedRow.address && selectedRow.address[el.prop]}</b>
        </div>
      ))}
    </div>
  );
};

export default SelectedRow;
