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
