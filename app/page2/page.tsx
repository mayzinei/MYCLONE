"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
	{ title: "My Wallpaper - 1", url: "/images/img1.jpg", alt: "my wp 1" },
	{ title: "My Wallpaper - 2", url: "/images/img2.jpg", alt: "my wp 2" },
	{ title: "My Wallpaper - 3", url: "/images/img3.jpeg", alt: "my wp 3" },
	{ title: "My Wallpaper - 4", url: "/images/img4.jpeg", alt: "my wp 4" },
	{ title: "My Wallpaper - 5", url: "/images/img5.png", alt: "my wp 5" },
	{ title: "My Wallpaper - 6", url: "/images/img6.jpg", alt: "my wp 6" },
	{ title: "My Wallpaper - 1", url: "/images/img1.jpg", alt: "my wp 1" },
	{ title: "My Wallpaper - 2", url: "/images/img2.jpg", alt: "my wp 2" },
	{ title: "My Wallpaper - 3", url: "/images/img3.jpeg", alt: "my wp 3" },
	{ title: "My Wallpaper - 4", url: "/images/img4.jpeg", alt: "my wp 4" },
	{ title: "My Wallpaper - 5", url: "/images/img5.png", alt: "my wp 5" },
	{ title: "My Wallpaper - 6", url: "/images/img6.jpg", alt: "my wp 6" },
];

export default function Page2() {
	return (
		<div className="bg-blue-300">
			<div className="flex h-screen items-center justify-center">
				<span className="font-bold uppercase">Section</span>
			</div>
			<HorizontalScrollCarousel />
			<div className="flex h-screen items-center justify-center">
				<span className="font-bold uppercase">Section</span>
			</div>
		</div>
	);
}

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section ref={targetRef} className="relative h-[300vh] bg-white">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<h1 className="md:text-5xl lg:text-8xl font-bold text-blue-300 absolute md:right-0 lg:right-40 hidden md:block">
					I showed my wallpapers.
				</h1>
				<motion.div style={{ x }} className="flex gap-6">
					{cards.map((card, index) => {
						return (
							<div key={index}>
								<Card card={card} />
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }: any) => {
	return (
		<div
			key={card.id}
			className="group relative h-[300px] w-[300px] overflow-hidden rounded-full"
		>
			<div
				style={{
					backgroundImage: `url(${card.url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
			></div>
			<div className="absolute inset-0 z-10 grid place-content-center">
				<p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
					{card.title}
				</p>
			</div>
		</div>
	);
};
