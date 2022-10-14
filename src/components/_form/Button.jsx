import classNames from "classnames";

export default function Button({
  children,
  loading = false,
  variant = "default",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={classNames({
        "h-8 ml-2 mt-2 px-5 text-center text-white border-2 border-white text-base flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50": true,
        "bg-transparent": variant === "default",
        "bg-green-700": variant === "success",
        "bg-red-700": variant === "danger",
        "bg-orange-700": variant === "warning",
        "bg-blue-400": variant === "info",
      })}
      {...props}
    >
      {loading ? "...." : children}
    </button>
  );
}
