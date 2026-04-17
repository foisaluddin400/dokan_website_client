import React from "react";

const Textarea = ({ value, onChange, placeholder }: any) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-xl border border-border bg-surface outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

export default Textarea;