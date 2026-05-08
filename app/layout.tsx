import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Khanchandani — Senior Frontend Engineer",
  description: "Senior Frontend Engineer specialising in React, Next.js, TypeScript and high-performance web applications.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "Rahul Khanchandani"],
  openGraph: {
    title: "Rahul Khanchandani — Senior Frontend Engineer",
    description: "Building scalable, high-performance web applications with React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
