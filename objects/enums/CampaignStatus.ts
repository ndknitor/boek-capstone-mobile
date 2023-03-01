const CampaignStatus = {
    notStarted: 1,
    start: 2,
    end: 3,
    postpone: 4,
    toString: (n: number) => {
        if (n == CampaignStatus.notStarted) {
            return "Chưa bắt đầu"
        }
        if (n == CampaignStatus.start) {
            return "Bắt đầu hội sách"
        }
        if (n == CampaignStatus.end) {
            return "Kết thúc hội sách"
        }
        if (n == CampaignStatus.end) {
            return "Hủy hội sách"
        }
        return "";
    }
}
export default CampaignStatus;