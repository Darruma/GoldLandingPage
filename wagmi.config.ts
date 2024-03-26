import * as fs from 'fs';

import { defineConfig } from '@wagmi/cli';

export default defineConfig({
  out: 'src/utils/contracts.ts',
  contracts: [
    {
      name: 'auraVault',
      abi: JSON.parse(fs.readFileSync('src/utils/abi/vaultAura.json', 'utf-8')),
    },
    {
      name: 'compVault',
      abi: JSON.parse(fs.readFileSync('src/utils/abi/vaultComp.json', 'utf-8')),
    },
  ],
  plugins: [],
});
