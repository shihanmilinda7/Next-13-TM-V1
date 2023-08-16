import React from 'react';

const SelectBoxInputField = ({ label, options, onSelect,optionValue,optionLabel }) => {
  return (

    <div class="mb-5">
      <label
        for="fName"
        className="mb-3 block text-base font-medium text-[#07074D]"
      >
        {label}
      </label>
      <select
        className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
        onChange={onSelect}>
        {options.map((option) => (
          <option key={option[optionValue]} value={option[optionValue]}>
            {option[optionLabel]}
          </option>
        ))}
      </select>
    </div>

    // <select 
    // className='"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"'
    // onChange={onSelect}>
    //   {options.map((option) => (
    //     <option key={option.value} value={option.value}>
    //       {option.label}
    //     </option>
    //   ))}
    // </select>
  );
};

export default SelectBoxInputField;