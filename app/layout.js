import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Taychou Couture",
  description:
    "Explorez notre collection et découvrez comment Taychou Couture allie l'authenticité et l'innovation pour vous offrir des vêtements qui racontent une histoire et incarnent le style et l'élégance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/image/site-preview.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/image/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
