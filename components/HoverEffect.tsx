"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HoverEffect() {
	return (
		<div className="grid w-full place-content-center bg-gradient-to-br px-4 py-12 text-slate-900">
			<TiltCard />
		</div>
	);
}

const TiltCard = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		["17.5deg", "-17.5deg"]
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		["-17.5deg", "17.5deg"]
	);

	const handleMouseMove = (e: any) => {
		const rect = e.target.getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<div
			style={{
				backgroundImage:
					'url("https://wallpapers.com/images/high/baymax-vector-artwork-0kj6t4i31msnjszt.webp");',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<motion.div
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					rotateY,
					rotateX,
					transformStyle: "preserve-3d",
				}}
				className="relative w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]  rounded-full "
			>
				<div
					style={{
						transform: "translateZ(75px)",
						transformStyle: "preserve-3d",
					}}
					className="absolute top-52 left-80 w-[300px] h-[280px] grid place-content-center rounded-full bg-white shadow-lg"
				>
					<div
						style={{
							transform: "translateZ(50px)",
						}}
						className="flex items-center"
					>
						<div className="w-8 h-10 rounded-full bg-black"></div>
						<div className="w-20 h-1 bg-black"></div>
						<div className="w-8 h-10 rounded-full bg-black"></div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
