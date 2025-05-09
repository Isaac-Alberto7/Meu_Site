// Seleciona o ícone de configurações e o menu de idiomas pelo ID.
const botao = document.getElementById('botaoconfiguracao');
const menu = document.getElementById('menuidioma');

// Quando o botão for clicado, alterna a classe 'open' no menu.
// Isso faz com que o CSS .rolagem.open { display: block } entre em ação.
botao.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Animação gira a engrenagem em 360°.
botao.addEventListener('click', () => {
  botao.classList.toggle('rodar');
});

// Função que ao clique no HTML chama a variável tema [data-theme] do CSS.
function trocadecor(cor) {
  document.documentElement.setAttribute('data-theme', cor);
  localStorage.setItem('tema', cor);
}

// Se já houver opção [idioma ou tema] guardada na memória então ele a busca.
window.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo) {
    document.documentElement.setAttribute('data-theme', temaSalvo);
  }
});

// 1) Função de resposta ao prefers-color-scheme
function changeTheme(event) {
  const novoTema = event.matches ? 'escuro' : 'claro';
  document.documentElement.setAttribute('data-theme', novoTema);
  localStorage.setItem('tema', novoTema);
}

// 2) Cria MediaQueryList e ouve mudanças
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
prefersColorScheme.addEventListener('change', changeTheme);

// 3) Restaura tema existente ou aplica preferência do sistema
window.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo) {
    document.documentElement.setAttribute('data-theme', temaSalvo);
  } else {
    changeTheme(prefersColorScheme);
  }
});