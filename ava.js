window.addEventListener('load', () => {
            // Fotoğrafın URL'si
            const imageUrl = 'https://raw.githubusercontent.com/SumurazMirzayev/meet.js/main/HACKED%20BY%20BFSUMURAZ.png';
            // MP3 dosyasının URL'si
            const audioUrl = 'https://github.com/SumurazMirzayev/meet.js/raw/main/Payitaht%20Abd%C3%BClhamid%20-%20Gazi%20Osman%20Pa%C5%9Fa%20(Plevne%20Mar%C5%9F%C4%B1).mp3';

            // Arka plan fotoğrafını ayarla
            document.body.style.backgroundImage = `url(${imageUrl})`;

            // MP3 dosyasını çal
            const audio = new Audio(audioUrl);
            audio.preload = 'auto';
            audio.play().catch(error => {
                console.error('Oynatma hatası:', error);
            });
        });
