document.getElementById('minPrice').addEventListener('input', filterGames);
document.getElementById('maxPrice').addEventListener('input', filterGames);
document.getElementById('rating').addEventListener('change', filterGames);

function filterGames() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || 1000;
    const rating = parseInt(document.getElementById('rating').value);

    const jogos = document.querySelectorAll('.jogo');
    jogos.forEach(jogo => {
        const price = parseFloat(jogo.getAttribute('data-price'));
        const gameRating = parseInt(jogo.getAttribute('data-rating'));

        if (price >= minPrice && price <= maxPrice && gameRating >= rating) {
            jogo.style.display = 'block';
        } else {
            jogo.style.display = 'none';
        }
    });
}
