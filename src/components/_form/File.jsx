import classNames from "classnames";
import { useField } from "formik";

export default function File({ label, ...props }) {
  const [fields, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    helpers.setValue(e.target.files[0]);
  };

  return (
    <label className="flex flex-col w-full p-2">
      <div className="text-base text-white flex items-center">{label}</div>
      <input
        type="file"
        accept=".jpeg,.jpg,.png"
        className={classNames({
          "w-full text-white text-opacity-100 border-b-2 focus:border-opacity-100 outline-none placeholder:text-white placeholder:text-opacity-30 focus:placeholder:text-opacity-100 transition-all duration-1000 ease-linear": true,
          "border-white border-opacity-30": !meta.error,
          "border-red-600 border-opacity-100": meta.error,
        })}
        onChange={changeHandle}
      />
      {meta.error && (
        <span className="text-sm px-1 mt-1 bg-red-600 text-white">
          {meta.error}
        </span>
      )}
    </label>
  );
}
