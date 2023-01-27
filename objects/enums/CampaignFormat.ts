export const CampaignFormat = {
    offline: 1,
    online: 2,
    both: 3,
    toString: (n: number) => {
        if (n == CampaignFormat.offline) {
            return "Trực tiếp"
        }
        if (n == CampaignFormat.online) {
            return "Trực tuyến"
        }
        if (n == CampaignFormat.both) {
            return "Trực tiếp và trực tuyến"
        }
        return "";
    }
}