import "./style.css";
/*
const IBANtext = document.getElementById("IBAN-text") as HTMLInputElement;
const IBANconfirmation = document.getElementById("IBAN-confirmation") as HTMLParagraphElement;
const IBANvalidation = document.getElementById("IBAN-validation") as HTMLParagraphElement;
const IBANbank = document.getElementById("IBAN-bank") as HTMLParagraphElement;
const IBANbranch = document.getElementById("IBAN-branch") as HTMLParagraphElement;
const IBANcontrol = document.getElementById("IBAN-control") as HTMLParagraphElement;
const IBANaccount = document.getElementById("IBAN-account") as HTMLParagraphElement;
*/


const validateIBAN = (value: string) => {
    const IBAN = /(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})/

    const matchIBAN = IBAN.exec(value);

    if (matchIBAN) {
        const {countryCode, controlCodeIBAN, bankCode, branchCode, controlCodeAccount, accountCode} = matchIBAN.groups as any;

        console.log("contryCode =", countryCode);
        console.log("controlCodeIBAN =", controlCodeIBAN);
        console.log("bankCode =", bankCode);
        console.log("branchCode =", branchCode);
        console.log("controlCodeAccount =", controlCodeAccount);
        console.log("accountCode =", accountCode);

    } else {
        console.error("Error en leer el IBAN");        
    }
}

validateIBAN("ES21-1465-0100-72-2030876293");




