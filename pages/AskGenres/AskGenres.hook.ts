import { useState } from "react";

export default function useAskGenrePage() {
    const [searchMessage, setSearchMessage] = useState("Không tìm thấy thể loại bạn tìm kiếm");

    return { searchMessage };
}