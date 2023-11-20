const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() {
  const busca = await fetch("http://localhost:3000/videos");
  const videos = await busca.json();

  videos.forEach((video) => {
    containerVideos.innerHTML += `
    <li class="videos__item">
        <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${video.imagem}" alt="logo do canal" class="img-canal">
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
        </div>
    </li>
    `;
  });
}

buscarEMostrarVideos();
