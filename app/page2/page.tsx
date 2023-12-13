import HoverEffect from "@/components/HoverEffect";
import ScrollCarousel from "@/components/ScrollCarousel";

export default function Page2() {
	return (
		<div className="bg-blue-300">
			<div className="flex h-screen items-center justify-center bg-red-800">
				<HoverEffect />
			</div>
			<ScrollCarousel />
			<div className="flex h-screen items-center justify-center">
				<span className="font-bold uppercase">Section</span>
			</div>
		</div>
	);
}
