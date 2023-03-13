export default function truncateString(str: string, wordCount: number): string {
    const words = str.split(" ");
    if (words.length <= wordCount) {
        return str;
    } else {
        return words.slice(0, wordCount).join(" ") + "...";
    }
}