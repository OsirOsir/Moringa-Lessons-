const h1 = document.querySelector("h1");
let num = 0
const button = document.querySelector("button").addEventListener("click", () => {

    h1.textContent = `${num++}`
})
