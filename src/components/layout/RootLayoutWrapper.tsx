import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FFFFFF] font-inter flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 md:ml-[70px] bg-[#0F0F0F] min-h-screen transition-all duration-300 relative overflow-hidden flex flex-col">
        {/* Global Background Logo */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-80"
          style={{
            backgroundImage: "url('/photos/gym-logo.jpeg')",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="flex-1 relative z-10">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
