import Link from "next/link";

const CategoryInputField = ({ id, name, type, value, onChange,index}) => {
  return (
    <div class="mb-5">
    <input
      type={type}
      name={name}
      id={id}
      placeholder="Photo Type"
      value={value}
      onChange={(e) => onChange(e, index)}
      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
    />
  </div>
  );
};

export default CategoryInputField;
