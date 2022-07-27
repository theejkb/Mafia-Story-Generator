import React from "react";
import { EditorProvider } from "../../providers/EditorProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

type _LayoutProps = {
  children: React.ReactNode;
};
const _Layout: React.FC<_LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-500 font-body">
      <Navbar />
      <EditorProvider>
        <main className="flex-1">{children}</main>
      </EditorProvider>
      <Footer />
    </div>
  );
};

export default _Layout;
