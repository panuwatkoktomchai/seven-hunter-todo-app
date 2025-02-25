import styles from './stack.module.css'
import { StackPropTypes } from './type'

export function Stack(props: StackPropTypes) {
    const {
        children,
        direction='column',
        clickAble,
        ...other
    } = props

    const getClassName = (): string => {
        const cls: string[] = [styles.stack]
        if (direction === 'row') {
            cls.push(styles.row)
        } else {
            cls.push(styles.column)
        }
        if (clickAble) {
            cls.push(styles['click-able'])
        }
        return cls.join(' ')
    }
    return (
        <div className={getClassName()} {...other}>
            {children}
        </div>
    )
}