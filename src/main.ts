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

// Definición IBAN
const IBAN = /^(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})$/;
/*const ibantools = require('ibantools');*/

export const validateIBANtest = (value:string):boolean => {
    const IBANv2 = /^(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})$/;
    return IBANv2.test(value);
} 

// Nombres de bancos

const banco: Record<string, string> = {
  "2080": "Abanca Corporación Bancaria",
  "0061": "Banca March",
  "0188": "Banco Alcalá",
  "0182": "Banco Bilbao Vizcaya Argentaria",
  "0130": "Banco Caixa Geral",
  "0234": "Banco Caminos",
  "2105": "Banco Castilla-La Mancha",
  "0240": "Banco de Crédito Social Cooperativo",
  "0081": "Banco de Sabadell",
  "0487": "Banco Mare Nostrum",
  "0186": "Banco Mediolanum",
  "0238": "Banco Pastor",
  "0075": "Banco Popular Español",
  "0049": "Banco Santander",
  "3873": "Banco Santander Totta",
  "2038": "Bankia",
  "0128": "Bankinter",
  "0138": "Bankoa",
  "0152": "Barclays Bank PLC",
  "3842": "BNP Paribas Paris",
  "3025": "Caixa de Credit del Enginyers",
  "2100": "Caixabank",
  "2045": "Caja de Ahorros y Monte de Piedad de Ontinyent",
  "3035": "Caja Laboral Popular CC",
  "3081": "Caja Rural Castilla-La Mancha",
  "3058": "Cajamar Caja Rural",
  "2000": "Cecabank",
  "1474": "Citibank Europe PLC",
  "3821": "Commerzbank AG",
  "3877": "Danske Bank A/S",
  "0019": "Deutsche Bank SAE",
  "0239": "EVO Banco",
  "2085": "Ibercaja Banco",
  "1465": "ING Bank NV",
  "2095": "Kutxabank",
  "2048": "Liberbank",
  "0131": "Novo Banco",
  "0073": "Open Bank",
  "0108": "Société Générale",
  "2103": "Unicaja Banco",
};


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
        IBANvalidation.textContent = isValidIBAN(secret) ? "El IBAN es válido" : "El IBAN no es válido";
        IBANbank.textContent= "Banco: "+ bankCode + " " + (banco[bankCode]? banco[bankCode] : "No existe este banco");
        IBANbranch.textContent= "Código de sucursal: "+ branchCode;
        IBANcontrol.textContent= "Digito de control: "+ controlCodeAccount;
        IBANaccount.textContent= "Número de cuenta: "+ accountCode;
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


