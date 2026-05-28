import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import HistoriaUE from "./pages/HistoriaUE";
import EspanaUE from "./pages/EspanaUE";
import Quiz from "./pages/Quiz";
import Roleplay from "./pages/Roleplay";
import EscapeRoom from "./pages/EscapeRoom";
import Glosario from "./pages/Glosario";

function Router() {
  return (
    <Switch>
      {/* Main entry */}
      <Route path={"/"} component={Home} />
      
      {/* Admin routes */}
      <Route path={"/admin"} component={Admin} />
      
      {/* Teacher routes */}
      <Route path={"/profesor"} component={Teacher} />
      
      {/* Student routes */}
      <Route path={"/alumno"} component={Student} />
      <Route path={"/alumno/historia-ue"} component={HistoriaUE} />
      <Route path={"/alumno/espana-ue"} component={EspanaUE} />
      <Route path={"/alumno/quiz/:level"} component={Quiz} />
      <Route path={"/alumno/roleplay"} component={Roleplay} />
      <Route path={"/alumno/escaperoom"} component={EscapeRoom} />
      <Route path={"/alumno/glosario"} component={Glosario} />
      
      {/* Fallback routes */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
