import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				unna: ["Unna", "serif"],
				poppin: ["Poppins", "sans-serif"],
			},
			colors: {
				mainColor: "#ffda2a",
			},
		},
	},
	plugins: [],
};
export default config;
