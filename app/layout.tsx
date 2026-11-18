import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { int } from "zod/v4";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
