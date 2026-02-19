export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  corePlugins: {
    preflight: false, // 🔥 prevents Bootstrap override
  },

  theme: {
    extend: {},
  },

  plugins: [],
};
