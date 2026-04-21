import React from "react";

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <div className="">
      

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white border border-border rounded-lg py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
};

export default Input;