import "./globals.css";

export const metadata = {
  title: "Vidyastu Education Private Limited",
  description: "Website Under Maintenance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}