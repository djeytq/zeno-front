import "./globals.css";
import { Header } from "@/components/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <main className="h-[85vh] overflow-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
