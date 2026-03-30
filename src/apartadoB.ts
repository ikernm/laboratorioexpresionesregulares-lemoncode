import "./style.css";

const inputHTML = document.querySelector("#img-text") as HTMLTextAreaElement;
const formIMG = document.getElementById("img-form") as HTMLFormElement;

const extractImages = (text:string) => { 
    const regexIMG = /<img.*?src="(?<linkIMG>[^"]+)"/g;
    const matches = [...text.matchAll(regexIMG)];

    return matches
    .map(match => match.groups?.linkIMG)
    .filter((url): url is string => url !== undefined)
}

const showImages = (image:string[]) => {
    const containerIMG = document.querySelector(".container-img");

    if (containerIMG && containerIMG instanceof HTMLDivElement) {
        containerIMG.innerHTML="";

        image.forEach((image:string) => {
            const card = document.createElement("div");
            card.classList.add("card")

            const cardIMG = document.createElement("img");
            cardIMG.classList.add("image-card");
            cardIMG.src= image;

            card.appendChild(cardIMG);
            containerIMG.appendChild(card);
        })

    }

}

formIMG.addEventListener("submit", (event) => { 
    event.preventDefault();
    const text = inputHTML.value
    const image = extractImages(text);
    showImages(image);
})