import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Teste 1", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});

test("Teste 2", () => {
  render(<App />);

  userEvent.click(
    screen.getByRole("button", {
      name: /carrinho/i
    })
  );
});

// ERROS ENCONTRADOS
  // 1- calcula o valor errado quando seleciono todos os itens
  // 2- não filtra quando o valor máximo é 2
  // 3- mostra 5 produtos quando o valor mínimo é 2
  // 4- digito qualquer coisa no campo e-mail e ele aceita
  // 5- quando seleciono "conjunto fogo grátis". o valor final da compra é zero, apesar de o valor do item ser 250,00
  // 6- o total não calcula corretamente ao adicionar e excluir itens
  // 7- não tem a opção "limpar carrinho" conforme informado nos requisitos
