import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
import RightSideBar from "@/components/layout/RightSideBar";
import MainContainer from "@/components/layout/MainContainer";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatZone",
  description: "Next 14 Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row">
            {children}
            <LeftSideBar/>
            <MainContainer>
              <TopBar/>
              {children}
            </MainContainer>
            <RightSideBar/>
          </main>
          
        </body>
      </html>
    </ClerkProvider>
    
  );
}