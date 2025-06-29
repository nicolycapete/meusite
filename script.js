document.addEventListener('DOMContentLoaded', () => {
    console.log('Hits.fm carregado!');

    // Exemplo: Simular carregamento de músicas dinamicamente
    const destaquesSection = document.getElementById('destaques');
    const musicasExemplo = [
        { titulo: "Sua Música Perfeita", artista: "Banda Incrível", audio: "musica1.mp3" },
        { titulo: "Ritmo Envolvente", artista: "Cantor Estrela", audio: "musica2.mp3" }
    ];

    musicasExemplo.forEach(musica => {
        const divMusica = document.createElement('div');
        divMusica.innerHTML = `
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
            <button onclick="playMusic('${musica.audio}', '${musica.titulo}', '${musica.artista}')">Reproduzir</button>
        `;
        destaquesSection.appendChild(divMusica);
    });
});

function playMusic(audioPath, title, artist) {
    const audioPlayer = document.querySelector('#player audio');
    const currentSongTitle = document.querySelector('.current-song h3');
    const currentSongArtist = document.querySelector('.current-song p');

    audioPlayer.src = `caminho/para/seus/audios/${audioPath}`; // Ajuste o caminho real
    currentSongTitle.textContent = title;
    currentSongArtist.textContent = artist;
    audioPlayer.play();
}