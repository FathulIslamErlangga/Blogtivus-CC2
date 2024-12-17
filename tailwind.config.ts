import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#191A23",
        greenty: "#B9FF66",
        primaryWhite: "#F3F3F3",
      },
      minWidth: {
        md: "900px",
        sm: "550px", // Tambahkan nilai kustom
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
} satisfies Config;
