import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Thread Auto-Archiver",
  description: "Auto-archive Discord threads by engagement rules. Keep your server clean and organized automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2f29254-1423-4920-ae96-d8040e44bf31"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
