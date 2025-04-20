import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernando Molina | Blockchain Data Engineer",
  description: "Crypto data engineer with experience in blockchain indexing, data pipelines, and analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-end gap-4 mb-16">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-7a8.16 8.16 0 004.65 1.49v-3.88a4.85 4.85 0 01-1.2 0z"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.26-1.21-1.59-1.21-1.59-.99-.68.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.21-4.96-5.38 0-1.19.42-2.16 1.12-2.92-.11-.28-.49-1.4.11-2.91 0 0 .91-.29 3 1.12a10.38 10.38 0 015.5 0c2.08-1.41 3-.12 3-.12.6 1.51.22 2.63.11 2.91.69.76 1.12 1.73 1.12 2.92 0 4.18-2.55 5.11-4.98 5.37.39.34.73 1 .73 2.02v3c0 .29.19.62.74.52A11 11 0 0012 1.27"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.24.73-.53v-1.85c-3.03.66-3.67-1.46-3.67-1.46-.5-1.26-1.21-1.59-1.21-1.59-.99-.68.07-.66.07-.66 1.09.08 1.67 1.12 1.67 1.12.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.42-.27-4.96-1.21-4.96-5.38 0-1.19.42-2.16 1.12-2.92-.11-.28-.49-1.4.11-2.91 0 0 .91-.29 3 1.12a10.38 10.38 0 015.5 0c2.08-1.41 3-.12 3-.12.6 1.51.22 2.63.11 2.91.69.76 1.12 1.73 1.12 2.92 0 4.18-2.55 5.11-4.98 5.37.39.34.73 1 .73 2.02v3c0 .29.19.62.74.52A11 11 0 0012 1.27"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
