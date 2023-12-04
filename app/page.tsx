"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidDownload } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaViber } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import Link from "next/link";

function Home() {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div className="grid grid-cols-12 relative h-screen">
			<div className="col-span-12 lg:col-span-4 h-[250px] md:h-[450px] lg:h-screen container bg-black lg:bg-white">
				<Navigation />
			</div>
			<div className="col-span-12 lg:col-span-8 container bg-black space-y-8 ">
				<h1 className="text-white text-6xl md:text-7xl font-unna font-bold">
					Crafting <br className="block md:hidden" /> the content <br />
					of tomorrow
				</h1>
				<p className="text-white font-poppin text-sm md:text-sm lg:text-lg w-full lg:w-8/12">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Deserunt consequuntur consequuntur similique magni quis ad, in
					beatae velit qui aspernatur omnis sunt ducimus, vel reprehenderit
					unde animi voluptatibus dolores a provident?similique magni quis
					ad,
				</p>
				<div className="flex items-center gap-6">
					<div className="w-[180px] h-[40px] bg-mainColor font-bold outline-none hover:text-mainColor hover:border-2 hover:border-mainColor hover:bg-black duration-300 flex items-center justify-center">
						<BiSolidDownload className="text-xl mr-1" />
						Full Report
					</div>
					<div className="relative overflow-hidden  w-[180px] h-[40px] text-white border-2 border-white font-bold flex items-center justify-center">
						<motion.div
							initial={{ x: 0 }}
							whileHover={{ x: 160, transition: { duration: 0.5 } }}
							animate={{ x: isHovered ? 160 : 0 }}
							transition={{ duration: 0.5 }}
							className="w-full flex items-center justify-center bg-black absolute"
						>
							<MdArrowOutward className="text-xl mr-1" />
							Share
						</motion.div>

						<div
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							className="flex items-center justify-center gap-3"
						>
							<Link href={"https://www.facebook.com/"}>
								<FaFacebook />
							</Link>
							<Link href={"https://twitter.com/"}>
								<FaXTwitter />
							</Link>
							<Link
								href={
									"https://www.viber.com/en/?utm_source=invite&utm_Medium=share&utm_campaign=msgtest"
								}
							>
								<FaViber />
							</Link>
							<Link href={"https://www.linkedin.com/feed/"}>
								<FaLinkedin />
							</Link>
							<Link href={"https://mail.google.com/mail/u/0/#inbox"}>
								<MdMail />
							</Link>
						</div>
					</div>
				</div>
				<div className="pt-4 md:pt-8 w-full lg:w-[450px] relative overflow-hidden">
					<motion.img
						src="https://artlist.io/blog/wp-content/uploads/2023/11/paper-black-3.png"
						alt=""
						className="w-full object-center"
					/>
					<motion.img
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 1, delay: 3, type: "tween" }}
						src="https://wallpapercosmos.com/w/full/f/c/3/1223330-1440x3040-mobile-hd-baymax-tv-series-wallpaper.jpg"
						alt=""
						className="w-full object-center absolute inset-0"
					/>
				</div>
			</div>
			<div className="w-full lg:w-[720px] lg:h-[400px]  absolute left-0 -bottom-16 md:-bottom-36 lg:left-20 lg:-bottom-10	mt-10  lg:mt-0">
				<Image
					width={200}
					height={200}
					src="https://artlist.io/blog/wp-content/uploads/2023/11/ribbons_gif.gif"
					alt=""
					className="attachment-full size-full wp-image-14864 w-full "
				/>
			</div>
		</div>
	);
}

export default Home;
