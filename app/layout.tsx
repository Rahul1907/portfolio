import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul Khanchandani — Senior Full Stack Engineer",
  description: "Senior Full Stack Engineer specialising in React, Next.js, TypeScript, Node.js, and modern web architectures.",
  keywords: ["Full Stack Engineer", "React", "Next.js", "TypeScript", "Node.js", "Express", "DynamoDB", "AWS SQS", "Rahul Khanchandani"],
  openGraph: {
    title: "Rahul Khanchandani — Senior Full Stack Engineer",
    description: "Building scalable, high-performance web applications with React, Next.js, Node.js, and TypeScript.",
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
