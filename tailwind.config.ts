import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Tady říkáme Tailwindu, kde všude má hledat třídy
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Pokud máš složku constants nebo src, přidej ji sem taky:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tady se dají přidávat vlastní barvy, fonty atd.
      // Zatím to necháme prázdné, aby fungovaly defaulty (včetně p-5)
    },
  },
  plugins: [],
};
export default config;