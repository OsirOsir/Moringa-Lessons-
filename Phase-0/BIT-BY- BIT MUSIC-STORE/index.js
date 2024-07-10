let musicContainer = document.getElementById("musicList-container")
let modalContainer = document.getElementById("myModal")
let modalClose = document.getElementById("modal-close")
let musicList = [
  {
    id: 1,
    musicImageLink: "assets/koffi.jpeg",
    musicTitle: "L'Orfevre",
    artistName: "Kiffi Olamide",
    audioLink: "assets/Music/Koffi Olomid – Zro faute (2).mp3"
  },
  {
    id: 2,
    musicImageLink: "assets/snappy.png",
    musicTitle: "Freedom",
    artistName: "Snappy",
    audioLink: "assets/Music/Nirvana – Sappy.mp3"
  },
  {
    id: 3,
    musicImageLink: "assets/Shusho.png",
    musicTitle: "Nashusha Nyavu",
    artistName: "Christina Shusho",
    audioLink: "assets/Music/Christina Shusho – Shusha Nyavu.mp3"
  },
  {
    id: 4,
    musicImageLink: "assets/channels4_profile.jpg",
    musicTitle: "All Night",
    artistName: "Snappy G",
    audioLink: "assets/Music/Nirvana – Sappy.mp3"
  },
  {
    id: 5,
    musicImageLink: "assets/Alain.png",
    musicTitle: "Bye Bye Bye",
    artistName: "Alain",
    audioLink: "assets/Music/Alaine – Bye Bye Bye.mp3"
  },
  {
    id: 6,
    musicImageLink: "assets/JahCure.png",
    musicTitle: "A Thousand Miles",
    artistName: "Jah cure",
    audioLink: "assets/Music/Jah Cure – All Of Me.mp3"
  },
  {
    id: 7,
    musicImageLink: "assets/PeterMorgan.png",
    musicTitle: "Sunshine Girl",
    artistName: "Peetah Morgan ft J Boog",
    audioLink: "assets/Music/J Boog – Sunshine Girl.mp3"
  },
  {
    id: 8,
    musicImageLink: "assets/busysignal.jpeg",
    musicTitle: "Free Up",
    artistName: "Busy Signal",
    audioLink: "assets/Music/Busy Signal – Free Up.mp3"
  }
]

function displayMusicAlbum() {
  musicList.map((musicItem) => {
    let albumCard = document.createElement("li")
    albumCard.style.display = "none"
    albumCard.innerHTML = `
    <div class="card">
        <img src="${musicItem.musicImageLink}" title="LES PRISONNIERS DORMENT..">
        <h3>${musicItem.musicTitle}</h3>
        <p style="font-size: 13px; padding-bottom: 10px;">${musicItem.artistName}</p>
    </div>
    `;
    
    function selectMusicItem() {
      function openModal () {
        let modalContent = document.getElementById("modal-info");
        modalContainer.style.display = "none"
        modalContent.innerHTML = `
        <div class="modal-info" id="modal-info">
          <div class="image-container">
            <img src="${musicItem.musicImageLink}" alt="album-image" />
          </div>
          <div class="music-information">
            <h5>${musicItem.musicTitle}</h5>
            <p class="card-text">${musicItem.artistName}</p>
            <audio controls id="audioControls">
              <source src="${musicItem.audioLink}" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        `;
        
      }
      function closeModal() {
        modalContainer.style.display = "none"
        document.getElementById("audioControls").src =" "
      }
      albumCard.addEventListener("click", openModal)
      modalClose.addEventListener("click", closeModal)
    }
    selectMusicItem(musicItem.id);
    musicContainer.appendChild(albumCard);
  });
}
displayMusicAlbum()