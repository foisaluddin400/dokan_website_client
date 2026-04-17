module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#5B2EFF",
        "primary-dark": "#3B1EDB",
        "primary-light": "#E9E5FF",

        secondary: "#1E3A8A",
        "secondary-light": "#DBEAFE",

        accent: "#00F5A0",
        "accent-red": "#FF5C5C",
        "accent-gold": "#F7C948",

        background: "#F7F8FC",
        surface: "#F8F9FB",
        "surface-2": "#F1F3F9",

        "dark-bg": "#0B0F1A",
        "dark-card": "#111827",
        "dark-surface": "#1F2937",

        text: "#0F172A",
        "text-secondary": "#475569",
        "text-muted": "#94A3B8",
        "dark-text": "#F9FAFB",

        border: "#E2E8F0",
        divider: "#F1F5F9",

        success: "#10B981",
        "success-light": "#D1FAE5",

        error: "#EF4444",
        "error-light": "#FEE2E2",

        warning: "#F59E0B",
        "warning-light": "#FEF3C7",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #5B2EFF, #1E3A8A)",
        "gradient-success": "linear-gradient(135deg, #00F5A0, #10B981)",
        "gradient-sale": "linear-gradient(135deg, #FF5C5C, #F7C948)",
      },

      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.05)",
        medium: "0 8px 20px rgba(0,0,0,0.08)",
        strong: "0 12px 30px rgba(0,0,0,0.12)",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },

  plugins: [],
};