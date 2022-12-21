import { useState } from "react";

export default function usePersonalInformationPage() {
    const [birth, setBirth] = useState<Date>(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleConfirm = (date: Date) => {
        setBirth(date);
        setDatePickerVisibility(false);
    };
    return { birth, isDatePickerVisible, setDatePickerVisibility, handleConfirm };
}