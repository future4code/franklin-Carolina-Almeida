export const clientes = [
    {
       id: 'transacoes',
       conta: [
          {
             id: '1',
             name: 'carolina',
             cpf: 10293876532,
             aniversario: "21 de março",
             saldo: 2000,
             extrato: [
                {
                   id: 1,
                   movimento: 'entrada',
                   valor: 1000,
                },
                {
                    id: 2,
                    movimento: 'saida',
                    valor: 500,
                },
             ],
          },
       ],
    },
    {
        id: 'transacoes',
        conta: [
           {
              id: '2',
              name: 'alice',
              cpf: 019283746563,
              aniversario: "01 de abril",
              saldo: 1000,
              extrato: [
                 {
                    id: 1,
                    movimento: 'entrada',
                    valor: 200,
                 },
                 {
                     id: 2,
                     movimento: 'saida',
                     valor: 10,
                 }
              ]
           }
        ]
     }
 ];