export function capitalizeFirstWord(text: string) {
    if (!text) return "";

    const words = text.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    return words.join(" ");
}