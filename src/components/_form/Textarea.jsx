import { useField } from "formik";
import classNames from "classnames";

export default function Textarea({ label, ...props }) {
  const [fields, meta, helpers] = useField(props);
  return (
    <label className="flex flex-col w-full p-2">
      <textarea
        className={classNames({
          "w-full resize-none bg-transparent text-white text-opacity-100 border-b-2 focus:border-opacity-100 outline-none placeholder:text-white placeholder:text-opacity-30 focus:placeholder:text-opacity-100 transition-all duration-1000 ease-linear": true,
          "border-white border-opacity-30": !meta.error,
          "border-red-600 border-opacity-100": meta.error,
        })}
        autoComplete="off"
        {...fields}
        {...props}
      />
      {meta.error && (
        <span className="text-sm px-1 mt-1 bg-red-600 text-white">
          {meta.error}
        </span>
      )}
    </label>
  );
}
