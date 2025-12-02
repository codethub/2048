import React from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { config } from './web3/reown'; 
import GlobalStyle from './components/GlobalStyle'; 

const queryClient = new QueryClient();

const container = document.getElementById('game') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle /> 
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);