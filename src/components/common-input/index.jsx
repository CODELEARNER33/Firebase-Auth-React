/* eslint-disable react/prop-types */

export default function CommonInput({
  type,
  placeholder,
  value,
  onChange,
  className,
  name
}) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter value here"}
      value={value}
      onChange={onChange}
      name={name}
      className={
        className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"
      }
    />
  );
}
