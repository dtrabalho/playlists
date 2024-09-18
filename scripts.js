function initializeCarousel(carouselId, leftButtonId, rightButtonId) {
    let currentPosition = 1;

    document.getElementById(leftButtonId).addEventListener('click', () => {
        moveCarousel(carouselId, -1);
    });

    document.getElementById(rightButtonId).addEventListener('click', () => {
        moveCarousel(carouselId, 1);
    });

    function moveCarousel(carouselId, direction) {
        const carousel = document.getElementById(carouselId);
        const items = carousel.querySelectorAll('.portfolio-item');
        const totalItems = items.length;

        // Remove a classe 'selected' do item atual
        items[currentPosition].classList.remove('selected');

        // Atualiza a posição com base na direção
        currentPosition = (currentPosition + direction + totalItems) % totalItems;

        // Adiciona a classe 'selected' ao novo item atual
        items[currentPosition].classList.add('selected');

        // Move o carrossel para que o item selecionado esteja sempre no centro
        const carouselWidth = document.querySelector('.carousel-wrapper').offsetWidth;
        const itemWidth = items[0].offsetWidth + 20; // Largura do item + margem
        const offset = -(currentPosition * itemWidth) + (carouselWidth / 2 - itemWidth / 2);
        carousel.style.transform = `translateX(${offset}px)`;
    }
}

// Inicializando os carrosséis
initializeCarousel('carousel-1', 'left-button-1', 'right-button-1');
initializeCarousel('carousel-2', 'left-button-2', 'right-button-2');
// Função para abrir o modal
function openModal(title, description, link, imageSrc) {
    document.getElementById('playlist-title').innerText = title;
    document.getElementById('playlist-description').innerText = description;
    document.getElementById('playlist-link').href = link;
    document.getElementById('playlist-image').src = imageSrc;

    document.getElementById('playlist-modal').style.display = 'block';

    // Desativar botões
    document.querySelectorAll('button').forEach(button => button.classList.add('disabled'));
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('playlist-modal').style.display = 'none';

    // Reativar botões
    document.querySelectorAll('button').forEach(button => button.classList.remove('disabled'));
}

// Adicionar eventos de clique para fechar o modal
document.getElementById('close-btn').addEventListener('click', closeModal);

// Adicionar eventos de clique para abrir o modal
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
        // Passar informações reais para o modal
        const title = item.querySelector('h3').innerText;
        const description = 'Descrição da playlist...'; // Atualize conforme necessário
        const link = 'https://open.spotify.com/playlist/xyz'; // Atualize com o link correto
        const imageSrc = item.querySelector('img').src;

        openModal(title, description, link, imageSrc);
    });
});
