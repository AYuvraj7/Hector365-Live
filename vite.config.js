import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: change this to match your GitHub repo name
// e.g. if repo is "Hector365-Live", base should be "/Hector365-Live/"
export default defineConfig({
  plugins: [react()],
  base: "/Hector365-Live/",
});
