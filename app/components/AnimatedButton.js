export default function AnimatedButton({ title, containerClass }) {
  return (
    <>
      <button
        className={`relative inline-flex h-14 w-40 overflow-hidden rounded-xl p-[2px] ${containerClass} transition-all duration-300 group-hover:hidden`}
      >
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFCD03_0%,#1D1D1D_20%,#1D1D1D_50%,#FFCD03_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-black-100 px-3 py-1 font-medium text-white backdrop-blur-3xl">
          {title}
        </span>
      </button>
    </>
  );
}
