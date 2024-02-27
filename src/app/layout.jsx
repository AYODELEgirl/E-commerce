import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";

const inter = Montserrat ({ subsets: ["latin"] , weight: ['400']});


export const metadata = {
  title: "Coding commerce application",
  description: "sales of various versions of Wedding dresses,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <Navbar />
        <Navbar2 /> 
        <div className="min-h-screen relative top-40 -z-[1]" >
       
         {children}
         </div>
         <Footer />
        </body>
    </html>
  );
}
