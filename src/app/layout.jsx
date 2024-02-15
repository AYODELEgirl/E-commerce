import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Monts = Montserrat ({ subsets: ["latin"] , weight: ['400']});

export const metadata = {
  title: "Coding commerce application",
  description: "sales of various versions of male footwares,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Monts.className}> 
        <Navbar />
        <div className="min-h-screen" >
         {children}
         </div>
         <Footer />
        </body>
    </html>
  );
}
