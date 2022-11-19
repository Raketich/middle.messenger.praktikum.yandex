export interface IButton {
    type: string;
    label: string;
    onClick?: () => void;
    events: Record<string, () => void>
}
