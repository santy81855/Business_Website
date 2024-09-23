import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "../features/nav-bar";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "S & P Web Management",
    description: "S & P Web Management, a web development company.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Nav />
                <ToastContainer />
                {children}
            </body>
        </html>
    );
}
