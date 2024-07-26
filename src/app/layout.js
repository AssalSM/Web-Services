import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Creative Website Services',
  description: 'Creative website now',
  keywords:"services, website creation, portfolio websites, e-commerce websites, service websites, web development",
  icons: {
    icon: '/logocard-modified.png',  
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
