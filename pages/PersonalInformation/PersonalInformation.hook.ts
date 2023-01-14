import { useState } from "react";

export default function usePersonalInformationPage() {
    const [birth, setBirth] = useState<Date>(new Date());
    const [gender, setGender] = useState(false);
    return {
        input:
        {
            birth: {
                birth,
                setBirth
            },
            gender:
            {
                gender,
                setGender
            }
        }
    };
}