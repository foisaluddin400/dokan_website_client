const RadioGroup = ({ options, value, onChange }: any) => {
  return (
    <div className="space-y-2">
      {options.map((opt: any) => (
        <label key={opt.value} className="flex gap-2">
          <input
            type="radio"
            name="radio"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;