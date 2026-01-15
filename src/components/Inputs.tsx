import type { InputHTMLAttributes } from "react";
type inputProps = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, id, ...props }: inputProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2 my-3">
        <label htmlFor={id}>{label}</label>
        <input
          {...props}
          className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black"
        />
      </div>
    </div>
  );
};

export default Input;
