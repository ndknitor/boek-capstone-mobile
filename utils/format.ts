export const dateFormat = "DD/MM/YYYY";

export function formatNumber(num: number | undefined) {
    if (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")    
    }
    return "";
}
export const range = (start: number, end: number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);
