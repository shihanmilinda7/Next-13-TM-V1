"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import InputField from "./input_field";
import { useRouter } from "next/navigation";
import SaveAlert from "./save_alert";
import ConfirmAlertbox from "./confirm_alertbox";
import Toast from "./toast";
import SelectBoxInputField from "./selectbox_input_field";


const AddNewTaskPopup = ({ buttonName, selRowData, delButton }) => {
    const [addnewIsOpen, setAddnewIsOpen] = useState(false);

    const [taskid, setTaskid] = useState(selRowData?.taskid ?? "");
    const [staffid, setStaffid] = useState(selRowData?.staffid ?? "");
    const [clientname, setClientname] = useState(selRowData?.clientname ?? "");
    const [categoryid, setCategoryid] = useState(selRowData?.categoryid ?? "");
    const [location, setLocation] = useState(selRowData?.location ?? "");
    const [visitcount, setVisitcount] = useState(selRowData?.visitcount ?? "");

    const [fetchedStaffData, setFetchedStaffData] = useState("")
    const [fetchedCategoryData, setFetchedCategoryData] = useState("")

    //   const [showAddnewAlert, setShowAddnewAlert] = useState(false);
    //   const [showUpdateAlert, setShowUpdateAlert] = useState(false);
    //   const [showPasswordWarn, setShowPasswordWarnAlert] = useState(false);
    //   const [showDelButton, setShowDelButton] = useState(delButton);

    // const [saveChangeWarning, setSaveChangeWarning] = useState(false);

    const router = useRouter()
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
            width: "45%",
            transform: "translate(-50%, -50%)",
        },
    };

    const test = () => {
        console.log("name", staffid,)
        console.log("categoryid", categoryid,)
    }

    //fetch staff data
    const fetchStaffData = async () => {
        const fetchData = async () => {
            const all_staff_details = await fetch(
                "api/staff_routers/get_all_staff_details",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ selectedColumns: { staffid: true, name: true } }),
                }
            );
            const res = await all_staff_details.json();
            setFetchedStaffData(res.users);
            // console.log("res",res.users,)
        };
        // call the function
        fetchData().catch(console.error);
    }

    //fetch staff data
    const fetchCategoryData = async () => {
        const fetchData = async () => {
            const all_category_details = await fetch(
                "api/category_routers/get_all_category_details",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({}),
                }
            );
            const res = await all_category_details.json();
            setFetchedCategoryData(res.categoriesData);
            console.log("res", res.categoriesData,)
        };
        // call the function
        fetchData().catch(console.error);
    }

    useEffect(() => {
        fetchStaffData();
        fetchCategoryData();
    }, []);


    function beforeSaveAction() {
        delete selRowData.createdAt;
        const newObject = { staffid, name, contracttype, contactno, nic, password }
        const keys = Object.keys(selRowData);
        for (const key of keys) {
            if (selRowData[key] !== newObject[key]) {
                return false;
            }
        }
        return true;
    }

    const actionHandler = () => {
        if (staffid) {
            if (beforeSaveAction()) {
                console.log("no any")
                setAddnewIsOpen(false);
            } else {
                console.log("change")
                updateStaffAction();
                // setSaveChangeWarning(true);
            }

        } else {
            addStaffNewAction();
        }
    }

    //delete staff action
    const deleteActionHandler = async () => {

        if (staffid) {
            const responseDelStaff = await fetch(
                "api/staff_routers/del_staff_details",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ staffid }),
                }
            );

            const res = await responseDelStaff.json();
            console.log(res);
            setAddnewIsOpen(false);
            window.location.href = "/staff"
        } else {
            window.location.href = "/staff"
        }

    }

    //add new staff action
    const addStaffNewAction = async (e) => {
        if (password == confirmpassword) {
            const responseNewStaff = await fetch(
                "api/staff_routers/addnew_staff_details",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, contracttype, contactno, nic, password }),
                }
            );

            const res = await responseNewStaff.json();
            console.log(res);

            if (res.message == "SUCCESS") {
                setAddnewIsOpen(false);
                setShowAddnewAlert(true);
                setTimeout(() => {
                    setShowAddnewAlert(false);
                    window.location.href = "/staff"
                }, 2000);
            } else {
                router.push("/");
            }
            return res;
        } else {
            setShowPasswordWarnAlert(true);
            setTimeout(() => {
                setShowPasswordWarnAlert(false);
            }, 5000);
        }
    };

    //update existing staff action
    const updateStaffAction = async (e) => {
        const responseUpdateStaff = await fetch(
            "api/staff_routers/update_staff_details",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ staffid, name, contracttype, contactno, nic, password }),
            }
        );

        const res = await responseUpdateStaff.json();
        console.log(res);

        if (res.message == "SUCCESS") {
            setAddnewIsOpen(false);
            setShowUpdateAlert(true);
            setTimeout(() => {
                setShowUpdateAlert(false);
                window.location.href = "/staff"
            }, 3000);
        } else {
            router.push("/");
        }
        return res;
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
                    id="taskid"
                    name="taskid"
                    type="hidden"
                    autocomplete=""
                    value={taskid}
                    onChange={(e) => setTaskid(e.target.value)}
                />
                <div className="pl-12 pb-1">
                    <h1 className="text-2xl uppercase text-indigo-800">Add New Task</h1>
                </div>
                <div className="flex items-center justify-center p-1">
                    <div className="mx-auto w-full max-w-[550px]">
                        <div className="-mx-3 flex flex-wrap ">
                            <div className="w-full px-3">
                                <SelectBoxInputField
                                    label="Staff Name"
                                    value={staffid}
                                    options={fetchedStaffData}
                                    optionValue="staffid"
                                    optionLabel="name"
                                    onSelect={(e) => setStaffid(e.target.value)}
                                />
                                <InputField
                                    label="Client Name"
                                    id="clientname"
                                    name="clientname"
                                    type="text"
                                    autocomplete=""
                                    placeholder="Client Name"
                                    value={clientname}
                                    onChange={(e) => setClientname(e.target.value)}
                                />
                                <SelectBoxInputField
                                    label="Category"
                                    value={categoryid}
                                    options={fetchedCategoryData}
                                    optionValue="categoryid"
                                    optionLabel="categoryname"
                                    onSelect={(e) => setCategoryid(e.target.value)}
                                />

                                {/* <h1>Show More</h1> */}
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-3/4">
                                        <InputField
                                            label="Location"
                                            id="location"
                                            name="location"
                                            type="text"
                                            autocomplete=""
                                            placeholder="Location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3 sm:w-1/4">
                                        <InputField
                                            label="No. of visits"
                                            id="visitcount"
                                            name="visitcount"
                                            type="number"
                                            autocomplete=""
                                            placeholder="1-10"
                                            value={visitcount}
                                            onChange={(e) => setVisitcount(e.target.value)}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-3">
                                <button onClick={test}
                                    className="rounded-lg bg-gradient-to-r from-green-500 to-green-600  hover:bg-gradient-to-l hover:from-green-500 hover:to-green-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Submit
                                </button>
                            </div>
                            <div>
                                <button onClick={() => setAddnewIsOpen(false)}
                                    className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600  hover:bg-gradient-to-l hover:from-amber-500 hover:to-amber-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Cancel
                                </button>
                            </div>
                            {/* <div className={showDelButton === "true" ? "flex ml-auto" : "flex ml-auto hidden"}> */}
                            {/* <ConfirmAlertbox buttonName="Delete" leftButtonAction={deleteActionHandler} title="Are you sure?" description="Do you want to delete this record ?" /> */}

                            {/* <button onClick={deleteActionHandler}
                  className="rounded-lg bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Delete
                </button> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </Modal>
            {/* 
      {showAddnewAlert && (< Toast description="Successfully created New Staff Member.." style="bg-green-500 hover:bg-green-600" setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (< Toast description="Successfully updated.." style="bg-indigo-500 hover:bg-indigo-600" setShowAlert={setShowUpdateAlert} />)}
      {showPasswordWarn && (< Toast description="Password does not match.." style="bg-red-500 hover:bg-red-600" setShowAlert={setShowPasswordWarnAlert} />)} */}
            {/* {showAddnewAlert && (<SaveAlert description="Successfully created New Staff Member.." setShowAlert={setShowAddnewAlert} />)}
      {showUpdateAlert && (<SaveAlert description="Successfully updated.." setShowAlert={setShowUpdateAlert} />)} */}
        </div>
    );
};
export default AddNewTaskPopup;
