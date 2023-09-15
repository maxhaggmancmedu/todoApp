export interface formProps {
    handleSubmit: (e: React. FormEvent<HTMLFormElement>) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    todo: string, 
    className: string
}