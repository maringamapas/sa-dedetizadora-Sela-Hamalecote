// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema - Identidade Visual Premium
  cores: {
    primaryColor: "#DAA520", // Goldenrod/Bronze
    secondaryColor: "#080D21", // Midnight Navy Blue
    accentColor: "#10b981", // Verde para checkmarks e ícones
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5511958270892",
    whatsappLink: "https://wa.me/5511958270892?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com/dedetizadora.sh", // Instagram oficial
    email: "",
    endereco: "R. Bento Luiz, 150 - Parque Boturussu, São Paulo - SP, 03805-050",
    telefone: "(11) 95827-0892",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Selá Hamalecote Dedetizadora controle de Pragas em São Paulo",
    subtitulo: "Proteção Completa Contra Pragas! 🛡️🪳\nDedetização, desratização, descupinização e controle de pragas urbanas. Atendimento profissional, técnicas especializadas e segurança garantida. Protegemos sua casa ou empresa com soluções eficazes!",
    sobreNos:
      "Somos a Selá Hamalecote Dedetizadora, especialistas em controle de pragas com atendimento profissional na Zona Leste de São Paulo. Utilizamos técnicas especializadas e produtos de qualidade para resolver problemas com baratas, formigas, roedores, cupins e outras pragas. Nossa equipe experiente oferece soluções rápidas e confiáveis para residências, comércios e condomínios, com garantia de trabalho seguro e eficaz.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Dedetização",
      descricao: "Controle especializado de baratas, formigas e pragas rasteiras",
      icone: "🪳",
    },
    {
      id: 2,
      titulo: "Desratização",
      descricao: "Controle preventivo e corretivo de roedores com monitoramento",
      icone: "🐀",
    },
    {
      id: 3,
      titulo: "Descupinização",
      descricao: "Tratamento técnico contra cupins de solo e madeira seca",
      icone: "🪵",
    },
    {
      id: 4,
      titulo: "Controle de Pragas Urbanas",
      descricao: "Gestão integrada para condomínios e empresas",
      icone: "🛡️",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Atendimento Profissional",
      descricao: "Equipe qualificada e experiente",
    },
    {
      titulo: "Técnicas Especializadas",
      descricao: "Soluções eficazes e seguras para todos os tipos de pragas",
    },
    {
      titulo: "Zona Leste de São Paulo",
      descricao: "Serviços em toda a região metropolitana",
    },
  ],

  // Testemunhos de clientes
  depoimentos: [
    {
      id: 1,
      nome: "Claudio M.",
      profissao: "Residencial",
      imagem: "/cliente-claudio.jpg",
      texto: "Excelente atendimento aqui no Parque Boturussu. Estávamos com problema de baratas e a Selá Hamalecote resolveu de primeira. Muito limpos e educados.",
    },
    {
      id: 2,
      nome: "Juliana F.",
      profissao: "Comercial",
      imagem: "/cliente-juliana.jpg",
      texto: "Contratamos para a nossa loja. Precisávamos do certificado sanitário e de um controle rígido. Equipe nota 10, super pontuais.",
    },
    {
      id: 3,
      nome: "Roberto S.",
      profissao: "Descupinização",
      imagem: "/cliente-roberto.jpg",
      texto: "Fizeram um trabalho técnico de descupinização no meu telhado. Explicaram todo o processo e o preço foi muito justo pela qualidade.",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Selá Hamalecote Dedetizadora | Controle de Pragas São Paulo | (11) 95827-0892",
    description:
      "Selá Hamalecote - Dedetizadora em São Paulo. Controle especializado de baratas, formigas, roedores e cupins. Atendimento profissional na Zona Leste e região metropolitana.",
    url: "https://sela-hamalecote.vercel.app",
    ogImage: "/og-image.jpg",
  },
}
