export interface IInput {
    name: string,
    type?: string,
    label: string,
    onBlur?: () => void,
    onFocus?: () => void
}
