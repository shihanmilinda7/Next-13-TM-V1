import Link from "next/link";

const CategoryInputField = ({ id, name, type, value, onChange, index, deleteInputField }) => {
  return (
    <div className="flex mb-5">
      
      <input
        type={type}
        name={name}
        id={id}
        placeholder="Photo Type"
        value={value}
        onChange={(e) => onChange(e, index)}
        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      />
      <button type="button" 
      onClick={(e) => deleteInputField(e, index)}
      className="bg-red-600 rounded-md p-2 inline-flex items-center justify-center text-red-100 hover:text-red-600 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">Close menu</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default CategoryInputField;
