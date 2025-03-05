export function convertirARomano(num) {
    const valores = [
        { valor: 1, simbolo: "I" }
    ];

    let resultado = "";

    for (const { valor, simbolo } of valores) {
        while (num >= valor) {
            resultado += simbolo;
            num -= valor;
        }
    }

    return resultado;
}

export default convertirARomano;