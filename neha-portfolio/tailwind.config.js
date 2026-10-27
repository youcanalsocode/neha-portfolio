export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#0B1220", panel: "#111C30", accent: "#4F8CFF", teal: "#2DD4BF", ink: "#F8FAFC", mute: "#A7B3C7" },
    fontFamily: { sans: ["Manrope", "Inter", "system-ui", "sans-serif"] }
  } },
  plugins: []
};
