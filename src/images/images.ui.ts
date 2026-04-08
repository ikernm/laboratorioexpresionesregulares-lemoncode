import { extractImages } from "./images.utils";

const inputHTML = document.querySelector("#img-text");
const formIMG = document.getElementById("img-form");

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

export const initFormImages = () => {

    if (formIMG && formIMG instanceof HTMLFormElement &&
        inputHTML && inputHTML instanceof HTMLTextAreaElement) {

            formIMG.addEventListener("submit", (event) => { 
            event.preventDefault();
            const text = inputHTML.value
            const image = extractImages(text);
            showImages(image);
        })
    }
}