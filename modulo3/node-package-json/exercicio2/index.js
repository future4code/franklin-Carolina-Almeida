const soma=Number(process.argv[3])+Number(process.argv[4])
const subracao=Number(process.argv[3])-Number(process.argv[4])
const divisao=Number(process.argv[3])/Number(process.argv[4])
const multiplicaao=Number(process.argv[3])*Number(process.argv[4])

switch(process.argv[2]){
	case "soma":
		console.log(process.argv[3]+ " + " +process.argv[4]+ " = "+ soma)
		break;
	case "subtracao":
		console.log(process.argv[3]+ " - " +process.argv[4]+ " = "+ sub)
		break;
    case "divisao":
		console.log(process.argv[3]+ " / " +process.argv[4]+ " = "+ div)
		break;
    case "multiplicacao":
		console.log(process.argv[3]+ " X " +process.argv[4]+ " = "+ mult)
		break;
}