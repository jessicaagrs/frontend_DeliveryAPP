function extractNumbers(input: string) {
    return input.replace(/\D/g, "");
}

function formatCurrency(value: number) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return formatter.format(value);
}

export { extractNumbers, formatCurrency };

