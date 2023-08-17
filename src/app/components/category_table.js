import AddNewCategoryPopup from "./addnew_category_popup";

export const CategoryTable = ({ categoryRowData }) => {

    const tableHeads = ["#", "Category Name", "Photo Types", ""];
    const tableDataKeys = ["categoryname","categoryValues"];

    const selRow = (row) =>{
        console.log("row",row,)
    }
    return (
        <div className="md:px-2 py-2 w-full">
            <div className="shadow overflow-y-scroll rounded border-b border-gray-200 w-full">
                <table className="min-w-full bg-white">
                    <thead className="border-b-2 text-black border-indigo-400">
                        <tr>
                            {tableHeads.map((head) => (
                                <th key={head} className="text-left py-5 px-4 uppercase text-sm font-bold">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {categoryRowData.map((tableRow, index) => (
                            <tr className="even:bg-blue-gray-50/50 border-b-2 border-indigo-100">
                                <td className="text-left py-3 px-4 font-bold">{index + 1}</td>
                                <td className="text-left py-3 px-4">{tableRow[tableDataKeys[0]]}</td>
                                <td className="text-left py-3 px-4">
                                    {tableRow[tableDataKeys[1]].map((catValue) =>(
                                        <ul>
                                            <li>{catValue.categorydetailname}</li>
                                        </ul>
                                    ))}
                                </td>
                                {/* <td className="p-4 cursor-pointer hover:text-amber-900 hover:font-extrabold" onClick={()=>selRow(tableRow)}>Edit</td> */}
                                <td className="text-left py-3 px-4 cursor-pointer hover:text-amber-900 hover:font-extrabold"><AddNewCategoryPopup buttonName="Edit | Delete" selRowData={tableRow} delButton="true" deleteCategoryInputField="false"/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
