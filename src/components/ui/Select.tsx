import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  options,
  value,
  onChange,
  placeholder = "Select option",
  disabled = false,
}: any) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<any>(null);

  const selectedLabel =
    options.find((opt: any) => opt.value === value)?.label || placeholder;

  // close outside click
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={ref}>
      {/* SELECT BOX */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className="
        w-full
           flex items-center justify-between
          bg-white
          border border-gray-200
          rounded-lg
          py-2.5 px-4
          text-sm text-gray-800
          
          transition-all duration-200
          hover:border-gray-300
         focus:outline-none focus:border-primary
          disabled:bg-gray-100
          disabled:cursor-not-allowed
        "
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {selectedLabel}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute z-50 mt-1 w-full
            bg-white
            border border-gray-200
            rounded-lg
            shadow-lg
            overflow-hidden
            animate-fadeIn
          "
        >
          {options.map((opt: any) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange({ target: { value: opt.value } });
                setOpen(false);
              }}
              className="
                px-3 py-2 text-sm
                border-b border-gray-200
                bg-primary/5
                m-1
                cursor-pointer
                transition-all duration-200
                hover:bg-primary/20
                hover:text-primary
              "
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;