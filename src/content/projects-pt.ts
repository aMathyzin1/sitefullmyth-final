import { DownloadProject } from './types';

export const downloadProjectsPt: DownloadProject[] = [
  {
    slug: 'robooster2',
    heroImage: '/images/projects/RoBooster2.png',
    category: 'Roblox',
    tags: ['Roblox', 'Bloxstrap', 'Windows'],
    release: 'Atualizado em 2025',
    video: {
      embedUrl: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
      watchUrl: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/view',
      title: 'RoBooster 2 em ação'
    },
    file: {
      path: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.exe',
      name: 'RoBooster2.exe',
      size: '95,08 MB',
      analyticsId: 'RoBooster2'
    },
    summary: {
      title: 'RoBooster 2',
      shortDescription:
        'Otimizador para Roblox integrado ao BloxStrap que aplica ajustes inteligentes de FPS, gráficos e rede.',
      description:
        'Desenvolvido por aMathyzin, o RoBooster 2 automatiza ajustes avançados no Roblox sem comprometer a segurança do jogador.'
    },
    highlights: [
      'Integração direta com o BloxStrap e perfis automáticos para diferentes modos de jogo.',
      'Ajustes de rede e gráficos calibrados para reduzir latência e picos de ping.',
      'Distribuição proprietária com atualizações gratuitas e suporte dedicado.'
    ],
    tutorial: {
      label: 'Assistir tutorial',
      url: 'https://www.youtube.com/watch?v=ylDMxtM9zTs'
    },
    downloads: [
      {
        label: 'Download direto',
        url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.exe',
        type: 'primary',
        external: true
      },
      {
        label: 'Repositório no GitHub',
        url: 'https://github.com/aMathyzin/RoBooster-2',
        type: 'source',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'BloxStrap',
        url: 'https://bloxstraplabs.com',
        type: 'info',
        external: true,
        badge: 'Obrigatório'
      },
      {
        label: 'Runtime .NET',
        url: 'https://dotnet.microsoft.com/en-us/download',
        type: 'info',
        external: true
      },
      {
        label: 'Comunidade no Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      }
    ],
    body: {
      heading: 'Sobre o RoBooster 2',
      sections: [
        {
          title: 'Integração com o BloxStrap',
          paragraphs: [
            'O RoBooster 2 funciona em conjunto com o BloxStrap para aplicar otimizações específicas no cliente do Roblox, oferecendo ganhos de FPS e uma experiência consistente mesmo em jogos pesados.',
            'A instalação é simples: basta garantir que o BloxStrap esteja atualizado, executar o RoBooster e selecionar o perfil desejado.'
          ]
        },
        {
          title: 'Licenciamento e segurança',
          paragraphs: [
            'Todo o conteúdo é distribuído com licença proprietária. A venda ou redistribuição sem autorização é proibida.',
            'O executável é assinado por aMathyzin e passa por auditorias frequentes para manter a confiabilidade.'
          ]
        },
        {
          title: 'Pré-requisitos recomendados',
          paragraphs: [
            'Instalar o runtime .NET mais recente e manter o BloxStrap atualizado evita conflitos e garante a aplicação correta dos patches.',
            'Recomenda-se executar o RoBooster com privilégios administrativos para que todas as otimizações sejam aplicadas corretamente.'
          ]
        }
      ]
    },
    seo: {
      title: 'RoBooster 2 - Otimizador para Roblox',
      description:
        'Baixe o RoBooster 2 e melhore o desempenho do Roblox com perfis automáticos, ajustes de rede e integração total ao BloxStrap.',
      keywords: ['RoBooster 2', 'BloxStrap', 'Roblox', 'aMathyzin']
    }
  },
  {
    slug: '3kpack',
    heroImage: '/images/projects/3kpack.png',
    category: 'Windows',
    tags: ['Pacote', 'Windows', 'Scripts'],
    release: 'Versão comemorativa',
    video: {
      embedUrl: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
      watchUrl: 'https://www.youtube.com/watch?v=Pxcaxgx_j-0',
      title: 'aMathyzin 3K Pack'
    },
    file: {
      path: '/downloads/files/amathyzin3k.zip',
      name: 'aMathyzin 3k Pack.zip',
      size: '5,6 MB',
      analyticsId: '3kPack'
    },
    summary: {
      title: 'aMathyzin 3k Pack',
      shortDescription:
        'Pack comemorativo criado para os 3.000 inscritos com automações, scripts exclusivos e ajustes seguros.',
      description:
        'Inclui rotinas de limpeza, restauração, otimização de jogos e ajustes de rede em uma interface guiada.'
    },
    highlights: [
      'Scripts inéditos com foco em desempenho geral do Windows.',
      'Automação completa de limpezas, restauração de serviços e ajustes de rede.',
      'Distribuição gratuita com código aberto disponível no GitHub.'
    ],
    tutorial: {
      label: 'Como utilizar',
      url: 'https://www.youtube.com/watch?v=Pxcaxgx_j-0'
    },
    downloads: [
      {
        label: 'Download direto',
        url: '/downloads/files/amathyzin3k.zip',
        type: 'primary'
      },
      {
        label: 'Download via Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      },
      {
        label: 'Código fonte',
        url: 'https://github.com/Matheusdamoda/aMathyzin-3k-Pack/tree/main',
        type: 'source',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'Termos de Serviço',
        url: '/legal/terms',
        type: 'info'
      }
    ],
    body: {
      heading: 'Conteúdo do aMathyzin 3k Pack',
      sections: [
        {
          title: 'Ferramentas inclusas',
          paragraphs: [
            'O pack reúne scripts em batch, tweaks de registro, automações de limpeza e otimizações gráficas testadas em diferentes perfis de hardware.',
            'Cada módulo apresenta uma explicação clara, permitindo que o usuário escolha apenas o que deseja aplicar.'
          ]
        },
        {
          title: 'Passo a passo recomendado',
          paragraphs: [
            'Faça o download, extraia os arquivos e execute o painel principal como administrador.',
            'Siga a sequência sugerida no vídeo tutorial para potencializar os resultados e criar um ponto de restauração antes de aplicar mudanças mais profundas.'
          ]
        },
        {
          title: 'Licença e suporte',
          paragraphs: [
            'A distribuição é gratuita e livre para uso pessoal. A venda ou redistribuição não autorizada é proibida.',
            'Dúvidas e feedbacks podem ser enviados pelo servidor oficial no Discord.'
          ]
        }
      ]
    },
    seo: {
      title: 'aMathyzin 3k Pack - Download oficial',
      description:
        'Baixe o aMathyzin 3k Pack com automações exclusivas para otimizar Windows, jogos e conexões de forma segura.',
      keywords: ['3k pack', 'aMathyzin', 'otimização', 'download gratuito']
    }
  },
  {
    slug: 'batchclick',
    heroImage: '/images/projects/batchclick.png',
    category: 'Windows',
    tags: ['Automação', 'Windows', 'Batch'],
    release: 'Pack atualizado',
    video: {
      embedUrl: 'https://www.youtube.com/embed/iN5C3KDIGH8',
      watchUrl: 'https://www.youtube.com/watch?v=iN5C3KDIGH8',
      title: 'BatchClick Pack'
    },
    file: {
      path: '/downloads/files/BatchClick_Booster.zip',
      name: 'BatchClick Pack.zip',
      size: '3,01 MB',
      analyticsId: 'BatchClick'
    },
    summary: {
      title: 'BatchClick Pack',
      shortDescription:
        'Coleção de scripts em batch que automatizam limpezas profundas, restauração de serviços e ajustes de desempenho.',
      description:
        'Ideal para computadores modestos que precisam de otimizações rápidas sem instalar softwares adicionais.'
    },
    highlights: [
      'Interface simples com execução guiada das rotinas.',
      'Scripts comentados e transparentes para auditoria.',
      'Inclui modo de restauração para desfazer alterações.'
    ],
    tutorial: {
      label: 'Assistir passo a passo',
      url: 'https://www.youtube.com/watch?v=iN5C3KDIGH8'
    },
    downloads: [
      {
        label: 'Download direto',
        url: '/downloads/files/BatchClick_Booster.zip',
        type: 'primary'
      },
      {
        label: 'Senha do pack',
        url: 'http://encurtadorbr.net/senhabatclick',
        type: 'password',
        external: true
      },
      {
        label: 'Servidor no Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'Termos de Serviço',
        url: '/legal/terms',
        type: 'info'
      }
    ],
    body: {
      heading: 'Como o BatchClick funciona',
      sections: [
        {
          title: 'Automação completa',
          paragraphs: [
            'Os scripts executam limpezas temporárias, redefinem serviços críticos, otimizam parâmetros de energia e ajustam prioridades do sistema.',
            'Cada etapa exibe o que está sendo feito em tempo real, fornecendo transparência total.'
          ]
        },
        {
          title: 'Uso recomendado',
          paragraphs: [
            'Execute o painel principal como administrador, siga a ordem sugerida e reinicie o computador ao final para consolidar as alterações.',
            'Utilize a opção de restauração sempre que desejar desfazer ajustes ou antes de instalar novas atualizações do Windows.'
          ]
        },
        {
          title: 'Distribuição gratuita',
          paragraphs: [
            'O BatchClick é totalmente gratuito e não pode ser comercializado. O suporte é oferecido através do servidor oficial no Discord.'
          ]
        }
      ]
    },
    seo: {
      title: 'BatchClick Pack - Automação em batch para Windows',
      description:
        'Faça o download do BatchClick Pack e aplique otimizações profundas no Windows com scripts em batch comentados e reversíveis.',
      keywords: ['BatchClick', 'otimização Windows', 'scripts em batch']
    }
  },
  {
    slug: 'autonetv1',
    heroImage: '/images/projects/autonet_logo.jpg',
    category: 'Rede',
    tags: ['Latência', 'Rede', 'Windows'],
    release: 'Versão 1.0',
    video: {
      embedUrl: 'https://www.youtube.com/embed/0J4nhSur9DI',
      watchUrl: 'https://www.youtube.com/watch?v=0J4nhSur9DI',
      title: 'Autonet em funcionamento'
    },
    file: {
      path: '/downloads/files/AUTONET.exe',
      name: 'Autonet.exe',
      size: '9,6 MB',
      analyticsId: 'Autonet'
    },
    summary: {
      title: 'Autonet',
      shortDescription:
        'Otimizador de rede avançado que ajusta MTU, RWIN, TTL e prioridades para reduzir latência e estabilizar conexões.',
      description:
        'Ideal para jogos competitivos e chamadas em tempo real, o Autonet centraliza ajustes críticos em uma interface amigável.'
    },
    highlights: [
      'Perfis de rede focados em jogos, streaming e navegação.',
      'Ajustes reversíveis e criação automática de ponto de restauração.',
      'Monitoramento de latência e throughput integrado.'
    ],
    tutorial: {
      label: 'Ver tutorial completo',
      url: 'https://www.youtube.com/watch?v=0J4nhSur9DI'
    },
    downloads: [
      {
        label: 'Download direto',
        url: '/downloads/files/AUTONET.exe',
        type: 'primary'
      },
      {
        label: 'Servidor no Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'Termos de Serviço',
        url: '/legal/terms',
        type: 'info'
      }
    ],
    body: {
      heading: 'Por dentro do Autonet',
      sections: [
        {
          title: 'Otimização completa de rede',
          paragraphs: [
            'O Autonet ajusta automaticamente parâmetros como MTU, MSS, RWIN e TTL para reduzir perdas de pacote e melhorar tempos de resposta.',
            'Também reorganiza prioridades de adaptadores e ativa políticas de QoS focadas em jogos e streaming.'
          ]
        },
        {
          title: 'Segurança e restauração',
          paragraphs: [
            'Todas as mudanças são documentadas e podem ser revertidas com um clique, garantindo segurança mesmo em ambientes corporativos.',
            'O aplicativo gera pontos de restauração e registra logs para auditoria.'
          ]
        },
        {
          title: 'Boas práticas',
          paragraphs: [
            'Execute como administrador, selecione o perfil desejado e reinicie o computador para validar os ajustes.',
            'Combine o Autonet com uma conexão cabeada sempre que possível para obter resultados consistentes.'
          ]
        }
      ]
    },
    seo: {
      title: 'Autonet - Otimizador de rede avançado',
      description:
        'Baixe o Autonet e ajuste automaticamente parâmetros de rede para reduzir latência, melhorar upload/download e garantir estabilidade.',
      keywords: ['Autonet', 'otimização de rede', 'latência', 'aMathyzin']
    }
  },
  {
    slug: 'haunted',
    heroImage: '/images/projects/thumb.png',
    category: 'Windows',
    tags: ['Batch', 'Otimização rápida'],
    release: 'Edição Haunted',
    video: {
      embedUrl: 'https://www.youtube.com/embed/ciHfcpppItg',
      watchUrl: 'https://www.youtube.com/watch?v=ciHfcpppItg',
      title: 'Haunted Optimizer'
    },
    file: {
      path: '/downloads/files/Haunted.bat',
      name: 'Haunted.bat',
      size: '53,6 KB',
      analyticsId: 'Haunted'
    },
    summary: {
      title: 'Haunted Optimizer',
      shortDescription:
        'Painel portátil criado por Miguelin para aplicar otimizações rápidas no Windows com foco em jogos.',
      description:
        'Ideal para quem busca uma solução leve, o Haunted executa limpezas e ajustes essenciais em poucos cliques.'
    },
    highlights: [
      'Script portátil em batch sem necessidade de instalação.',
      'Inclui rotinas de limpeza de cache, ajustes de energia e otimização de serviços.',
      'Distribuição gratuita com autoria reconhecida do grupo aMathyzin e @based_miguelin.'
    ],
    tutorial: {
      label: 'Veja como usar',
      url: 'https://www.youtube.com/watch?v=ciHfcpppItg'
    },
    downloads: [
      {
        label: 'Download direto',
        url: '/downloads/files/Haunted.bat',
        type: 'primary'
      },
      {
        label: 'Servidor no Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'Termos de Serviço',
        url: '/legal/terms',
        type: 'info'
      }
    ],
    body: {
      heading: 'Ferramentas presentes no Haunted',
      sections: [
        {
          title: 'Otimizações instantâneas',
          paragraphs: [
            'O script aplica limpezas temporárias, redefine configurações de energia e otimiza serviços com foco em jogos.',
            'Cada etapa é apresentada no terminal para que o usuário acompanhe todas as alterações.'
          ]
        },
        {
          title: 'Uso responsável',
          paragraphs: [
            'Execute como administrador e feche aplicações críticas antes de rodar o script para garantir que todos os processos possam ser ajustados.',
            'Como qualquer otimização, recomenda-se criar um ponto de restauração antes de aplicar mudanças extensas.'
          ]
        }
      ]
    },
    seo: {
      title: 'Haunted Optimizer - Script portátil de otimização',
      description:
        'Baixe o Haunted Optimizer e aplique ajustes rápidos no Windows com um script leve criado por Miguelin e distribuído pela aMathyzin.',
      keywords: ['Haunted', 'script de otimização', 'batch', 'Windows']
    }
  },
  {
    slug: 'robooster',
    heroImage: '/images/projects/RobloxPlus.png',
    category: 'Roblox',
    tags: ['Roblox', 'Bloxstrap'],
    release: 'Versão clássica',
    video: {
      embedUrl: 'https://www.youtube.com/embed/ylDMxtM9zTs',
      watchUrl: 'https://www.youtube.com/watch?v=ylDMxtM9zTs',
      title: 'RoBooster V1'
    },
    summary: {
      title: 'RoBooster V1',
      shortDescription:
        'Primeira geração do otimizador para Roblox com integração ao BloxStrap e foco em estabilidade.',
      description:
        'Continua disponível para usuários que preferem a versão clássica com ajustes menos agressivos e interface simplificada.'
    },
    highlights: [
      'Integração completa com o BloxStrap.',
      'Scripts revisados e transparentes.',
      'Ideal para hardware mais antigo ou configurações conservadoras.'
    ],
    tutorial: {
      label: 'Assistir tutorial',
      url: 'https://www.youtube.com/watch?v=ylDMxtM9zTs'
    },
    downloads: [
      {
        label: 'Download via Discord',
        url: 'https://amathyzin.com/discord',
        type: 'discord',
        external: true
      }
    ],
    supportLinks: [
      {
        label: 'Runtime .NET',
        url: 'https://dotnet.microsoft.com/en-us/download',
        type: 'info',
        external: true
      }
    ],
    body: {
      heading: 'Sobre o RoBooster V1',
      sections: [
        {
          title: 'Requisitos obrigatórios',
          paragraphs: [
            'Para funcionar corretamente é necessário ter o BloxStrap instalado e atualizado, além do pacote .NET.',
            'O download é distribuído pelo servidor oficial no Discord para garantir atualizações e suporte.'
          ]
        }
      ]
    },
    seo: {
      title: 'RoBooster V1 - Versão clássica do otimizador',
      description:
        'Acesse a versão clássica do RoBooster com ajustes para Roblox e suporte contínuo via comunidade oficial.',
      keywords: ['RoBooster', 'Roblox', 'otimização', 'aMathyzin']
    }
  },
  {
    slug: 'fpspack',
    heroImage: '/images/projects/thumb.png',
    category: 'Windows',
    tags: ['FPS', 'Pack', 'Windows'],
    release: 'FPSPack FirstBoost',
    video: {
      embedUrl: 'https://www.youtube.com/embed/VADHdVQGWB4',
      watchUrl: 'https://www.youtube.com/watch?v=VADHdVQGWB4',
      title: 'FPSPack FirstBoost'
    },
    summary: {
      title: 'FPSPack FirstBoost',
      shortDescription:
        'Pack completo com rotinas para elevar FPS em jogos e realizar limpezas profundas no Windows.',
      description:
        'Disponibilizado em versões completa e lite, com tutoriais detalhados e suporte no Discord.'
    },
    highlights: [
      'Versões Lite e Completa para diferentes perfis de hardware.',
      'Conteúdo constantemente atualizado com novos scripts.',
      'Inclui guia passo a passo em vídeo.'
    ],
    tutorial: {
      label: 'Assistir ao tutorial',
      url: 'https://www.youtube.com/watch?v=VADHdVQGWB4'
    },
    downloads: [
      {
        label: 'MediaFire',
        url: 'https://linkebr.com/FPS_Completo_Pack',
        type: 'primary',
        external: true
      },
      {
        label: 'Google Drive',
        url: 'https://linkebr.com/FPS_Completo_Pack_DRIVE',
        type: 'mirror',
        external: true
      },
      {
        label: 'Versão Lite',
        url: 'https://linkebr.com/FPS_LITE_Pack',
        type: 'mirror',
        external: true
      },
      {
        label: 'Senha do pack',
        url: 'https://fir3.net/SenhaFPSV3',
        type: 'password',
        external: true
      }
    ],
    body: {
      heading: 'Detalhes do FPSPack',
      sections: [
        {
          title: 'Conteúdo do pacote',
          paragraphs: [
            'O FPSPack reúne scripts, tweaks e utilitários que otimizam CPU, GPU, memória e rede para jogos competitivos.',
            'A versão Lite oferece apenas os ajustes essenciais, enquanto a versão completa inclui ferramentas adicionais e materiais extras.'
          ]
        }
      ]
    },
    seo: {
      title: 'FPSPack FirstBoost - Aumente o FPS',
      description:
        'Faça o download do FPSPack FirstBoost e aplique otimizações completas para elevar o FPS e reduzir quedas em jogos.',
      keywords: ['FPSPack', 'FirstBoost', 'aMathyzin', 'FPS']
    }
  },
  {
    slug: 'valorantbooster1',
    heroImage: '/images/projects/VB.png',
    category: 'Games',
    tags: ['Valorant', 'FPS', 'Windows'],
    release: 'Pré Alpha',
    video: {
      embedUrl: 'https://www.youtube.com/embed/7qV-fDkxeVc',
      watchUrl: 'https://www.youtube.com/watch?v=7qV-fDkxeVc',
      title: 'Valorant Booster'
    },
    file: {
      path: '/downloads/files/Valorant.bat',
      name: 'Valorant Booster Pré Alpha.bat',
      size: '12 KB',
      analyticsId: 'Valorant'
    },
    summary: {
      title: 'Valorant Booster',
      shortDescription:
        'Ferramenta que ajusta configurações do Windows para aumentar o FPS e estabilizar partidas no Valorant.',
      description:
        'Inclui otimizações de rede, gráficos e serviços com foco em reduzir travamentos e melhorar tempos de resposta.'
    },
    highlights: [
      'Perfil dedicado ao Valorant com ajustes seguros.',
      'Script reversível e auditável.',
      'Código aberto disponível para revisão comunitária.'
    ],
    tutorial: {
      label: 'Veja o guia completo',
      url: 'https://www.youtube.com/watch?v=7qV-fDkxeVc'
    },
    downloads: [
      {
        label: 'Download direto',
        url: '/downloads/files/Valorant.bat',
        type: 'primary'
      },
      {
        label: 'Repositório no GitHub',
        url: 'https://github.com/aMathyzin/Valorant-Booster-Alpha',
        type: 'source',
        external: true
      }
    ],
    body: {
      heading: 'Como o Valorant Booster ajuda',
      sections: [
        {
          title: 'Otimizações aplicadas',
          paragraphs: [
            'Realiza ajustes em processos do Windows, aplica políticas de energia e configurações gráficas voltadas para estabilidade.',
            'Inclui opções para restaurar todas as alterações sempre que necessário.'
          ]
        }
      ]
    },
    seo: {
      title: 'Valorant Booster - Otimize o FPS do Valorant',
      description:
        'Baixe o Valorant Booster e aplique otimizações específicas para melhorar o FPS e reduzir a latência em partidas competitivas.',
      keywords: ['Valorant Booster', 'FPS', 'aMathyzin']
    }
  }
];
