import { Inter, Space_Mono } from "next/font/google";
import { StoryblokBridgeLoader } from "@storyblok/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} antialiased bg-white`}>
        {children}
        {/* This makes the Visual Editor live */}
        <StoryblokBridgeLoader options={{}} />
      </body>
    </html>
  );
}