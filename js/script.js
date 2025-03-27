const images = [
    {
        src: 'img/01escape.png',
        alt: 'Portada abstracta con tonos oscuros',
        albumTitle: 'The Escape',
        songs: [
            { trackNumber: '01', songName: 'The Escape' },
        ]
    },
    {
        src: 'img/02lp01.jpg',
        alt: 'Portada minimalista con líneas geométricas',
        albumTitle: '#01',
        songs: [
            { trackNumber: '01', songName: 'Intro (ft. Von Frix)' },
            { trackNumber: '02', songName: 'II' },
            { trackNumber: '03', songName: 'My Lonely Side' },
            { trackNumber: '04', songName: 'The Stretched One' },
            { trackNumber: '05', songName: 'Petrichor' },
            { trackNumber: '06', songName: 'Enter A Dream' },
            { trackNumber: '07', songName: 'The Escape' },
            { trackNumber: '08', songName: 'A Quick Dream Before "Awake"' },
            { trackNumber: '09', songName: 'Awake (ft. Luciano Santantonio)' },
            { trackNumber: '10', songName: '10_cmsa.Wav' },
            { trackNumber: '11', songName: 'Hoping To Reach The Feeling' },
            { trackNumber: '12', songName: 'Credits: Blue Song' },
        ]
    },
    {
        src: 'img/03maintenant.jpg',
        alt: 'Portada con paisaje nocturno',
        albumTitle: 'Maintenant',
        songs: [
            { trackNumber: '01', songName: 'Maintenant' },
        ]
    },
    {
        src: 'img/04lepasse.jpeg',
        alt: 'Portada con fotografía vintage',
        albumTitle: 'Le Passé',
        songs: [
            { trackNumber: '01', songName: 'Le Passé' },
        ]
    },
    {
        src: 'img/05tracks.png',
        alt: 'Portada con arte digital futurista',
        albumTitle: 'Dec Tracks',
        songs: [
            { trackNumber: '01', songName: 'Fallin Point' },
            { trackNumber: '02', songName: 'Retrograde' },
            { trackNumber: '03', songName: 'Hidden Reprise' },
            { trackNumber: '04', songName: 'Mid -------- (aiR)' },
        ]
    },
    {
        src: 'img/06unmastered.jpg',
        alt: 'Portada con texturas crudas',
        albumTitle: 'Unmastered',
        songs: [
            { trackNumber: '01', songName: 'Unmastered' },
        ]
    },
    {
        src: 'img/07mpl.jpg',
        alt: 'Portada con patrones geométricos',
        albumTitle: 'mpl',
        songs: [
            { trackNumber: '01', songName: 'mpl' },
        ]
    },
    {
        src: 'img/08brainburnin.jpg',
        alt: 'Portada con colores vibrantes',
        albumTitle: 'Brainburnin',
        songs: [
            { trackNumber: '01', songName: 'Brainburnin' },
        ]
    },
    {
        src: 'img/09nomemires.jpg',
        alt: 'Portada con ojo estilizado',
        albumTitle: 'Nomemires [Remix]',
        songs: [
            { trackNumber: '01', songName: 'Nomemires [Remix]' },
        ]
    },
    {
        src: 'img/10lostctrl.jpg',
        alt: 'Portada con figura desvaneciéndose',
        albumTitle: 'Lost Ctrl',
        songs: [
            { trackNumber: '01', songName: 'Lost Ctrl' },
        ]
    },
    {
        src: 'img/11unfulfilled.jpg',
        alt: 'Portada con tonos melancólicos',
        albumTitle: 'Unfulfilled',
        songs: [
            { trackNumber: '01', songName: 'Unfulfilled' },
        ]
    },
    {
        src: 'img/12calmmind.jpg',
        alt: 'Portada con paisaje sereno',
        albumTitle: 'Calm Mind',
        songs: [
            { trackNumber: '01', songName: 'Calm Mind' },
        ]
    },
    {
        src: 'img/13ponds.jpg',
        alt: 'Portada con reflejos de agua',
        albumTitle: 'Ponds',
        songs: [
            { trackNumber: '01', songName: 'Ponds' },
        ]
    },
    {
        src: 'img/14distance.jpg',
        alt: 'Portada con horizonte lejano',
        albumTitle: 'Distance',
        songs: [
            { trackNumber: '01', songName: 'Ether (ft. Franco Duarte)' },
            { trackNumber: '02', songName: 'Ponds (ft. Ignacio Pianelli)' },
            { trackNumber: '03', songName: 'Mindset' },
            { trackNumber: '04', songName: '_Noname' },
            { trackNumber: '05', songName: 'Calm Mind (ft. Ignacio Pianelli)' },
            { trackNumber: '06', songName: 'The Memory Of Us' },
        ]
    },
    {
        src: 'img/15theview.jpg',
        alt: 'Portada con vista panorámica',
        albumTitle: 'The View',
        songs: [
            { trackNumber: '01', songName: 'The View (ft. Santi Novillo)' },
        ]
    },

    {
        src: 'img/18MorningMist.png',
        alt: 'Libro Abierto',
        albumTitle: 'Morning Mist',
        songs: [
            { trackNumber: '01', songName: 'Black Seed' },
            { trackNumber: '02', songName: 'Dont Go Away' },
            { trackNumber: '03', songName: 'Triggers (ft. Voren)' },
            { trackNumber: '04', songName: 'This World Of Ours' },
            { trackNumber: '05', songName: 'Oblivion' },
            { trackNumber: '06', songName: 'Dont Miss It' },
            { trackNumber: '07', songName: 'Not Today' },
            { trackNumber: '08', songName: 'It Gets Better' },
        ]
    },
    {
        src: 'img/16afterthemorningmist.jpg',
        alt: 'Portada con niebla matutina',
        albumTitle: 'After the Morning Mist',
        songs: [
            { trackNumber: '01', songName: 'Goodbye To The Blues' },
            { trackNumber: '02', songName: 'Goin On' },
            { trackNumber: '03', songName: 'Homunculus' },
            { trackNumber: '04', songName: 'In Repair' },
            { trackNumber: '05', songName: 'Ou-topos' },
        ]
    },
    {
        src: 'img/17atthesun.png',
        alt: 'Portada con luz solar intensa',
        albumTitle: 'I Stared at the Sun',
        songs: [
            { trackNumber: '01', songName: 'Nicest Things' },
            { trackNumber: '02', songName: 'Quiet Time (ep version)' },
            { trackNumber: '03', songName: 'Luca and I' }
        ]
    },
    {
        src: 'img/19ISATSATMM.jpeg',
        alt: 'Formas',
        albumTitle: 'I Stared At The Sun After The Morning Mist',
        songs: [
            { trackNumber: '01', songName: 'One More Step' },
            { trackNumber: '02', songName: 'Homunculus' },
            { trackNumber: '03', songName: 'Nicest Things' },
            { trackNumber: '04', songName: 'Goin On' },
            { trackNumber: '05', songName: 'Ou-topos' },
            { trackNumber: '06', songName: 'Goodbye To The Blues' },
            { trackNumber: '07', songName: 'Luca and I' },
            { trackNumber: '08', songName: 'In Repair' },
            { trackNumber: '09', songName: 'Quiet Time' }
        ]
    },
    {
        src: 'img/20Blurry.png',
        alt: 'Formas',
        albumTitle: 'Blurry',
        songs: [
            { trackNumber: '01', songName: 'Rare' },
            { trackNumber: '02', songName: 'Sketches Of New Moments' },
            { trackNumber: '03', songName: 'Plastic Heart' },
            { trackNumber: '04', songName: 'Innie' },
            { trackNumber: '05', songName: 'Home' },
            { trackNumber: '06', songName: 'All Alone' },
            { trackNumber: '', songName: '' },
            
        ]
    }
];

// Clasificar los proyectos
const albums = images.filter(image => image.songs.length >= 7);
const eps = images.filter(image => image.songs.length >= 3 && image.songs.length <= 6);
const singles = images.filter(image => image.songs.length === 1);

let currentDetails = null;

// Función para generar la galería de una sección
function generateGallery(imagesSubset, container) {
    imagesSubset.forEach((image) => {
        const globalIndex = images.indexOf(image);
        const albumItem = document.createElement('div');
        albumItem.className = 'album-item';
        albumItem.dataset.index = globalIndex;

        const a = document.createElement('a');
        a.href = '#';
        a.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDetails(albumItem, globalIndex);
        });

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'gallery-img';
        a.appendChild(img);
        albumItem.appendChild(a);

        // Agregar el título debajo de la imagen
        const title = document.createElement('h3');
        title.textContent = image.albumTitle;
        title.className = 'album-title';
        albumItem.appendChild(title);

        container.appendChild(albumItem);
    });
}

// Función para mostrar/ocultar detalles
function toggleDetails(albumItem, index) {
    const gallery = document.getElementById('gallery');
    // Si hay detalles abiertos y no son del álbum seleccionado, ciérralos
    if (currentDetails && currentDetails.dataset.index !== index.toString()) {
        currentDetails.classList.remove('active');
        currentDetails.remove();
        currentDetails = null;
    }

    // Verificar si los detalles ya están abiertos para este álbum
    const existingDetails = document.querySelector('.album-details.active');
    if (existingDetails && existingDetails.dataset.index === index.toString()) {
        existingDetails.classList.remove('active');
        existingDetails.remove();
        currentDetails = null;
        return;
    }

    // Crear nuevos detalles
    const details = document.createElement('div');
    details.className = 'album-details';
    details.dataset.index = index;

    const image = images[index];
    details.innerHTML = `
        <button class="close-button">cerrar</button>
        <div class="album-details-content">
            <img src="${image.src}" alt="${image.alt}">
            <div class="details-text">
                <h2>${image.albumTitle}</h2>
                <ul class="song-list">
                    ${image.songs.map(song => `<li>${song.trackNumber}. ${song.songName}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    // Insertar detalles en el contenedor de la galería
    gallery.appendChild(details);
    currentDetails = details;
    details.classList.add('active');
    details.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Añadir evento para cerrar los detalles al hacer clic en la "X"
    const closeButton = details.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        details.classList.remove('active');
        details.remove();
        currentDetails = null;
    });
}

// Inicializar la galería al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const albumsContainer = document.querySelector('.gallery-grid.albums');
    const epsContainer = document.querySelector('.gallery-grid.eps');
    const singlesContainer = document.querySelector('.gallery-grid.singles');

    generateGallery(albums, albumsContainer);
    generateGallery(eps, epsContainer);
    generateGallery(singles, singlesContainer);
});