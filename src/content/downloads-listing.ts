import { DownloadListingItem } from './types';

export const downloadListingPt: DownloadListingItem[] = [
  {
    id: 'amathyboost',
    title: 'aMathyBoost',
    description: 'Projeto criado por Memphis com ajustes automáticos para qualquer perfil de PC.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/RzapmonmPp4',
    tutorial: {
      label: 'Ver no YouTube',
      url: 'https://www.youtube.com/watch?v=RzapmonmPp4'
    },
    actions: [
      {
        label: 'Download via Discord',
        url: '/discord',
        type: 'discord',
        external: true
      },
      {
        label: 'Código fonte',
        url: 'https://github.com/aMathyzin/aMathyBoost',
        type: 'source',
        external: true
      }
    ],
    highlight: 'Compatível com todos os perfis',
    tags: ['amathyboost', 'windows', 'memphis']
  },
  {
    id: 'robooster2',
    slug: 'robooster2',
    title: 'RoBooster 2',
    description: 'Otimizador focado em Roblox com integração ao BloxStrap.',
    category: 'Roblox',
    videoEmbed: 'https://www.youtube.com/embed/ylDMxtM9zTs',
    actions: [
      {
        label: 'Ver projeto',
        url: '/downloads/robooster2',
        type: 'primary'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/aMathyzin/RoBooster-2',
        type: 'source',
        external: true
      }
    ],
    tags: ['robooster2', 'roblox', 'bloxstrap']
  },
  {
    id: 'haunted',
    slug: 'haunted',
    title: 'Haunted Optimizer',
    description: 'Painel portátil criado por Miguelin para ajustes rápidos no Windows.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/ciHfcpppItg',
    actions: [
      { label: 'Ver projeto', url: '/downloads/haunted', type: 'primary' },
      { label: 'Servidor Discord', url: '/discord', type: 'discord', external: true }
    ],
    tags: ['haunted', 'miguelin', 'batch']
  },
  {
    id: 'batchclick',
    slug: 'batchclick',
    title: 'BatchClick Pack',
    description: 'Coleção de rotinas em batch com foco em PCs modestos.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/iN5C3KDIGH8',
    actions: [
      { label: 'Ver projeto', url: '/downloads/batchclick', type: 'primary' },
      { label: 'Senha', url: 'http://encurtadorbr.net/senhabatclick', type: 'password', external: true }
    ],
    tags: ['batchclick', 'batch', 'otimizacao']
  },
  {
    id: 'autonetv1',
    slug: 'autonetv1',
    title: 'Autonet',
    description:
      'Otimizador de rede avançado que ajusta MTU, RWIN, TTL e prioridades para reduzir latência e estabilizar conexões.',
    category: 'Rede',
    videoEmbed: 'https://www.youtube.com/embed/0J4nhSur9DI',
    actions: [
      { label: 'Ver projeto', url: '/downloads/autonetv1', type: 'primary' },
      { label: 'Servidor Discord', url: '/discord', type: 'discord', external: true }
    ],
    tags: ['autonet', 'rede', 'latencia']
  },
  {
    id: 'minimal-optimizer',
    title: 'Minimal Optimizer',
    description: 'Painel eficiente desenvolvido pela comunidade para ajustes rápidos.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/GG9ORzRMSrc',
    actions: [
      {
        label: 'Mais informações no Discord',
        url: '/discord',
        type: 'discord',
        external: true
      },
      {
        label: 'Código fonte',
        url: 'https://github.com/Matheusdamoda/Minimal-Optimizer',
        type: 'source',
        external: true
      }
    ],
    tags: ['minimal', 'optimizer']
  },
  {
    id: '3kpack',
    slug: '3kpack',
    title: 'Pack especial de inscritos',
    description: 'Pacote comemorativo com automações exclusivas para Windows.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
    actions: [
      { label: 'Ver projeto', url: '/downloads/3kpack', type: 'primary' },
      { label: 'GitHub', url: 'https://github.com/Matheusdamoda/aMathyzin-3k-Pack/tree/main', type: 'source', external: true }
    ],
    tags: ['3k pack', 'windows', 'especial']
  },
  {
    id: 'fpspack',
    slug: 'fpspack',
    title: 'FPSPack FirstBoost',
    description: 'Pack completo com versões Lite e Completa para aumentar FPS.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/VADHdVQGWB4',
    actions: [
      { label: 'MediaFire', url: 'https://linkebr.com/FPS_Completo_Pack', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://linkebr.com/FPS_Completo_Pack_DRIVE', type: 'mirror', external: true },
      { label: 'Versão Lite', url: 'https://linkebr.com/FPS_LITE_Pack', type: 'mirror', external: true },
      { label: 'Senha', url: 'https://fir3.net/SenhaFPSV3', type: 'password', external: true }
    ],
    tags: ['fps', 'pack']
  },
  {
    id: 'valorantbooster1',
    slug: 'valorantbooster1',
    title: 'Valorant Booster',
    description:
      'Ferramenta que ajusta configurações do Windows para aumentar o FPS e estabilizar partidas no Valorant.',
    category: 'Games',
    videoEmbed: 'https://www.youtube.com/embed/7qV-fDkxeVc',
    actions: [
      { label: 'Ver projeto', url: '/downloads/valorantbooster1', type: 'primary' },
      { label: 'GitHub', url: 'https://github.com/aMathyzin/Valorant-Booster-Alpha', type: 'source', external: true }
    ],
    tags: ['valorant', 'fps', 'windows']
  },
  {
    id: 'storageclean',
    title: 'StorageClean HDD/SSD',
    description: 'Limpeza profunda para discos rígidos e SSDs. Disponível em breve.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/InodK7kHyGU',
    actions: [
      { label: 'Arquivo offline', url: '#', type: 'info', disabled: true },
      { label: 'Arquivo offline', url: '#', type: 'info', disabled: true }
    ],
    tags: ['storage', 'hdd', 'ssd']
  },
  {
    id: 'microsoft-store',
    title: 'Correção Microsoft Store',
    description: 'Guia completo para reparar erros da Microsoft Store.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/RKoig3Xp39c',
    actions: [
      { label: 'MediaFire', url: 'https://encurtalink.online/Microsoft-Store-Mediafire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://encurtalink.online/Microsoft-Store-GoogleDrive', type: 'mirror', external: true },
      { label: 'Senha', url: 'https://linkebr.com/Senha-Da-Microsoft-Storee', type: 'password', external: true }
    ],
    tags: ['microsoft store', 'correcao']
  },
  {
    id: 'xbox-cloud',
    title: 'Xbox Cloud com teclado e mouse',
    description: 'Tutorial para jogar via nuvem com teclado e mouse gratuitamente.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/s_1c6Hf5Ob4',
    actions: [
      { label: 'MediaFire', url: 'https://linkebr.com/XCLD-Mediafire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://4br.me/aMathyzin-XCLD-Drive', type: 'mirror', external: true },
      { label: 'Senha', url: 'https://linkebr.com/XCLD-Senha', type: 'password', external: true }
    ],
    tags: ['xcloud', 'xbox', 'teclado e mouse']
  },
  {
    id: 'boostpack-2023',
    title: '2023 FPSPack V2',
    description: 'Kit completo para aumentar ao máximo o FPS em jogos.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/XO1wqBFFDN8',
    actions: [
      { label: 'MediaFire', url: 'https://encurtalink.online/aMathyzin-FPSPack-MediaFire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://linkebr.com/aMathyzin-FPSPack-Drive', type: 'mirror', external: true },
      { label: 'Senha', url: 'https://linkebr.com/Senha-FPSPack', type: 'password', external: true }
    ],
    tags: ['boost pack', 'fps 2023']
  },
  {
    id: 'otimizacao-maxima',
    title: 'Otimização Máxima',
    description: 'Guia para otimizar o PC sem instalar nada.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/0J4nhSur9DI',
    actions: [
      { label: 'Arquivo .TXT', url: 'https://linkebr.com/XCLD-Mediafire', type: 'primary', external: true }
    ],
    tags: ['otimizacao maxima', 'sem instalar']
  },
  {
    id: 'pack-mobile',
    title: 'Pack Mobile',
    description: 'Limpeza e otimização completa para Android com foco em jogos.',
    category: 'Mobile',
    videoEmbed: 'https://www.youtube.com/embed/hGUIwqxcqN8',
    actions: [
      { label: 'MediaFire', url: 'https://abre.ai/limpar-ram-mobile-amathyzin', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://4br.me/Limpar-RAM-Mobile-Amathyzin', type: 'mirror', external: true },
      { label: 'Limpar armazenamento', url: 'https://seulink.net/Limpar-Cache-Mobile-Play', type: 'mirror', external: true }
    ],
    tags: ['mobile', 'android', 'jogos']
  }
];

export const downloadListingEn: DownloadListingItem[] = [
  {
    id: 'amathyboost',
    title: 'aMathyBoost',
    description: 'Project created by Memphis with automatic tweaks for any PC profile.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/RzapmonmPp4',
    tutorial: {
      label: 'Watch on YouTube',
      url: 'https://www.youtube.com/watch?v=RzapmonmPp4'
    },
    actions: [
      { label: 'Download on Discord', url: '/en/discord', type: 'discord', external: true },
      { label: 'Source code', url: 'https://github.com/aMathyzin/aMathyBoost', type: 'source', external: true }
    ],
    highlight: 'Compatible with any hardware',
    tags: ['amathyboost', 'windows', 'memphis']
  },
  {
    id: 'robooster2',
    slug: 'robooster2',
    title: 'RoBooster 2',
    description: 'Roblox optimizer integrated with BloxStrap.',
    category: 'Roblox',
    videoEmbed: 'https://www.youtube.com/embed/ylDMxtM9zTs',
    actions: [
      { label: 'View project', url: '/en/downloads/robooster2', type: 'primary' },
      { label: 'GitHub', url: 'https://github.com/aMathyzin/RoBooster-2', type: 'source', external: true }
    ],
    tags: ['robooster2', 'roblox', 'bloxstrap']
  },
  {
    id: 'haunted',
    slug: 'haunted',
    title: 'Haunted Optimizer',
    description: 'Portable panel created by Miguelin for quick Windows tweaks.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/ciHfcpppItg',
    actions: [
      { label: 'View project', url: '/en/downloads/haunted', type: 'primary' },
      { label: 'Discord server', url: '/en/discord', type: 'discord', external: true }
    ],
    tags: ['haunted', 'miguelin', 'batch']
  },
  {
    id: 'batchclick',
    slug: 'batchclick',
    title: 'BatchClick Pack',
    description: 'Batch automation pack tailored for modest PCs.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/iN5C3KDIGH8',
    actions: [
      { label: 'View project', url: '/en/downloads/batchclick', type: 'primary' },
      { label: 'Password', url: 'http://encurtadorbr.net/senhabatclick', type: 'password', external: true }
    ],
    tags: ['batchclick', 'automation']
  },
  {
    id: 'autonetv1',
    slug: 'autonetv1',
    title: 'Autonet',
    description:
      'Advanced network optimizer that tunes MTU, RWIN, TTL and priorities to reduce latency and stabilize connections.',
    category: 'Network',
    videoEmbed: 'https://www.youtube.com/embed/0J4nhSur9DI',
    actions: [
      { label: 'View project', url: '/en/downloads/autonetv1', type: 'primary' },
      { label: 'Discord server', url: '/en/discord', type: 'discord', external: true }
    ],
    tags: ['autonet', 'network', 'latency']
  },
  {
    id: 'minimal-optimizer',
    title: 'Minimal Optimizer',
    description: 'Lightweight dashboard maintained by the community for quick adjustments.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/GG9ORzRMSrc',
    actions: [
      { label: 'More details on Discord', url: '/en/discord', type: 'discord', external: true },
      { label: 'Source code', url: 'https://github.com/Matheusdamoda/Minimal-Optimizer', type: 'source', external: true }
    ],
    tags: ['minimal optimizer']
  },
  {
    id: '3kpack',
    slug: '3kpack',
    title: 'Subscribers special pack',
    description: 'Celebration bundle with exclusive Windows automations.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
    actions: [
      { label: 'View project', url: '/en/downloads/3kpack', type: 'primary' },
      { label: 'GitHub', url: 'https://github.com/Matheusdamoda/aMathyzin-3k-Pack/tree/main', type: 'source', external: true }
    ],
    tags: ['3k pack', 'windows']
  },
  {
    id: 'fpspack',
    slug: 'fpspack',
    title: 'FPSPack FirstBoost',
    description: 'Complete pack with lite and full editions to raise FPS.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/VADHdVQGWB4',
    actions: [
      { label: 'MediaFire', url: 'https://linkebr.com/FPS_Completo_Pack', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://linkebr.com/FPS_Completo_Pack_DRIVE', type: 'mirror', external: true },
      { label: 'Lite version', url: 'https://linkebr.com/FPS_LITE_Pack', type: 'mirror', external: true },
      { label: 'Password', url: 'https://fir3.net/SenhaFPSV3', type: 'password', external: true }
    ],
    tags: ['fpspack', 'firstboost']
  },
  {
    id: 'valorantbooster1',
    slug: 'valorantbooster1',
    title: 'Valorant Booster',
    description: 'Tool that adjusts Windows settings to raise FPS and stabilize Valorant matches.',
    category: 'Games',
    videoEmbed: 'https://www.youtube.com/embed/7qV-fDkxeVc',
    actions: [
      { label: 'View project', url: '/en/downloads/valorantbooster1', type: 'primary' },
      { label: 'GitHub', url: 'https://github.com/aMathyzin/Valorant-Booster-Alpha', type: 'source', external: true }
    ],
    tags: ['valorant', 'booster', 'windows']
  },
  {
    id: 'storageclean',
    title: 'StorageClean HDD/SSD',
    description: 'Deep cleaning for HDD and SSD. Coming soon.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/InodK7kHyGU',
    actions: [
      { label: 'Offline', url: '#', type: 'info', disabled: true },
      { label: 'Offline', url: '#', type: 'info', disabled: true }
    ],
    tags: ['storage', 'clean']
  },
  {
    id: 'microsoft-store',
    title: 'Microsoft Store fix',
    description: 'Complete guide to repair Microsoft Store issues.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/RKoig3Xp39c',
    actions: [
      { label: 'MediaFire', url: 'https://encurtalink.online/Microsoft-Store-Mediafire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://encurtalink.online/Microsoft-Store-GoogleDrive', type: 'mirror', external: true },
      { label: 'Password', url: 'https://linkebr.com/Senha-Da-Microsoft-Storee', type: 'password', external: true }
    ],
    tags: ['microsoft store', 'fix']
  },
  {
    id: 'xbox-cloud',
    title: 'Xbox Cloud keyboard + mouse',
    description: 'Tutorial to play via cloud gaming with keyboard and mouse for free.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/s_1c6Hf5Ob4',
    actions: [
      { label: 'MediaFire', url: 'https://linkebr.com/XCLD-Mediafire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://4br.me/aMathyzin-XCLD-Drive', type: 'mirror', external: true },
      { label: 'Password', url: 'https://linkebr.com/XCLD-Senha', type: 'password', external: true }
    ],
    tags: ['xcloud', 'keyboard', 'mouse']
  },
  {
    id: 'boostpack-2023',
    title: '2023 FPSPack V2',
    description: 'Toolkit to push FPS to the max in competitive games.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/XO1wqBFFDN8',
    actions: [
      { label: 'MediaFire', url: 'https://encurtalink.online/aMathyzin-FPSPack-MediaFire', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://linkebr.com/aMathyzin-FPSPack-Drive', type: 'mirror', external: true },
      { label: 'Password', url: 'https://linkebr.com/Senha-FPSPack', type: 'password', external: true }
    ],
    tags: ['boost pack', 'fps']
  },
  {
    id: 'otimizacao-maxima',
    title: 'Maximum optimization',
    description: 'Guide to optimize Windows without installing anything.',
    category: 'Windows',
    videoEmbed: 'https://www.youtube.com/embed/0J4nhSur9DI',
    actions: [
      { label: 'Download .TXT', url: 'https://linkebr.com/XCLD-Mediafire', type: 'primary', external: true }
    ],
    tags: ['maximum optimization']
  },
  {
    id: 'pack-mobile',
    title: 'Mobile Pack',
    description: 'Complete cleaning and optimization workflow for Android gaming.',
    category: 'Mobile',
    videoEmbed: 'https://www.youtube.com/embed/hGUIwqxcqN8',
    actions: [
      { label: 'MediaFire', url: 'https://abre.ai/limpar-ram-mobile-amathyzin', type: 'primary', external: true },
      { label: 'Google Drive', url: 'https://4br.me/Limpar-RAM-Mobile-Amathyzin', type: 'mirror', external: true },
      { label: 'Storage cleaning', url: 'https://seulink.net/Limpar-Cache-Mobile-Play', type: 'mirror', external: true }
    ],
    tags: ['mobile', 'android', 'gaming']
  }
];
