import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = (props: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={show ? "text" : "password"}
        className="w-full bg-white border border-border rounded-lg py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-primary transition"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-2"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

export default PasswordInput;