import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CharacterProvider } from "./hooks/CharacterContext.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </QueryClientProvider>
  </StrictMode>
);
