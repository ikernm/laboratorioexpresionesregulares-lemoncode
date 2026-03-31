export const validateIBANtest = (value:string):boolean => {
    const IBAN = /^(?<countryCode>[A-Za-z]{2})(?<controlCodeIBAN>\d{2})\s?\-?(?<bankCode>\d{4})\s?\-?(?<branchCode>\d{4})\s?\-?(?<controlCodeAccount>\d{2})\s?\-?(?<accountCode>\d{10})$/;
    return IBAN.test(value);
} 