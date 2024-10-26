import { ClerkProvider } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";

import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
