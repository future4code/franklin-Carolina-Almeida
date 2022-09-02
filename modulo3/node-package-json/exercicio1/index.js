//usamos process.argv[] para acessar os parâmetros passados na linha de comando para o Node

console.log("Olá, "+process.argv[2]+"! Você tem "+process.argv[3]+" anos.")

const valor = Number(process.agrv[3]+7)
console.log("Olá, "+process.argv[2]+"! Você tem "+process.argv[3]+". Em sete anos você terá "+valor)