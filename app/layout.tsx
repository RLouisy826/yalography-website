import { Footer } from "@components/Footer";
import { Header } from "@components/Navbar";

import "../styles/globals.css";

export default function RootLayout({ children }: ComponentProps) {
  return (
    <html lang="en" className={`font-sans`}>
      <head>
        <title>SXM Photography | Yalography</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
          rel="stylesheet"
        />
      </head>

      <body className="bg-zinc-900 text-gray-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
