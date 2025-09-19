import { AboutContent, HomeContent, LegalContent } from '../types';

export const homeContentPt: HomeContent = {
  navigation: [
    { label: 'Início', href: '/' },
    { label: 'Projetos', href: '/#projects' },
    { label: 'Sobre', href: '/info/about' },
    { label: 'Vídeos', href: '/#videos' },
    { label: 'Comunidade', href: '/#community' },
    { label: 'Downloads', href: '/downloads' }
  ],
  hero: {
    eyebrow: 'Otimização de alto desempenho',
    title: 'aMathyzin',
    subtitle:
      'Otimizações avançadas e ferramentas gratuitas para extrair o máximo do seu computador em jogos e produtividade.',
    primaryCta: { label: 'Explorar downloads', href: '/downloads' },
    secondaryCta: { label: 'Assista ao tutorial mais recente', href: 'https://www.youtube.com/watch?v=RzapmonmPp4' },
    stats: [
      { value: '4+', label: 'Anos de experiência em performance' },
      { value: '70k+', label: 'Downloads de otimizações' },
      { value: '3k+', label: 'Membros em nossa comunidade' }
    ]
  },
  featuredProjectsHeading: 'Projetos em destaque',
  featuredProjectsDescription:
    'Ferramentas criadas para extrair desempenho máximo, reduzir latências e simplificar rotinas de manutenção.',
  featuredProjects: [
    {
      slug: 'robooster2',
      title: 'RoBooster 2',
      description:
        'Otimizador integrado ao Bloxstrap que aplica ajustes inteligentes para Roblox com foco em FPS estável e consistência de rede.',
      videoEmbed: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
      ctaLabel: 'Abrir projeto'
    },
    {
      slug: '3kpack',
      title: 'aMathyzin 3k Pack',
      description:
        'Pack comemorativo com scripts exclusivos, automações e curvas de desempenho criadas para os 3.000 inscritos do canal.',
      videoEmbed: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
      ctaLabel: 'Detalhes do pack'
    },
    {
      slug: 'batchclick',
      title: 'BatchClick Pack',
      description:
        'Coleção de rotinas em batch que automatizam limpezas profundas, ajustes de registro e configurações essenciais do Windows.',
      videoEmbed: 'https://www.youtube.com/embed/iN5C3KDIGH8',
      ctaLabel: 'Conhecer automações'
    }
  ],
  about: {
    heading: 'Sobre a aMathyzin',
    paragraphs: [
      'aMathyzin é um entusiasta de otimização com mais de 4 anos de experiência criando soluções gratuitas para maximizar o desempenho de PCs.',
      'No GitHub disponibilizamos projetos como o “aMathyzin 3K Pack” e ferramentas proprietárias de automação para Windows.',
      'Também desenvolvemos o “RoBooster”, otimizador que atua junto ao Bloxstrap com foco em jogadores de Roblox.',
      'Nossa comunidade mantém um servidor ativo no Discord com suporte, sorteios e conteúdos exclusivos.',
      'No YouTube você encontra vídeos como “OTIMIZE SEU PC COM 1 COMANDO EM 1 MINUTO”, mostrando melhorias rápidas e seguras.'
    ],
    cta: { label: 'Comunidade oficial', href: '/discord' }
  },
  innovations: {
    heading: 'Projetos e inovações',
    description:
      'Unimos design, engenharia e suporte para entregar soluções únicas de performance com código aberto e monitoramento contínuo.',
    cards: [
      {
        title: 'Interface futurista',
        excerpt: 'Experiências visuais imersivas com microinterações e dashboards que respondem ao comportamento do usuário.',
        details:
          'Descubra como nossas interfaces combinam estética moderna e telemetria em tempo real para garantir controle total sobre ajustes e otimizações.'
      },
      {
        title: 'Otimização inteligente',
        excerpt: 'Algoritmos que monitoram recursos do PC e aplicam ajustes seguros em tempo real para desempenho máximo.',
        details:
          'Ajustes dinâmicos garantem FPS consistente e estabilidade térmica, preservando segurança e restauração automática de pontos críticos.'
      },
      {
        title: 'Ferramentas exclusivas',
        excerpt: 'Aplicativos proprietários, scripts auditáveis e painéis modulares para rotinas de manutenção sem complicação.',
        details:
          'Cada ferramenta passa por auditoria contínua, possui documentação completa e oferece opções portáveis ou instaláveis.'
      }
    ],
    githubCta: { label: 'Acesse o GitHub', href: 'https://github.com/amathyzin' }
  },
  videos: {
    heading: 'Vídeos recentes',
    items: [
      {
        title: 'Otimização pro Roblox - RoBooster',
        description: 'Integração completa com o Bloxstrap para performance estável no Roblox.',
        embedUrl: 'https://www.youtube.com/embed/ylDMxtM9zTs',
        watchUrl: 'https://www.youtube.com/watch?v=ylDMxtM9zTs'
      },
      {
        title: 'aMathyBoost',
        description: 'Otimizador avançado criado por Memphis com foco em diversos perfis de hardware.',
        embedUrl: 'https://www.youtube.com/embed/RzapmonmPp4',
        watchUrl: 'https://www.youtube.com/watch?v=RzapmonmPp4'
      },
      {
        title: 'Terminal Optimizer 1.0',
        description: 'Ferramenta de linha de comando criada por Seven para ajustes imediatos.',
        embedUrl: 'https://www.youtube.com/embed/ciHfcpppItg',
        watchUrl: 'https://www.youtube.com/watch?v=ciHfcpppItg'
      },
      {
        title: 'BatchClick Pack',
        description: 'Pack diferenciado com automações em arquivos batch para PCs modestos.',
        embedUrl: 'https://www.youtube.com/embed/iN5C3KDIGH8',
        watchUrl: 'https://www.youtube.com/watch?v=iN5C3KDIGH8'
      },
      {
        title: 'Terminal Optimizer 1.0',
        description: 'Guia completo ensinando a usar o Terminal Optimizer.',
        embedUrl: 'https://www.youtube.com/embed/E26PVIiKWbQ',
        watchUrl: 'https://www.youtube.com/watch?v=E26PVIiKWbQ'
      },
      {
        title: 'Correção de Erros do Valorant',
        description: 'Passo a passo dinâmico para solucionar erros do Valorant.',
        embedUrl: 'https://www.youtube.com/embed/7qV-fDkxeVc',
        watchUrl: 'https://www.youtube.com/watch?v=7qV-fDkxeVc'
      },
      {
        title: 'aMathyzin 3k Pack',
        description: 'O pack mais completo do canal, criado para celebrar 3.000 inscritos.',
        embedUrl: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
        watchUrl: 'https://www.youtube.com/watch?v=Pxcaxgx_j-0'
      },
      {
        title: 'Como funcionam as otimizações',
        description: 'Explicação detalhada sobre a lógica por trás de cada otimização.',
        embedUrl: 'https://www.youtube.com/embed/ceBDhpBqe08',
        watchUrl: 'https://www.youtube.com/watch?v=ceBDhpBqe08'
      },
      {
        title: 'Otimizar o PC em 1 minuto',
        description: 'Um comando direto e seguro para acelerar o Windows.',
        embedUrl: 'https://www.youtube.com/embed/YG5O3CB3nWk',
        watchUrl: 'https://www.youtube.com/watch?v=YG5O3CB3nWk'
      }
    ]
  },
  channel: {
    title: 'Acompanhe o canal no YouTube',
    description:
      'Tutoriais, lançamentos exclusivos e comparativos de desempenho atualizados semanalmente.',
    subscribeCta: { label: 'Inscreva-se agora', href: '/youtube' },
    image: '/images/screens/canal.PNG',
    social: [
      { label: 'YouTube', href: 'https://www.youtube.com/@aMathyzin' },
      { label: 'Instagram', href: 'https://www.instagram.com/amathyzin' },
      { label: 'Twitter', href: 'https://twitter.com/amathyzin' }
    ]
  },
  community: {
    title: 'Participe da nossa comunidade',
    description:
      'Acesse suporte personalizado, sorteios e sessões de monitoramento em tempo real dentro do servidor oficial no Discord.',
    cta: { label: 'Entrar no Discord', href: 'https://amathyzin.com/discord' },
    widgetUrl: 'https://discord.com/widget?id=1210446694953779260&theme=dark'
  }
};

export const aboutContentPt: AboutContent = {
  hero: {
    title: 'Sobre a aMathyzin',
    subtitle: 'Conheça nossa história, missão e paixão por otimizações que entregam desempenho real.'
  },
  story: [
    'Olá! Eu sou o aMathyzin – um entusiasta em otimizações de PC com mais de 4 anos de experiência. Minha paixão pela tecnologia me levou a dominar JavaScript, Python, C++ e C#, além de web design, edição de vídeo, design gráfico e desenvolvimento de apps e jogos.',
    'A aMathyzin evoluiu para um projeto colaborativo: unimos especialistas para criar os melhores apps de otimização de computadores com foco em satisfação, desempenho superior e segurança – a maioria dos projetos conta com 0 detecções e código aberto no GitHub oficial.',
    'Nosso ecossistema reúne automações inteligentes, dashboards com visual futurista e guias educativos publicados semanalmente no YouTube. Cada entrega é testada com a comunidade e acompanha documentação clara para que qualquer pessoa aplique as melhorias com confiança.',
    'Seguimos ampliando os projetos com integrações para Roblox, pacotes comemorativos para Windows, otimizações móveis e ferramentas criadas sob demanda dentro do servidor oficial no Discord.'
  ],
  mission: 'Proporcionar acesso máximo ao desempenho do computador com soluções inovadoras, seguras e gratuitas.',
  teamIntro: 'Nossa equipe atual',
  team: [
    { name: 'aMathyzin', role: 'Fundador e desenvolvedor', avatar: '/images/team/amathyzin.jpg', email: 'contato@amathyzin.com' },
    { name: 'Musashi', role: 'Sócio, diretor e instrutor', avatar: '/images/team/musashi.png', email: 'musashi@amathyzin.com' },
    { name: 'Memphis', role: 'Desenvolvedor e idealizador de projetos', avatar: '/images/team/memphis.jpg', email: 'memphisdev@amathyzin.com' },
    { name: 'Vicente', role: 'Desenvolvedor', avatar: '/images/team/vicente.jpg', email: 'zfoxtech974@proton.me' },
    { name: 'Unknow', role: 'Investidor', avatar: '/images/team/unknow.jpg', disabled: true }
  ],
  community: {
    description: 'Participe do nosso servidor no Discord para receber suporte, acompanhar lançamentos, participar de sorteios e contribuir com feedbacks.',
    cta: { label: 'Entrar no Discord', href: 'https://amathyzin.com/discord' }
  }
};

export const legalPt: LegalContent = {
  terms: {
    updatedAt: '30/09/2024',
    version: '1.2.0',
    sections: [
      {
        title: 'Aceite dos termos',
        body: 'Ao acessar e utilizar o site aMathyzin você concorda integralmente com estes Termos de Serviço e eventuais atualizações.'
      },
      {
        title: 'Alterações',
        body: 'Podemos atualizar estas condições a qualquer momento, sem aviso prévio. O uso contínuo do site significa que você aceita as mudanças.'
      },
      {
        title: 'Uso permitido',
        body: 'É obrigatório utilizar o site de forma ética e legal, sem finalidades fraudulentas, maliciosas ou que possam prejudicar terceiros.'
      },
      {
        title: 'Propriedade intelectual',
        body: 'Todos os textos, imagens, logotipos e gráficos do aMathyzin são protegidos por direitos autorais. Uso não autorizado é proibido.'
      },
      {
        title: 'Isenção de responsabilidade',
        body: 'O site é fornecido “no estado em que se encontra”, sem garantias de qualquer tipo. Não nos responsabilizamos por danos decorrentes do uso ou incapacidade de uso do site.'
      },
      {
        title: 'Links externos',
        body: 'Podemos exibir links para sites de terceiros. Não somos responsáveis pelo conteúdo desses sites e o acesso é por conta do usuário.'
      },
      {
        title: 'Privacidade',
        body: 'Nossa Política de Privacidade explica como coletamos, armazenamos e protegemos seus dados pessoais.'
      },
      {
        title: 'Segurança da informação',
        body: 'Adotamos medidas técnicas e administrativas para proteger os dados armazenados, mas não garantimos inviolabilidade absoluta.'
      },
      {
        title: 'Legislação aplicável',
        body: 'Controvérsias serão regidas pelas leis brasileiras. Recomendamos mediação e, em último caso, o foro da comarca do usuário.'
      },
      {
        title: 'Contato',
        body: 'Em caso de dúvidas, envie uma mensagem para contato@amathyzin.com.'
      }
    ]
  },
  privacy: {
    updatedAt: '04/02/2025',
    sections: [
      {
        title: 'Introdução',
        body:
          'Esta política explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossos serviços.'
      },
      {
        title: 'Coleta de informações',
        list: [
          'Dados fornecidos pelo usuário como nome e e-mail para suporte ou contato.',
          'Dados de navegação como endereço IP, páginas acessadas e tempo de permanência.',
          'Cookies e tecnologias similares para lembrar preferências e analisar uso do site.'
        ]
      },
      {
        title: 'Uso das informações',
        list: [
          'Fornecer, manter e aprimorar nossos serviços.',
          'Personalizar a experiência do usuário e enviar comunicações importantes.',
          'Responder a solicitações de suporte e analisar desempenho do site.'
        ]
      },
      {
        title: 'Cookies',
        body:
          'Utilizamos cookies para lembrar preferências, coletar dados analíticos e personalizar conteúdos. Você pode desativá-los no navegador, mas isso pode limitar funcionalidades.'
      },
      {
        title: 'Compartilhamento de informações',
        body:
          'Não vendemos nem compartilhamos seus dados com terceiros sem consentimento, exceto para cumprir obrigações legais ou proteger nossos direitos.'
      },
      {
        title: 'Segurança',
        body:
          'Aplicamos medidas de segurança para impedir acessos não autorizados, alteração ou destruição de informações.'
      },
      {
        title: 'Seus direitos',
        list: [
          'Acessar e corrigir suas informações pessoais.',
          'Solicitar exclusão de dados.',
          'Opor-se ao processamento e pedir portabilidade.'
        ],
        body:
          'Para exercer seus direitos, entre em contato pelo e-mail contato@amathyzin.com.'
      },
      {
        title: 'Alterações',
        body:
          'Podemos atualizar esta política periodicamente. Recomendamos revisar esta página regularmente.'
      }
    ]
  }
};

export { downloadProjectsPt } from '../projects-pt';
