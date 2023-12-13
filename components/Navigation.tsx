import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
	return (
		<div className="flex items-center gap-1">
			<Link
				href={"/"}
				className="uppercase text-xl font-extrabold tracking-tighter text-mainColor lg:text-black"
			>
				myclone
			</Link>
			<p className="text-white lg:text-black">|</p>
			<Link
				href={"/page2"}
				className="font-unna text-xl text-white lg:text-black"
			>
				Enterprise
			</Link>
		</div>
	);
};

export default Navigation;
