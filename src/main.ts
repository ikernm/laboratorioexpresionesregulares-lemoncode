import "./style.css";
import { initFormIban } from "./iban/iban.ui";
import { initFormImages } from "./images/images.ui";

document.addEventListener("DOMContentLoaded", () => {
    initFormIban();
    initFormImages();
});