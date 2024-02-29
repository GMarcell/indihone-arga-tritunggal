"use client";

import { FloatingButton } from "@/components/FloatingButton";
import Footer from "@/components/Footer";
import NewNavbar from "@/components/NewNavbar";
import { LangControllerProps } from "@/types";
import React, { ReactNode, useState } from "react";
import langContext from "@/hooks/langContext";

function LangController({ children }: LangControllerProps) {
  const [language, setLanguage] = useState<string>("en");
  return (
    <>
      <langContext.Provider value={{ language }}>
        <NewNavbar lang={language} setLang={setLanguage} />
        {children}
        <Footer lang={language} />
        <FloatingButton />
      </langContext.Provider>
    </>
  );
}

export default LangController;
