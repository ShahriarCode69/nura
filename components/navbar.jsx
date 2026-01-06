"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "@/public/images/logo.svg";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/gallery", label: "Gallery" },
		{ href: "/contact", label: "Contact" },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15, // delay between each link
				delayChildren: 0.2, // initial delay before first one
			},
		},
	};

	const linkVariants = {
		hidden: { opacity: 0, x: -50 }, // 👈 starts 50px to the left
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	return (
		<nav className="absolute w-full z-50">
			<div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src={logo}
							alt="Logo"
							width={40}
							height={40}
							className=""
						/>
						<span className="font-semibold text-2xl text-white">Nura</span>
					</Link>

					{/* Center Links (Desktop) */}
					<div className="hidden md:flex space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-white font-medium"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Right Button */}
					<div className="hidden md:flex">
						<Button variant='secondary'>Schedule A Visit</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-md transition text-white cursor-pointer"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="md:hidden bg-white mx-3 rounded-2xl"
					>
						<motion.div
							className="px-12 py-8 space-y-3 flex-center flex-col"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							{navLinks.map((link) => (
								<motion.div key={link.href} variants={linkVariants}>
									<Link
										key={link.href}
										href={link.href}
										onClick={() => setIsOpen(false)}
										className=" text-gray-700 hover:text-gray-900 font-medium"
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
