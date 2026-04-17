import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = (props: any) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        {...props}
        type={show ? "text" : "password"}
        className="w-full px-3 py-2 rounded-xl border border-border bg-surface"
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