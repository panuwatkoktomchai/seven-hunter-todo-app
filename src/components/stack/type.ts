import { HTMLAttributes } from "react"

export type StackPropTypes = {
    children: React.ReactNode
    /** 
     * Flex-direction fot display flex, Default value is column
     */
    direction?: 'row' | 'column'
    clickAble?: boolean
} & HTMLAttributes<HTMLDivElement>