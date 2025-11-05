"use client";

import React from "react";
import { motion } from "framer-motion";

const Button = ({
	variant = "primary",
	children,
	className = "",
	...props
}) => {
	const baseStyles =
		"relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-md font-medium p-5 cursor-pointer transition-all disabled:opacity-50 disabled:pointer-events-none";

	const variantStyles = {
		primary: "bg-dark text-light hover:bg-dark/90",
		secondary: "bg-light text-dark hover:bg-light/90",
	};

	return (
		<motion.a
			initial="initial"
			whileHover="hovered"
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}
			{...props}
		>
			<motion.div
				variants={{
					initial: { y: 0 },
					hovered: { y: "-200%" },
				}}
			>
				{children}
			</motion.div>
			<motion.div
				className="flex-center absolute inset-0"
				variants={{
					initial: { y: "100%" },
					hovered: { y: 0 },
				}}
			>
				{children}
			</motion.div>
		</motion.a>
	);
};

export default Button;
