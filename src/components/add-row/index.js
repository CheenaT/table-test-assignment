import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const AddRowButton = ({ setNewRow }) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [isShowAddInTable, setIsShowAddInTable] = useState(false);
  const [isShow, toggleShow] = useState(false);
  const showForm = () => {
    const dropDownMenu = document.querySelector(".add-row__dropdown");
    if (isShow) {
      dropDownMenu.style.display = "none";
      toggleShow(!isShow);
      reset();
    } else {
      dropDownMenu.style.display = "flex";
      toggleShow(!isShow);
    }
  };
  const addNewRow = data => {
    console.log('data', data)
    if (setIsShowAddInTable) {
      setNewRow(data);
      document.querySelector(".add-row__dropdown").style.display = "none";
      toggleShow(false);
      reset();
      setIsShowAddInTable(false);
    }
  }
  useEffect(() => {
    const fieldsData = watch();
    const isAnyFieldIsEmpty = Object.keys(fieldsData).some((prop) => fieldsData[prop] === '');
    console.log('isAnyFieldIsEmpty', isAnyFieldIsEmpty, isShowAddInTable);
    if (!isAnyFieldIsEmpty) {
      setIsShowAddInTable(true);
    } else {
      setIsShowAddInTable(false);
    }
    console.log('fieldsData', fieldsData);
  });
  return (
    <div>
      <div className="add-row-button__wrapper">
        <button className="add-row-button" onClick={showForm}>
          {isShow ? "Cancel" : "Add row"}
        </button>
      </div>
      <form className="add-row__dropdown" onSubmit={handleSubmit(addNewRow)}>
        {[...Array("id", "firstName", "lastName", "email", "phone")].map(
          (el, key) => (
            <div key={key}>
              <label htmlFor={el}>{el}</label>
              <input name={el} type={el === 'id' ? 'number' : 'text'} placeholder={el} required ref={register}/>
            </div>
          )
        )}
        {isShowAddInTable && <input className='add-row__dropdown__submit' type="submit" />}
      </form>
    </div>
  );
};

export default AddRowButton;
