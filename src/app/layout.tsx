import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
  title: "Phi Trường & Kim Cúc Wedding",
  description: "Thiệp cưới online",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta
          property="og:image"
          content="https://phi-truong-kim-cuc-wedding.vercel.app/_next/image?url=%2Fimages%2Fcouple.jpg&w=640&q=75"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inconsolata:wght@200..900&family=Pacifico&family=Patrick+Hand&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Phi Trường & Kim Cúc Wedding" />
        <meta property="og:description" content="Thiệp cưới online" />
        <meta
          property="og:url"
          content="https://phi-truong-kim-cuc-wedding.vercel.app"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phi Trường & Kim Cúc Wedding" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://phi-truong-kim-cuc-wedding.vercel.app/_next/image?url=%2Fimages%2Fcouple.jpg&w=640&q=75"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
