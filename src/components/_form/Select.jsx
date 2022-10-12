import { useField } from "formik";
import classNames from "classnames";

export default function Select({ label, sizeFull = false, options, ...props }) {
  const [fields, meta, helpers] = useField(props);
  return (
    <label
      className={classNames({
        "flex flex-col p-2": true,
        "w-1/2": !sizeFull,
        "w-full": sizeFull,
      })}
    >
      <select
        className={classNames({
          "w-full h-auto border-b-2 text-white bg-transparent h-8 text-md px-2 outline-none flex-shrink-0 appearance-none": true,
          "border-white border-opacity-30": !meta.error,
          "border-red-600 border-opacity-100": meta.error,
        })}
        {...fields}
        {...props}
      >
        <option className="bg-blue-600" value="">
          Select {label}
        </option>
        {options.map((option, index) => (
          <option className="bg-blue-600" key={index} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      {meta.error && (
        <span className="mt-2 px-1 text-sm bg-red-600 text-white">
          {meta.error}
        </span>
      )}
    </label>
  );
}