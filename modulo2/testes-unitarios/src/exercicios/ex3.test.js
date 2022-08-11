import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para [1, 2 ,1]", () => {
        const duplicado = checaItemDuplicado([1, 2 ,1]);
        expect(duplicado).toEqual(true);
    });
    
    it("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const duplicado = checaItemDuplicado([5, 5, 3, 6, 5, 6]);
        expect(duplicado).toEqual(true);
    });
   
    it("retorna true para [1]", () => {
        const duplicado = checaItemDuplicado([1]);
        expect(duplicado).toEqual(false);
    });

    it("retorna true para [1, 2, 3]", () => {
        const duplicado = checaItemDuplicado([1, 2, 3]);
        expect(duplicado).toEqual(false);
    });
      
});
