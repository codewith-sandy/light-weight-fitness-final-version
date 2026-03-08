import { Sidebar } from "./Sidebar";

export function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FFFFFF] font-inter flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 md:ml-[70px] bg-[#0F0F0F] min-h-screen transition-all duration-300 relative overflow-hidden">
        {children}
      </main>
    </div>
  );
}
