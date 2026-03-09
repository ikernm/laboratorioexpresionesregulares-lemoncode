import "./style.css";
import  { isValidIBAN } from "ibantools";

// Formulario + input(text)
const formIBAN = document.querySelector("#IBAN-form") as HTMLFormElement;
const IBANtext = document.querySelector("#IBAN-text") as HTMLInputElement;

// IBAN details
const IBANconfirmation = document.querySelector(".IBAN-confirmation") as HTMLParagraphElement;
const IBANvalidation = document.querySelector(".IBAN-validation") as HTMLParagraphElement;
const IBANbank = document.querySelector(".IBAN-bank") as HTMLParagraphElement;
const IBANbranch = document.querySelector(".IBAN-branch") as HTMLParagraphElement;
const IBANcontrol = document.querySelector(".IBAN-control") as HTMLParagraphElement;
const IBANaccount = document.querySelector(".IBAN-account") as HTMLParagraphElement;

const IBAN = /^(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})$/;

const clearResults = () => {
    IBANconfirmation.textContent= "";
    IBANvalidation.textContent= "";
    IBANbank.textContent="";
    IBANbranch.textContent="";
    IBANcontrol.textContent="";
    IBANaccount.textContent="";
}



const validateIBAN = (secret: string) => {
    
    const matchIBAN = IBAN.exec(secret);

    if (matchIBAN) {
        const {bankCode, branchCode, controlCodeAccount, accountCode} = matchIBAN.groups as any;
        
        IBANconfirmation.textContent= "El IBAN está bien formado";
        IBANvalidation.textContent= "El IBAN es válido";
        IBANbank.textContent=`${bankCode}`
        IBANbranch.textContent=`${branchCode}`;
        IBANcontrol.textContent=`${controlCodeAccount}`;
        IBANaccount.textContent=`${accountCode}`;
    } else {
        clearResults();
        IBANconfirmation.textContent="Error en leer el IBAN";     
        
    }
}



formIBAN.addEventListener("submit", (event) => {
    event.preventDefault();
    const secret = IBANtext.value;
    validateIBAN(secret);
})


