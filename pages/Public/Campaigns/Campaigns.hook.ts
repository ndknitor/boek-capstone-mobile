import { useState } from "react";

export default function useCampaignsPage() {
    const [loading, setLoading] = useState(false);
    //const [onGoingCampagins, setOnGoingCampagins] = useState(second)

    return {
        loading
    }
}