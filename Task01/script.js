let currentIndex = 0;
let images = [];

function uploadImage() {
    const input = document.getElementById('imageUpload');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addImageToGallery(e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function addImageToGallery(src) {
    const gallery = document.getElementById('gallery');
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = src;
    img.onclick = () => openModal(src);

    const btn = document.createElement('button');
    btn.classList.add('delete-btn');
    btn.innerText = "Delete";
    btn.onclick = () => div.remove();

    div.appendChild(img);
    div.appendChild(btn);
    gallery.appendChild(div);

    images.push(src);
}

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
    currentIndex = images.indexOf(src);
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function changeSlide(step) {
    currentIndex += step;
    if (currentIndex < 1) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("modalImage").src = images[currentIndex];
}


