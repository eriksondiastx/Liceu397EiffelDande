document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");

  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.dataset.mdbImg;
    });
  });

  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

/*GALERIA DE VÍDEOS*/

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".lightbox-trigger");
  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeLightbox = document.querySelector(".close-lightbox");

  videos.forEach((video) => {
    video.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxVideo.src = this.querySelector("source").src;
    });
  });

  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
    lightboxVideo.pause();
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxVideo.pause();
    }
  });
});

/**FORMAÇÃO UNITEL **/
// Seleciona os elementos
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");
  const images = document.querySelectorAll(".lightbox-trigger");

  // Abrir o Lightbox ao clicar na imagem
  images.forEach((img) => {
    img.addEventListener("click", function () {
      lightbox.style.display = "flex";
      lightboxImg.src = this.src;
    });
  });

  // Fechar Lightbox ao clicar no botão de fechar
  closeLightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Fechar Lightbox ao clicar fora da imagem
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Fechar Lightbox ao pressionar a tecla "Esc"
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});
