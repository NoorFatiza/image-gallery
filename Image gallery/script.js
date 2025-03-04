
  const images = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg",
    "images/image6.jpeg",
    "images/image7.jpeg"
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById("main-image");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const thumbnailSidebar = document.querySelector(".thumbnail-sidebar");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);
  
  // Create thumbnails
  images.forEach((image, index) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = image;
    thumbnail.classList.add("thumbnail");
    if (index === currentIndex) thumbnail.classList.add("active");
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateGallery();
    });
    thumbnailSidebar.appendChild(thumbnail);
  });
  
  // Update gallery
  function updateGallery() {
    mainImage.src = images[currentIndex];
    document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
  }
  
  // Navigation
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });
  
  // Lightbox
  mainImage.addEventListener("click", () => {
    const lightboxImage = document.createElement("img");
    lightboxImage.src = images[currentIndex];
    lightbox.innerHTML = "";
    lightbox.appendChild(lightboxImage);
    lightbox.classList.add("active");
  });
  
  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
  
  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateGallery();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      updateGallery();
    } else if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });