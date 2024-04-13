import { draftMode } from "next/headers";
import { useState } from "react";
import { useImmer } from "use-immer"

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    return [
        value,
        onChange
    ]
}

interface FormInput {
    [key: string]: string;
}
export function useFormData(initialValue: FormInput) {
    const [formData, setFormData] = useImmer<FormInput>(initialValue as FormInput);
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((draftMode => {
            draftMode[e.target.name] = e.target.value
        }))
    };
    return {
        formData,
        onChange,
    };
}