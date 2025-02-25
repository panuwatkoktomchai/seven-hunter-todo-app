'use client'

import styles from "./page.module.css";

/** hook */
import { useTodoList } from "@/hooks/todo-list"

/** Components */
import { Stack } from "@/components/stack/stack";
import { TodoCategory } from "@/sections/todo-category";

export default function ToDoList() {

    const { mainList, categorize, getByType, moveBack, moveTopBack } = useTodoList()

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.center}>
                    <Stack direction='row' >
                        <TodoCategory
                            title="Main List"
                            items={mainList}
                            onClickItem={item => categorize(item)}
                        />

                        <TodoCategory
                            title="Fruit List"
                            items={getByType('Fruit')}
                            onClickItem={item => moveBack(item)}
                            onClickColumn={() => moveTopBack('Fruit')}
                            showProgress
                        />

                        <TodoCategory
                            title="Vegetable List"
                            items={getByType('Vegetable')}
                            onClickItem={item => moveBack(item)}
                            showProgress
                            onClickColumn={() => moveTopBack('Vegetable')}
                        />
                    </Stack>
                </div>
            </main>
        </div>
    );
}
