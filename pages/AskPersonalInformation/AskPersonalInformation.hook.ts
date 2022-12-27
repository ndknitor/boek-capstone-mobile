import { useState } from "react";
import editIcon from "../../assets/icons//edit.png";

export default function useAskPersonalInformationPage() {
    const [birth, setBirth] = useState<Date>(new Date());
    const [gender, setGender] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleConfirm = (date: Date) => {
        setBirth(date);
        setDatePickerVisibility(false);
    };
    return { birth, isDatePickerVisible, gender, setGender, setDatePickerVisibility, handleConfirm };
}