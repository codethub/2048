// wagmi.ts
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { base } from 'wagmi/chains'


const projectId = "e92cd95903697faa0452d626c1b1a673"; // get your project id on reown.com dashboard
 
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [base],
  ssr: true,
  connectors: [],
});


createAppKit({
  adapters: [wagmiAdapter],
  networks: [base],
  projectId,
  metadata: {
    name: "2048",
    description: "2048 Game Play to Earn",
    url: "https://2048.dev.pages/",
    icons: ["https://2048.dev.pages/2048.png"],
  },
  themeMode: "dark",
});

export const config = wagmiAdapter.wagmiConfig;