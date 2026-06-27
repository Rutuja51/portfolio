import "./globals.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="min-h-full flex flex-col">
        <Header></Header>

        <main className="mt-16">
          {children}
        </main>

        <Footer></Footer>
      </body>

    </html>
  );
}
