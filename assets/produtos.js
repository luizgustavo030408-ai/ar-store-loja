/* =====================================================================
   AR STORE — CATÁLOGO DE PRODUTOS
   Edite aqui: nomes, preços, cores, tamanhos e fotos.
   (Na próxima etapa, estes dados passam a vir do Supabase / painel admin.)
   ===================================================================== */

window.LOJA = {
  nome: "AR Store Menswear",
  cidade: "Boa Vista — RR",
  horario: "Seg a Sáb · 9h às 19h · sem intervalo",
  envio: "Enviamos para todo o Brasil",
  instagram: "arstoremenswearrr",
  tiktok: "andrereinaldo20",
  endereco: "AR Store Menswear, Boa Vista - RR", // troque pelo endereço completo
  consultores: [
    { nome: "Paulinho", whatsapp: "5595991351209", telefone: "(95) 99135-1209", foto: "consultor-paulinho.webp" },
    { nome: "Danilo",   whatsapp: "5595991146155", telefone: "(95) 99114-6155", foto: "consultor-danilo.webp" }
  ]
};

window.CATEGORIAS = ["Camisas", "Polos", "Regatas", "Bermudas", "Conjuntos", "Kits"];

window.PRODUTOS = [
  {
    id: "camisa-trico-listrada",
    nome: "Camisa Tricô Listrada",
    marca: "",
    categoria: "Camisas",
    preco: 259.90,
    selo: "Novo",
    descricao: "Camisa em tricô texturizado com listras finas e gola resort. Leve, respirável e com caimento solto — o encontro entre o casual e o sofisticado para os dias quentes.",
    cores: [
      { nome: "Caramelo", hex: "#b39478", fotos: ["listrada-caramelo.webp"] },
      { nome: "Oliva",    hex: "#7d8452", fotos: ["listrada-oliva.webp", "listrada-oliva-detalhe.webp"] },
      { nome: "Marinho",  hex: "#2c3552", fotos: ["listrada-marinho.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "camisa-linho-manga-longa",
    nome: "Camisa Linho Manga Longa",
    marca: "Sealive",
    categoria: "Camisas",
    preco: 349.90,
    selo: "Verão",
    descricao: "O básico atemporal que combina com tudo. Camisa em linho, colarinho estruturado e punhos com botão — do dia ao jantar sem esforço.",
    cores: [
      { nome: "Areia",    hex: "#b7977a", fotos: ["linho-ml-areia.webp"] },
      { nome: "Azul Céu", hex: "#a9c8e8", fotos: ["linho-ml-azul.webp"] },
      { nome: "Branco",   hex: "#f3f1ea", fotos: ["linho-ml-branco.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "conjunto-linho-resort",
    nome: "Conjunto Linho Resort",
    marca: "",
    categoria: "Conjuntos",
    preco: 449.90,
    selo: "",
    descricao: "Camisa manga curta e bermuda em linho, pensados para serem usados juntos ou separados. Elegância descontraída para o verão.",
    cores: [
      { nome: "Cru",   hex: "#e8dfc8", fotos: ["conjunto-cru.webp"] },
      { nome: "Verde", hex: "#6f7d55", fotos: ["conjunto-verde.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"],
    modelos: ["Conjunto completo", "Somente camisa", "Somente bermuda"]
  },
  {
    id: "bermuda-taiba",
    nome: "Bermuda Taíba",
    marca: "Sealive",
    categoria: "Bermudas",
    preco: 239.90,
    selo: "",
    descricao: "O verão elegante em uma bermuda. Faixa lateral contrastante, cós com passantes e bolso traseiro embutido com botão.",
    cores: [
      { nome: "Preto", hex: "#1c1c1c", fotos: ["taiba-preto.webp"] },
      { nome: "Areia", hex: "#d4cbbd", fotos: ["taiba-areia.webp"] }
    ],
    tamanhos: ["38", "40", "42", "44", "46"]
  },
  {
    id: "regata-aspen",
    nome: "Regata Aspen",
    marca: "",
    categoria: "Regatas",
    preco: 149.90,
    selo: "",
    descricao: "Aquele verão em grande estilo. Regata em malha com textura sutil e cava ampla, para um visual limpo e confortável.",
    cores: [
      { nome: "Off-white", hex: "#ecebe4", fotos: ["regata-offwhite.webp"] },
      { nome: "Areia",     hex: "#d9c28e", fotos: ["regata-areia.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "bermuda-linho-alfaiataria",
    nome: "Bermuda Linho Alfaiataria",
    marca: "",
    categoria: "Bermudas",
    preco: 229.90,
    selo: "",
    descricao: "Bermuda de alfaiataria em linho com cós estruturado, passantes e fechamento por botão. Refinada na medida certa.",
    cores: [
      { nome: "Cru", hex: "#e9e3d3", fotos: ["bermuda-linho.webp", "bermuda-linho-look.webp"] }
    ],
    tamanhos: ["38", "40", "42", "44", "46"]
  },
  {
    id: "polo-piquet",
    nome: "Polo Piquet Texturizada",
    marca: "",
    categoria: "Polos",
    preco: 219.90,
    selo: "",
    descricao: "Polo em piquet texturizado com acabamento canelado na gola e nas mangas. Clássica, leve e versátil.",
    cores: [
      { nome: "Bege", hex: "#d8c8b0", fotos: ["polo-bege.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"]
  },
  {
    id: "camisa-social-slim",
    nome: "Camisa Social Slim",
    marca: "",
    categoria: "Camisas",
    preco: 279.90,
    selo: "",
    descricao: "Camisa social de modelagem ajustada e caimento limpo. Da reunião ao happy hour com a mesma presença.",
    cores: [
      { nome: "Branco",  hex: "#f4f4f2", fotos: ["social-branco.webp"] },
      { nome: "Preto",   hex: "#141414", fotos: ["social-preto.webp"] },
      { nome: "Marinho", hex: "#1f2a4d", fotos: ["social-marinho.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"],
    modelos: ["Slim", "Regular"]
  },
  {
    id: "kit-3-camisetas-eag",
    nome: "Kit 3 Camisetas EAG",
    marca: "EAG",
    categoria: "Kits",
    preco: 189.99,
    selo: "Leve 3",
    descricao: "Três camisetas EAG com o símbolo da marca no peito. Um presente pronto — ou o seu básico renovado. Leve 3 unidades por R$ 189,99.",
    cores: [
      { nome: "Areia · Gelo · Azul", hex: "linear-gradient(135deg,#e7cfa9 0 33%,#e9ecef 33% 66%,#2f5a8a 66%)", fotos: ["kit-eag.webp"] }
    ],
    tamanhos: ["P", "M", "G", "GG"]
  }
];
