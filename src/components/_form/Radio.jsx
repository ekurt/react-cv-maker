import { useField } from "formik";
import classNames from "classnames";

export default function Radio({ label, options, ...props }) {
  const [fields, meta, helpers] = useField(props);
  const clickHandle = (value) => {
    helpers.setValue(value);
  };
  return (
    <div className="flex flex-col w-full p-2">
      <div className="text-base text-white mb-1 flex items-center">{label}</div>
      <div className="flex items-center justify-start">
        {options.map((option, key) => (
          <label
            className="flex cursor-pointer items-center mr-4"
            key={key}
            onClick={() => clickHandle(option.key)}
          >
            <span
              className={classNames({
                "w-5 h-5 mr-2 rounded-full flex relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2": true,
                "bg-gray-100 before:bg-transparent group-hover:before:bg-gray-200":
                  fields.value !== option.key,
                "bg-green-600 before:bg-white": fields.value === option.key,
              })}
            />
            <span className="text-white text-base select-none">
              {option.value}
            </span>
          </label>
        ))}
      </div>
      {meta.error && (
        <span className="mt-2 px-1 text-sm bg-red-600 text-white">{meta.error}</span>
      )}
    </div>
  );
}
