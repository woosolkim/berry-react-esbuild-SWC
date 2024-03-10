import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      open: true,
    },
    plugins: [react(), viteTsconfigPaths()],
    cacheDir: "./.vite",
  };
});
