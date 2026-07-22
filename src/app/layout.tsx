import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.summary;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Abelti Beshana Belay",
    "Senior Software Engineer",
    ".NET Developer",
    "Next.js Developer",
    "TypeScript",
    "ASP.NET Core",
    "Full-Stack Engineer",
    "Ethiopia",
    "Remote Software Engineer",
  ],
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.site,
    title,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent">
        {children}
      </body>
    </html>
  );
}
