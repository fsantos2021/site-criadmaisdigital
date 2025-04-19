const produtos = {
  canecaBranca: {
    titulo: "Caneca de Cerâmica Branca 325ml",
    descricao: "Material: Cerâmica<br>Capacidade: 325ml<br>Dimensões: 9,5 cm × 8,2 cm<br>Peso: 380g<br>Recomendações: Uso cotidiano. Pode ir ao micro-ondas. Não usar lava-louças.",
    preco: "R$ 25,00",
    parcelamento: "ou 3x de R$ 8,33 sem juros",
    codigo: "COD-CAN001",
    imagem: "img/caneca-ceramica-branca-325.jpeg",
    miniaturas: [
      "img/caneca-flork.1.jpeg",
      "img/caneca-flork.2.jpeg"
    ],
    variacoes: [
      {
        imagem: "img/caneca-ceramica-branca-325.jpeg",
        nome: "Estampa Floral",
        preco: "R$ 27,90"
      },
      {
        imagem: "img/caneca-ceramica-branca-325.jpeg",
        nome: "Estampa Nome Personalizado",
        preco: "R$ 29,90"
      }
    ]
  },
  canecaColorida: {
    titulo: "Caneca Alça e Interior Colorido 325ml",
    descricao: "Material: Cerâmica<br>Capacidade: 325ml<br>Dimensões: 9,5 cm × 8,2 cm<br>Peso: 380g<br>Recomendações: Uso cotidiano. Pode ir ao micro-ondas. Não usar lava-louças.",
    preco: "R$ 28,00",
    parcelamento: "ou 2x de R$ 14,00 sem juros",
    codigo: "COD-CAN002",
    imagem: "img/caneca-alca-colorida-todas-325.jpeg",
    miniaturas: [
      "img/caneca-alca-colorida-todas-325.jpeg"
    ],
    variacoes: []
  },
  canecaPreta: {
    titulo: "Caneca Preta com Tarja Branca 325ml",
    descricao: "Material: Cerâmica<br>Capacidade: 325ml<br>Dimensões: 9,5 cm × 8 cm<br>Peso: 350g<br>Recomendações: Ideal para sublimação. Pode ir ao micro-ondas.",
    preco: "R$ 29,90",
    parcelamento: "ou 3x de R$ 9,97 sem juros",
    codigo: "COD-CAN003",
    imagem: "img/caneca-preta-tarja-325.jpeg",
    miniaturas: ["img/caneca-preta-tarja-325.jpeg"],
    variacoes: []
  },
  vidroJateado: {
    titulo: "Caneca de Vidro Jateado 325ml",
    descricao: "Material: Vidro fosco<br>Capacidade: 325ml<br>Recomendações: Bebidas frias. Não usar micro-ondas.",
    preco: "R$ 32,00",
    parcelamento: "ou 3x de R$ 10,66 sem juros",
    codigo: "COD-CAN004",
    imagem: "img/caneca-jateada-vidro-325.jpeg",
    miniaturas: ["img/caneca-jateada-vidro-325.jpeg"],
    variacoes: []
  },
  chopp: {
    titulo: "Caneca de Vidro Chopp Jateada 475ml",
    descricao: "Material: Vidro resistente<br>Capacidade: 475ml<br>Recomendações: Bebidas frias. Não usar micro-ondas.",
    preco: "R$ 36,00",
    parcelamento: "ou 3x de R$ 12,00 sem juros",
    codigo: "COD-CAN005",
    imagem: "img/caneca-chopp-vidro-475.jpg",
    miniaturas: ["img/caneca-chopp-vidro-475.jpg"],
    variacoes: []
  },
  polimero: {
    titulo: "Caneca de Polímero 325ml",
    descricao: "Material: Plástico (Polímero)<br>Capacidade: 325ml<br>Ideal para crianças. Não vai ao micro-ondas.",
    preco: "R$ 22,00",
    parcelamento: "ou 2x de R$ 11,00 sem juros",
    codigo: "COD-CAN006",
    imagem: "img/caneca-polimero-325.jpeg",
    miniaturas: ["img/caneca-polimero-325.jpeg"],
    variacoes: []
  },
  xicaras: {
    titulo: "Kit Xícaras 150ml + Suporte",
    descricao: "4 xícaras de 150ml + Suporte metálico<br>Material: Cerâmica<br>Recomendações: Pode ir ao micro-ondas.",
    preco: "R$ 49,90",
    parcelamento: "ou 3x de R$ 16,63 sem juros",
    codigo: "COD-XIC001",
    imagem: "img/torre-xicara-4-150.jpeg",
    miniaturas: ["img/torre-xicara-4-150.jpeg"],
    variacoes: []
  },
  squeezeBranca750: {
    titulo: "Squeeze Alumínio Branca 750ml",
    descricao: "Material: Alumínio<br>Capacidade: 750ml<br>Recomendações: Não usar micro-ondas.",
    preco: "R$ 34,90",
    parcelamento: "ou 2x de R$ 17,45 sem juros",
    codigo: "COD-SQU001",
    imagem: "img/squeeze-aluminio-branco-750.jpeg",
    miniaturas: ["img/squeeze-aluminio-branco-750.jpeg"],
    variacoes: []
  },
  squeezePrata750: {
    titulo: "Squeeze Alumínio Prata 750ml",
    descricao: "Material: Alumínio<br>Capacidade: 750ml<br>Recomendações: Não usar micro-ondas.",
    preco: "R$ 34,90",
    parcelamento: "ou 2x de R$ 17,45 sem juros",
    codigo: "COD-SQU002",
    imagem: "img/squeeze-aluminio-prata-750.jpeg",
    miniaturas: ["img/squeeze-aluminio-prata-750.jpeg"],
    variacoes: []
  },
  squeezeBranca600: {
    titulo: "Squeeze Branca Bico Bola 600ml",
    descricao: "Material: Alumínio<br>Capacidade: 600ml<br>Ideal para uso infantil ou escolar.",
    preco: "R$ 29,90",
    parcelamento: "ou 2x de R$ 14,95 sem juros",
    codigo: "COD-SQU003",
    imagem: "img/squeeze-bico-bola-aluminio-branco-600.jpeg",
    miniaturas: ["img/squeeze-bico-bola-aluminio-branco-600.jpeg"],
    variacoes: []
  },
  squeezePrata600: {
    titulo: "Squeeze Prata Bico Bola 600ml",
    descricao: "Material: Alumínio<br>Capacidade: 600ml<br>Ideal para uso escolar ou esportivo.",
    preco: "R$ 29,90",
    parcelamento: "ou 2x de R$ 14,95 sem juros",
    codigo: "COD-SQU004",
    imagem: "img/squeeze-bico-bola-aluminio-prata-600.jpeg",
    miniaturas: ["img/squeeze-bico-bola-aluminio-prata-600.jpeg"],
    variacoes: []
  }
};

function mostrarProduto(id) {
  const produto = produtos[id];
  document.getElementById('imgPrincipal').src = produto.imagem;
  document.getElementById('infoProduto').innerHTML = `
    <h2>${produto.titulo}</h2>
    <p>${produto.descricao}</p>
    <div class="preco">${produto.preco}</div>
    <div class="parcelamento">${produto.parcelamento}</div>
    <div class="codigo">Código do produto: ${produto.codigo}</div>
    <a href="https://wa.me/5521982406464?text=Olá! Tenho interesse em ${produto.titulo}" class="whatsapp-btn" target="_blank">
      <i class="bi bi-whatsapp"></i> Conversar no WhatsApp
    </a>
  `;

  const miniaturas = produto.miniaturas.map(mini => `
    <img src="${mini}" onclick="alterarImagem('${mini}')" alt="Miniatura">
  `).join('');

  document.getElementById('miniaturas').innerHTML = miniaturas;

  if (produto.variacoes && produto.variacoes.length > 0) {
    const variacoesHTML = produto.variacoes.map(v => `
      <div class="card">
        <img src="${v.imagem}" alt="${v.nome}">
        <div class="info">
          <h6>${v.nome}</h6>
          <p>${v.preco}</p>
        </div>
      </div>
    `).join('');
    document.getElementById('variacoes').innerHTML = `
      <h4>Outras estampas</h4>
      ${variacoesHTML}
    `;
  } else {
    document.getElementById('variacoes').innerHTML = '';
  }
}

function alterarImagem(src) {
  document.getElementById('imgPrincipal').src = src;
}

// Preenche automaticamente o menu lateral
const lista = document.getElementById("listaProdutos");
Object.keys(produtos).forEach(id => {
  const li = document.createElement("li");
  li.innerHTML = `<a onclick="mostrarProduto('${id}')">${produtos[id].titulo}</a>`;
  lista.appendChild(li);
});

// Mostra o primeiro produto automaticamente ao carregar
window.onload = () => {
  mostrarProduto("canecaBranca");
};
