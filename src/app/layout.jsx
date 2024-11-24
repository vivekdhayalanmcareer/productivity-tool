import "./globals.css";

export const metadata = {
  title: "Productivity tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="spectrum spectrum--medium spectrum--light">
      <body style={{ height: "100vh" }}>{children}</body>
    </html>
  );
}
