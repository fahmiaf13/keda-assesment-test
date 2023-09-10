import { Footer, Navbar } from "@/components";
import { Helmet } from "react-helmet-async";
import React from "react";

interface IMainLayout {
  children: React.ReactNode;
  title: string;
}

export default function Main({ children, title }: IMainLayout) {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title ? `${title} | Sellify` : "Sellify"}</title>
      </Helmet>
      <Navbar />
      <main className=" relative mb-10 overflow-hidden">
        <div className="container mx-auto md:px-[5rem]">{children}</div>
        <div className="h-[30rem] w-[25rem] rounded-[8rem] rotate-[25deg] bg-gradient-to-r from-cyan-500 to-blue-500 absolute -top-[20rem] -left-[4rem]"></div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
