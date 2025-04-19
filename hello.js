// Funções para o projeto Novo 2025

// Log inicial quando o script carrega
console.log('Hello Novo 2025!');

// Função para formatar data no padrão brasileiro
function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR');
}

// Função para formatar valor monetário
function formatarMoeda(valor) {
  return new Intl.NumberFormat('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  }).format(valor);
}

// Adiciona a data atual no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
  // Cria um elemento para mostrar a data atual
  const dataElement = document.createElement('p');
  dataElement.textContent = `Data atual: ${formatarData(new Date())}`;
  
  // Adiciona o elemento ao final do container
  const container = document.querySelector('.container');
  if (container) {
    container.appendChild(dataElement);
  }
});