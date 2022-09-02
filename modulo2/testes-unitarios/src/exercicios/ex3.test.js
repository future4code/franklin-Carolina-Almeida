import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para [1, 2 ,1]", () => {
        const ehDuplicado = checaItensDuplicados([1, 2 ,1]);
        expect(ehDuplicado).toEqual(true);
    });

    it("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const ehDuplicado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(ehDuplicado).toEqual(true);
    });

    it("retorna true para [1, 2, 3]", () => {
        const ehDuplicado = checaItensDuplicados([1, 2, 3, 6, 5, 6]);
        expect(ehDuplicado).toEqual(false);
    });

    it("retorna true para [4, 9, 10]", () => {
        const ehDuplicado = checaItensDuplicados([4, 9, 10]);
        expect(ehDuplicado).toEqual(false);
    });




});
