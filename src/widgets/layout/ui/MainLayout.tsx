"use client";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex overflow-x-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 ml-64">
        <Header />
        <div className="max-w-[calc(100vw-16rem)]">{children}</div>
      </main>
    </div>
  );
};
