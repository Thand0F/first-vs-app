import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "My Next.js App",
  description: "Starter project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="p-8 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
