export default function Button({ children, loading = false, ...props }) {
  return (
    <button
      disabled={loading}
      className="h-10 ml-2 px-6 text-center justify-center bg-transparent border-2 border-white text-base flex items-center text-white disabled:bg-opacity-50"
      {...props}
    >
      {loading ? "...." : children}
    </button>
  );
}
