import type { Metadata } from "next";
import "./globals.css";
import LeftMenu from "@/components/LeftMenu";
import RouteChangeLoader from "@/components/RouteChangeLoader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Wingman",
  description: "Made by saumitra",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    //     {children}
    //   </body>
    // </html>
    <html lang="en">
      <body
      // className={`${dmSans.className} `}
      >
        <RouteChangeLoader>
          {/* <Header /> */}
          <LeftMenu />

          {/* <Loader loading /> */}
          <div style={{ marginLeft: 68 }}>
            {/* <Spacer spacing={72} horizontal /> */}
            {children}
          </div>
        </RouteChangeLoader>
      </body>
    </html>
  );
}
