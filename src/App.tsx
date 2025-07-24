import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CMSProvider } from "./components/cms/CMSProvider";
// import EditButton from "./components/cms/EditButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Preview from "./pages/Preview";
import CollectionPreview from "./pages/CollectionPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CMSProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/preview/:slug" element={<Preview />} />
            <Route path="/preview/:collection/:id" element={<CollectionPreview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <EditButton /> */}
        </BrowserRouter>
      </CMSProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
