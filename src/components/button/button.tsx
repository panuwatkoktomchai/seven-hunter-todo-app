import { ButtonPropTypes } from "./type";
import styles from './button.module.css'


export function Button(props: ButtonPropTypes) {
    const { children, ...other } = props
    return (
        <button
            {...other}
            className={[styles.button, other.className].join(' ')}
        >
            {children}
        </button>
    )
}