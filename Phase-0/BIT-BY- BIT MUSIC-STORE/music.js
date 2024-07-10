musicContainer = document.getElementById('musicList-container')
modalContainer = document.getElementById("myModal")
modalClose = document.getElementById("modal-close")

function displayMusicAlbum() {
  fetch('http://localhost:3000/musicList')
  .then(response => response.json())
  .then(data => {
    data.map((item) => {
      let albumCard = document.createElement('li')
      albumCard.innerHTML = `
      <div class="card">
        <img src="${item.musicImageLink}" alt="album image" title="LES PRISONNIERS DORMENT..">
        <h3>${item.musicTitle}</h3>
          <p style="font-size: 13px; padding-bottom: 10px;">${item.artistName}</p>
      </div>
      `;
      function selectMusicItem() {
        function openModal() {
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
          </div>
        </div>
          `;
          modalContainer.style.display = "block";
        }
        function closeModal() {
          modalContainer.style.display = "none"
          document.getElementById("audioControls").src = ' '
        }
        albumCard.addEventListener("click", openModal)
        modalClose.addEventListener("click", closeModal)
      }
      selectMusicItem(item.id);
      musicContainer.appendChild(albumCard);
    })
  })
}
displayMusicAlbum()