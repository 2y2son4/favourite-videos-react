const FAKE_DELAY = 2000;
const FAKE_DATA = [
  {
    id: 0,
    title: '💫 Chica Sobresalto con Zahara - Adrenalina 💫',
    url: 'https://www.youtube.com/watch?v=9xuEJsDz-NU',
    embed: 'https://www.youtube.com/embed/9xuEJsDz-NU',
    thumbnail: 'https://img.youtube.com/vi/9xuEJsDz-NU/maxresdefault.jpg',
  },
  {
    id: 1,
    title: '✨ Dua Lipa: Tiny Desk (Home) Concert ✨',
    url: 'https://www.youtube.com/watch?v=F4neLJQC1_E',
    embed: 'https://www.youtube.com/embed/F4neLJQC1_E',
    thumbnail: 'https://img.youtube.com/vi/F4neLJQC1_E/maxresdefault.jpg',
  },
  {
    id: 2,
    title: '🚨 Portishead – Glory Box (Later Archive 1994) 🚨',
    url: 'https://www.youtube.com/watch?v=bIJpPdnGjkE',
    embed: 'https://www.youtube.com/embed/bIJpPdnGjkE',
    thumbnail: 'https://img.youtube.com/vi/bIJpPdnGjkE/maxresdefault.jpg',
  },
  {
    id: 3,
    title: '👹 Bridge City Sinners - Song of the Siren // Live Video Session 👹',
    url: 'https://www.youtube.com/watch?v=ldbA86MZIJ0',
    embed: 'https://www.youtube.com/embed/ldbA86MZIJ0',
    thumbnail: 'https://img.youtube.com/vi/ldbA86MZIJ0/maxresdefault.jpg',
  },
  {
    id: 4,
    title: "👽️ Måneskin - L'altra dimensione 👽️",
    url: 'https://www.youtube.com/watch?v=tTKuYa0MxsY',
    embed: 'https://www.youtube.com/embed/tTKuYa0MxsY',
    thumbnail: 'https://img.youtube.com/vi/tTKuYa0MxsY/maxresdefault.jpg',
  },
  {
    id: 5,
    title: '🤫 Rina Sawayama - STFU! 🤫',
    url: 'https://www.youtube.com/watch?v=XojM2D3F-Dc',
    embed: 'https://www.youtube.com/embed/XojM2D3F-Dc',
    thumbnail: 'https://img.youtube.com/vi/XojM2D3F-Dc/maxresdefault.jpg',
  },
];

export const addVideo = (newVideo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      newVideo.id = FAKE_DATA.length + 1;
      FAKE_DATA.push(newVideo);
      return resolve({ ok: 1 });
    }, FAKE_DELAY);
  });

export const getVideos = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(FAKE_DATA);
    }, FAKE_DELAY);
  });

// export const getCharacters = async () => {
//   try {
//     const resp = await fetch('https://rickandmortyapi.com/api/character/');
//     console.log(resp.json());
//     return resp.json();
//   } catch (error) {
//     throw error;
//   }
// };

// Return a description from server
const getDescription = async () => {
  try {
    const resp = await fetch('https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1');
    return resp.json();
  } catch (error) {
    throw error;
  }
};

// difference between async/await y new promosises: way to manage errors.
// cuando se hace return en una función asíncrona, el resultado es una promesa.

export const getVideoDetail = ({ idVideo }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const video = FAKE_DATA.find((el) => parseInt(el.id) === parseInt(idVideo));

      // Something goes wrong (se devuelve una promesa no cumplida)
      if (!video) return reject({ message: 'No se ha encontrado el video 🙄' });

      // All is ok
      if (video.description) return resolve(video);

      // In case video don't have text description
      return getDescription()
        .then((description) => {
          video.description = description.join();

          // respuesta satisfactoria
          return resolve(video);
        })
        .catch(console.error);
    }, FAKE_DELAY);
  });
