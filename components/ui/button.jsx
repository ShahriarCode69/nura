"use client";

export default function Button({
	children,
	variant = "light",
	className = "",
}) {
	const baseClasses = "group relative h-12 rounded-lg bg-black px-4 cursor-pointer";

	const variantClasses =
		variant === "dark" ? "bg-black text-white" : "bg-white text-black";

	return (
		<button className={`${baseClasses} ${variantClasses} ${className}`}>
			<span className="relative inline-flex overflow-hidden">
				<div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12">
					{children}
				</div>
				<div className="absolute translate-y-[120%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
					{children}
				</div>
			</span>
		</button>
	);
}
