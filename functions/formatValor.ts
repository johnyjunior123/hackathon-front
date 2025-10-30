export function formatValue(value: number): string {
    if (typeof value !== 'number') {
        value = Number(value);
    }

    if (isNaN(value)) {
        return '';
    }

    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
