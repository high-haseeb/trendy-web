import localFont from "next/font/local";
import "./globals.css";

const SFPro = localFont(
    {
        src: [
            {
                path: "./fonts/SF-Pro-Display-Bold.otf",
                weight: "900",
                style: "bold",
            },
            {
                path: "./fonts/SF-Pro-Display-Regular.otf",
                weight: "400",
                style: "regular"
            }
        ],
        variable: "--font-sfpro",
    }
);

export const metadata = {
    title: "Trendy",
    description: "Trendy Analyis Every Day. Made by high-haseeb",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${SFPro.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
