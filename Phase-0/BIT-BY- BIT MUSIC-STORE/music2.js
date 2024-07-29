document.addEventListener("DOMContentLoaded", () => {
  const musicContainer = document.getElementById('musicList-container');
  const modalContainer = document.getElementById("myModal");
  const modalClose = document.getElementById("modal-close");
  const addformModal = document.getElementById('musicSubmitForm');
  const mainBody = document.getElementsByClassName('main-body');
  
  function displayMusicAlbum() {
    fetch('http://localhost:3000/musicList')
      .then(response => response.json())
      .then(data => {
        data.forEach((item) => {
          let albumCard = createAlbumCard(item);
          attachEventListeners(albumCard, item);
          musicContainer.appendChild(albumCard);
        });
      });
  }
  
  function createAlbumCard(item) {
    let albumCard = document.createElement('li');
    albumCard.innerHTML = `
      <div class="card">
        <img src="${item.musicImageLink}" alt="album image" title="${item.musicTitle}">
        <h3>${item.musicTitle}</h3>
        <p style="font-size: 13px; padding-bottom: 10px;">${item.artistName}</p>
      </div>
    `;
    return albumCard;
  }
  
  function attachEventListeners(albumCard, item) {
    albumCard.addEventListener("click", () => openModal(item));
    modalClose.addEventListener("click", closeModal);
  }
  
  function openModal(item) {
    let modalContent = document.getElementById("modal-info");
    modalContent.innerHTML = `
      <div class="modal-info" id="modal-info">
        <div class="image-container">
          <img src="${item.musicImageLink}" alt="album-image" />
        </div>
        <div class="music-information">
          <h5>${item.musicTitle}</h5>
          <p class="card-text">${item.artistName}</p>
          <audio controls id="audioControls">
            <source src="${item.audioLink}" type="audio/mpeg" />
          </audio>
          <button class="btn-danger" data-id="${item.id}">Delete</button>
        </div>
      </div>
    `;
    modalContainer.style.display = "block";
  }
  
  function closeModal() {
    modalContainer.style.display = "none";
    document.getElementById("audioControls").src = '';
  }
    const mainForm = document.getElementById("formModalBody");
    const clickButton = document.getElementById("button");
    const closeFormX = document.getElementById("modal-closeForm");
  
    clickButton.addEventListener("click", () => {
      mainForm.style.display = "block";
    });
  
    closeFormX.addEventListener("click", () => {
      mainForm.style.display = 'none';
    });
  
    function addMusicForm(event) {
      event.preventDefault();
      let musicImageLink = document.getElementById("albumImage").value;
      let musicTitle = document.getElementById("musicTitle").value;
      let artistName = document.getElementById("artistName").value;
      let audioLink = document.getElementById("musicLink").value;
      // Added logic to handle form submission
      let musicInformation = {
        musicImageLink,
        musicTitle,
        artistName,
        audioLink
      }
      fetch("http://localhost:3000/musicList", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(musicInformation)
      }).then(res => res.json()).then(data => data)
    }
  
    function deleteMusicItem(id) {
      fetch(`http://localhost:3000/musicList/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    }
  
    modalContainer.addEventListener("click", (event) => {
      event.preventDefault()
      if (event.target.classList.contains("btn-danger")) {
        const musicId = event.target.dataset.id;
        deleteMusicItem(musicId);
        // document.getElementById("audioControls").src = '';
  
      } else {
        event.target.classList.contains("btn-secondary");
        const updateMusicId = event.target.dataset.id;
        updateForm(updateMusicId);
      }
    });
  
    addformModal.addEventListener('submit', addMusicForm)
  
    displayMusicAlbum();
})


