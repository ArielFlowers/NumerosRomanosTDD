export function convertirARomano(num) {
    const valores = [
        { valor: 100, simbolo: "C" },
        { valor: 90, simbolo: "XC" },
        { valor: 50, simbolo: "L" },
        { valor: 40, simbolo: "XL" },
        { valor: 10, simbolo: "X" },
        { valor: 9, simbolo: "IX" },
        { valor: 5, simbolo: "V" },
        { valor: 4, simbolo: "IV" },
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