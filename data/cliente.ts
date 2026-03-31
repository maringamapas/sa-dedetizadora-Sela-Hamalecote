// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#0066cc", // Azul profissional
    secondaryColor: "#1a1a1a", // Preto
    accentColor: "#004fa3", // Azul escuro
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5548988632453",
    whatsappLink: "https://wa.me/5548988632453?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "R. Domingos de Vila, 79 - Imigrantes - Criciúma - SC, 88813-730",
    telefone: "(48) 98863-2453",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Desentupidora Patrício Criciúma: Rápido e Sem Quebra",
    subtitulo: "Atendimento especializado 24h para residências e empresas. Resolvemos seu problema sem sujeira e sem uso de produtos químicos agressivos.",
    sobreNos:
      "Somos a Desentupidora Patrício, especialistas em desentupimento com atendimento 24 horas em Criciúma. Utilizamos equipamentos rotativos e tecnologia de vácuo para resolver entupimentos sem necessidade de quebrar pisos ou paredes. Nossa equipe é experiente e oferece soluções rápidas e confiáveis para residências e empresas, com garantia de trabalho limpo e profissional.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Desentupimento de Vaso Sanitário",
      descricao: "Solução imediata sem danos à louça",
      icone: "🚽",
    },
    {
      id: 2,
      titulo: "Desentupimento de Pias e Ralos",
      descricao: "Desobstrução completa de encanamentos",
      icone: "🚰",
    },
    {
      id: 3,
      titulo: "Limpeza de Caixa de Gordura",
      descricao: "Manutenção técnica e preventiva para comércios e casas",
      icone: "🏗️",
    },
    {
      id: 4,
      titulo: "Tecnologia Sem Quebra",
      descricao: "Equipamentos rotativos e vácuo, sem quebrar pisos ou paredes",
      icone: "🛠️",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento 24h",
      descricao: "Disponível todos os dias da semana",
    },
    {
      titulo: "Trabalho Limpo",
      descricao: "Sem sujeira e sem produtos químicos agressivos",
    },
    {
      titulo: "Tecnologia Avançada",
      descricao: "Equipamentos rotativos e vácuo profissional",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Desentupidora Patrício Criciúma | Atendimento 24h | (48) 98863-2453",
    description:
      "Desentupidora Patrício em Criciúma - Atendimento 24h especializado em desentupimento sem quebra. Pias, ralos, vasos sanitários e limpeza de caixa de gordura.",
    url: "https://desentupidora-patricio.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
