import { validateIBANtest } from "./iban";

describe("validateIBANtest", () => {
    test.each([
        ["ES2114650100722030876293", true],
        ["ES21 1465 0100 7220 3087 6293", false],
        ["ES21-1465-0100-7220-3087-6293", false],
        ["ES211465010072203087629", false],
        ["ES21146501007220308762933", false],
        ["ES21146501007220308762A3", false],
        ["FR2114650100722030876293", true],    
    ]) (
        "Debería devolver un true si el IBAN es correcto", 
        (value: string, expected: boolean) => {
            expect(validateIBANtest(value)).toBe(expected);
        }
    )
})