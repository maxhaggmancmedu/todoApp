export interface inputProps {
    type: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string
    id?: string,
    name?: string
    className: string
}

