window.addEventListener('load', () => {
            // Fotoğrafın URL'si
            const imageUrl = 'https://example.com/path/to/your-image.jpg';
            // MP3 dosyasının URL'si
            const audioUrl = 'https://example.com/path/to/your-audio-file.mp3';

            // Arka plan fotoğrafını ayarla
            document.body.style.backgroundImage = `url(${imageUrl})`;

            // MP3 dosyasını çal
            const audio = new Audio(audioUrl);
            audio.preload = 'auto';
            audio.play().catch(error => {
                console.error('Oynatma hatası:', error);
            });
        });
