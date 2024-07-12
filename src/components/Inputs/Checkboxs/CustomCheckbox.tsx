import { Checkbox, CheckboxProps } from "@mui/material";

export type CustomCheckboxProps = CheckboxProps & {
    onFlattenedChange?(checked: boolean): void
}

export function CustomChecbox(props: CustomCheckboxProps) {
    return <Checkbox {...props} onChange={(event, checked) => {
        props.onChange?.(event, checked)
        props.onFlattenedChange?.(checked)
    }} />
}  