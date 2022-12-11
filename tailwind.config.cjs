/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				redtheme: "hsl(1, 90%, 64%)",
				bluetheme: "hsl(219, 85%, 26%)",
				main: "hsl(210, 60%, 98%)",
				unread: "hsl(211, 68%, 94%)",
				private: "hsl(205, 33%, 90%)",
				period: "hsl(219, 14%, 63%)",
				normaltext: "hsl(219, 12%, 42%)",
				blacktext: "hsl(224, 21%, 14%)",
			},
		},
	},
	plugins: [],
};
