import { TodoListType } from "@/hooks/todo-list"

export type TodoCategoryType = {
    title: string
    items: TodoListType[]
    showProgress?: boolean
    onClickItem?: (item: TodoListType) => void
    onClickColumn?: VoidFunction
}