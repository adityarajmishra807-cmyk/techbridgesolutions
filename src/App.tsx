import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PhysicsLab from "./pages/PhysicsLab.tsx";
import ChemistryLab from "./pages/ChemistryLab.tsx";
import MathsLab from "./pages/MathsLab.tsx";
import BiologyLab from "./pages/BiologyLab.tsx";
import ComputerLab from "./pages/ComputerLab.tsx";
import CompositeLab from "./pages/CompositeLab.tsx";
import RouteMeta from "./components/RouteMeta.tsx";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <>
    <RouteMeta />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/labs/physics" element={<PhysicsLab />} />
      <Route path="/labs/chemistry" element={<ChemistryLab />} />
      <Route path="/labs/maths" element={<MathsLab />} />
      <Route path="/labs/biology" element={<BiologyLab />} />
      <Route path="/labs/computer" element={<ComputerLab />} />
      <Route path="/labs/composite" element={<CompositeLab />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;