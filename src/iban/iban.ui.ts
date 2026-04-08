import { banco } from "./iban.model";
import  { isValidIBAN } from "ibantools";

// Formulario + input (text)
const formIBAN = document.querySelector("#IBAN-form");
const IBANtext = document.querySelector("#IBAN-text");

// IBAN details
const IBANconfirmation = document.querySelector(".IBAN-confirmation");
const IBANvalidation = document.querySelector(".IBAN-validation");
const IBANbank = document.querySelector(".IBAN-bank");
const IBANbranch = document.querySelector(".IBAN-branch");
const IBANcontrol = document.querySelector(".IBAN-control");
const IBANaccount = document.querySelector(".IBAN-account");

// Definición IBAN
const IBAN = /^(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})$/;
    /*const ibantools = require('ibantools');*/

const clearResults = () => {

    if (IBANconfirmation && IBANconfirmation instanceof HTMLParagraphElement &&
        IBANvalidation && IBANvalidation instanceof HTMLParagraphElement &&
        IBANbank && IBANbank instanceof HTMLParagraphElement &&
        IBANbranch && IBANbranch instanceof HTMLParagraphElement &&
        IBANcontrol && IBANcontrol instanceof HTMLParagraphElement &&
        IBANaccount && IBANaccount instanceof HTMLParagraphElement) {

        IBANconfirmation.textContent= "";
        IBANvalidation.textContent= "";
        IBANbank.textContent="";
        IBANbranch.textContent="";
        IBANcontrol.textContent="";
        IBANaccount.textContent="";
    }
} 

const validateIBAN = (secret: string) => {
    
    const matchIBAN = IBAN.exec(secret);    
    
    if (IBANconfirmation && IBANconfirmation instanceof HTMLParagraphElement &&
        IBANvalidation && IBANvalidation instanceof HTMLParagraphElement &&
        IBANbank && IBANbank instanceof HTMLParagraphElement &&
        IBANbranch && IBANbranch instanceof HTMLParagraphElement &&
        IBANcontrol && IBANcontrol instanceof HTMLParagraphElement &&
        IBANaccount && IBANaccount instanceof HTMLParagraphElement && matchIBAN) {

        const {bankCode, branchCode, controlCodeAccount, accountCode} = matchIBAN.groups as any;

            IBANconfirmation.textContent= "El IBAN está bien formado";
            IBANvalidation.textContent = isValidIBAN(secret) ? "El IBAN es válido" : "El IBAN no es válido";
            IBANbank.textContent= "Banco: "+ bankCode + " " + (banco[bankCode]? banco[bankCode] : "No existe este banco");
            IBANbranch.textContent= "Código de sucursal: "+ branchCode;
            IBANcontrol.textContent= "Digito de control: "+ controlCodeAccount;
            IBANaccount.textContent= "Número de cuenta: "+ accountCode;

        } else {
        
        if (IBANconfirmation && IBANconfirmation instanceof HTMLParagraphElement) {
        clearResults();
        IBANconfirmation.textContent="Error en leer el IBAN";
        }
        
    }
}

export const initFormIban = () => {

    if (formIBAN && formIBAN instanceof HTMLFormElement && 
        IBANtext && IBANtext instanceof HTMLInputElement) {

            formIBAN.addEventListener("submit", (event) => {
            event.preventDefault();
            const secret = IBANtext.value;
            validateIBAN(secret);
        })
    }
}