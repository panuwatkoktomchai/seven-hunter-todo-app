import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
