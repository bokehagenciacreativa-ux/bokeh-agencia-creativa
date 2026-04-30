import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";
import Servicios from "./pages/Servicios.tsx";
import NotFound from "./pages/NotFound.tsx";
import Origin from "./pages/Origin.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Portafolio from "./pages/Portafolio.tsx";
import JaenitosPoint from "./pages/portafolio/JaenitosPoint.tsx";
import ChacraBranding from "./pages/portafolio/ChacraBranding.tsx";
import WilderGarcia from "./pages/portafolio/WilderGarcia.tsx";
import GranMiradorVideo from "./pages/portafolio/GranMiradorVideo.tsx";
import Calandria from "./pages/portafolio/Calandria.tsx";
import Colinsa from "./pages/portafolio/Colinsa.tsx";
import GranMiradorWOC from "./pages/portafolio/GranMiradorWOC.tsx";
import GrupoTroya from "./pages/portafolio/GrupoTroya.tsx";
import AromasDelValle from "./pages/portafolio/AromasDelValle.tsx";
import ChacraRRSS from "./pages/portafolio/ChacraRRSS.tsx";
import GranMiradorRRSS from "./pages/portafolio/GranMiradorRRSS.tsx";
import GrainGlobal from "./pages/portafolio/GrainGlobal.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/origin" element={<Origin />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/jaenitos-point" element={<JaenitosPoint />} />
          <Route path="/portafolio/chacra-branding" element={<ChacraBranding />} />
          <Route path="/portafolio/wilder-garcia" element={<WilderGarcia />} />
          <Route path="/portafolio/gran-mirador-video" element={<GranMiradorVideo />} />
          <Route path="/portafolio/calandria" element={<Calandria />} />
          <Route path="/portafolio/colinsa" element={<Colinsa />} />
          <Route path="/portafolio/gran-mirador-woc" element={<GranMiradorWOC />} />
          <Route path="/portafolio/grupo-troya" element={<GrupoTroya />} />
          <Route path="/portafolio/aromas-del-valle" element={<AromasDelValle />} />
          <Route path="/portafolio/chacra-rrss" element={<ChacraRRSS />} />
          <Route path="/portafolio/gran-mirador-rrss" element={<GranMiradorRRSS />} />
          <Route path="/portafolio/grain-global" element={<GrainGlobal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
