import { Button } from "@/components/button";
import { Stack } from "@/components/stack";
import styles from './todo-category.module.css'
import { TodoCategoryType } from "./type";
import { TodoListType } from "@/hooks/todo-list";

export function TodoCategory(props: TodoCategoryType) {
    const { title, items, showProgress, onClickItem, onClickColumn } = props

    const handleClick = (todoItem: TodoListType) => {
        if (onClickItem) onClickItem(todoItem)

    }

    return (
        <div>
            <h3> {title} </h3>
            <div className={styles['todo-list']}>
                <Stack clickAble={Boolean(onClickColumn)} style={{ minHeight: 670 }} onClick={onClickColumn}>
                    {
                        items.map((item) => (
                            <div key={item.id}>
                                <Button style={{ width: '100%' }} onClick={(e) => {
                                    e.stopPropagation()
                                    handleClick(item)
                                }}>
                                    <h2> {item.name} </h2>
                                </Button>
                                {
                                    showProgress &&
                                    <div
                                        className={styles.progress}
                                    />
                                }
                            </div>
                        ))
                    }
                </Stack>
            </div>
        </div>
    )
}