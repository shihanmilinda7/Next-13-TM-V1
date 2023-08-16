"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import ConfirmAlertbox from "./confirm_alertbox";
import Toast from "./toast";
import CategoryInputField from "./category_input_field";

const AddNewCategoryPopup = ({ buttonName, selRowData, delButton }) => {
  const [addnewIsOpen, setAddnewIsOpen] = useState(false);


  const [categoryid, setCategoryid] = useState(selRowData?.categoryid ?? "");
  const [categoryname, setCategoryname] = useState(selRowData?.categoryname ?? "");
  const [categoryValues, setCategoryValues] = useState([]);

  const [showAddnewAlert, setShowAddnewAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showDelButton, setShowDelButton] = useState("");

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  //handle addnew & update
  const actionHandler = () => {
    console.log("categoryValues", categoryValues,)
    addCategoryAction();
  }

  //add category action
  const addCategoryAction = async (e) => {
    const responseNewCat = await fetch(
      "api/category_routers/addnew_category_details",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryname, categoryValues }),
      }
    );

    const res = await responseNewCat.json();
    console.log(res);

    if (res.message == "SUCCESS") {
      setAddnewIsOpen(false);
      // window.location.href = "/staff"
      // setShowAddnewAlert(true);
      // setTimeout(() => {
      //   setShowAddnewAlert(false);
      // }, 2000);
    } else {
      // router.push("/");
    }
    return res;

  };

  //add new input field for category value
  const addInputField = () => {
    const tmpCatValue = [...categoryValues];
    tmpCatValue.push({ categorydetailname: "" });
    setCategoryValues(tmpCatValue);
  }

  //update catgory value array
  const handleCatValueChange = (e, index) => {
    const values = [...categoryValues];
    values[index].categorydetailname = e.target.value;
    setCategoryValues(values);
  };

  return (
    <div>
      <button
        onClick={() => setAddnewIsOpen(true)}
        className="flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-2  rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
      >
        {buttonName}
      </button>
      <Modal
        isOpen={addnewIsOpen}
        onRequestClose={() => setAddnewIsOpen(false)}
        style={customStyles}
      >
        <InputField
          id="categoryid"
          name="categoryid"
          type="hidden"
          autocomplete=""
          value={categoryid}
          onChange={(e) => setCategoryid(e.target.value)}
        />
        <div className="pl-12 pb-1">
          <h1 className="text-2xl uppercase text-indigo-800">Add New Cateory</h1>
        </div>
        <div className="flex items-center justify-center pl-10 pr-10 pb-12">
          <div className="mx-auto w-full max-w-[550px]">
            <div className="-mx-3 flex flex-wrap flex-col">
              <div className="w-full px-3">
                <InputField
                  label="Category Name"
                  id="categoryname"
                  name="categoryname"
                  type="text"
                  autocomplete=""
                  placeholder="Category Name"
                  value={categoryname}
                  onChange={(e) => setCategoryname(e.target.value)}
                />
              </div>
              <div className="">
                <button onClick={addInputField}
                  className="rounded-lg bg-white text-slate-700 py-3 px-8 text-center text-base font-semibold outline-none"
                >
                  Photo Type +
                </button>
              </div>
              <div className="w-full px-3">
                {categoryValues.map((categoryValue, index) => (
                  <CategoryInputField
                    id="phototype"
                    name="phototype"
                    type="text"
                    value={categoryValue.categorydetailname}
                    onChange={handleCatValueChange}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="mr-3 w-1/2">
                <button onClick={actionHandler}
                  className="rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Submit
                </button>
              </div>
              <div className="w-1/2">
                <button onClick={() => setAddnewIsOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Cancel
                </button>
              </div>
              <div className={showDelButton === "true" ? "flex ml-auto" : "flex ml-auto hidden"}>
                <ConfirmAlertbox buttonName="Delete" title="Are you sure?" description="Do you want to delete this record ?" />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* {showAddnewAlert && (< Toast description="Successfully created New Staff Member.." style="bg-green-500 hover:bg-green-600" setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (< Toast description="Successfully updated.." style="bg-indigo-500 hover:bg-indigo-600" setShowAlert={setShowUpdateAlert} />)}
      {showDeleteAlert && (< Toast description="Password does not match.." style="bg-red-500 hover:bg-red-600" setShowAlert={setShowDeleteAlert} />)} */}
    </div>
  );
};
export default AddNewCategoryPopup;
