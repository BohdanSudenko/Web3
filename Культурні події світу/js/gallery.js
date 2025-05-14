function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  