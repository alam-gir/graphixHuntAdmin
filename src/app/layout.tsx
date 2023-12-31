import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthProvider";
import NavbarProvider from "@/context/NavbarProvider";
import StatesProvider from "@/context/StatesProvider";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "graphixHunt",
  description: "graphixHunt is a source for every desingin solutions.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {/* toaster  */}
        <Toaster position="bottom-right" reverseOrder={false} />
        <AuthProvider>
          <StatesProvider>
            <NavbarProvider>{children}</NavbarProvider>
          </StatesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
