import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function getRouterBase() {
  const baseUrl = import.meta.env.BASE_URL;
  if (baseUrl && baseUrl !== "/" && baseUrl.startsWith("/")) {
    return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  }

  try {
    const bundlePathname = new URL(import.meta.url).pathname;
    const assetsIndex = bundlePathname.lastIndexOf("/assets/");
    if (assetsIndex >= 0) {
      const inferredBase = bundlePathname.slice(0, assetsIndex);
      return inferredBase === "/" ? "" : inferredBase;
    }
  } catch {
    // ignore
  }

  return "";
}

function Routes() {
  return (
    <Switch>
      <Route path={"/index.html"} component={Home} />
      <Route path={"/dist/public/index.html"} component={Home} />
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WouterRouter base={getRouterBase()}>
            <Routes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
