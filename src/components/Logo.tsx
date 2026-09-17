interface LogoProps {
  variant?: "full" | "compact" | "stacked";
  className?: string;
  emblemSize?: number;
}

export default function Logo({
  variant = "full",
  className = "",
  emblemSize = 44,
}: LogoProps) {
  return (
    <div
      className={`flex items-center gap-3 ${
        variant === "stacked" ? "flex-col justify-center" : ""
      } ${className}`}
    >
      {/* Logo */}
      <img
        src="/images/logo2.png"
        alt="KCAL VENUS FITNESS"
        width={emblemSize}
        height={emblemSize}
        className="block shrink-0 object-contain"
      />

      {/* Company Name */}
      {variant !== "compact" && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[17px] font-semibold tracking-[0.08em] text-white">
            KCAL VENUS
          </span>

          <span className="mt-1 text-[8px] font-medium tracking-[0.25em] text-[#d9b84c]">
            FITNESS
          </span>
        </div>
      )}
    </div>
  );
}
