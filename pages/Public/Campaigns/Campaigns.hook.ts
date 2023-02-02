import { useState } from "react";

export default function useCampaignsPage() {
    const [loading, setLoading] = useState(false);

    return {
        loading
    }
}