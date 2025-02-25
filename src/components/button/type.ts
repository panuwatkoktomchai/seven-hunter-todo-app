import { HTMLAttributes } from "react"

export type ButtonPropTypes = {
    children?: React.ReactNode
    className?: string
} & HTMLAttributes<HTMLButtonElement>