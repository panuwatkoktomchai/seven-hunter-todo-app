import { useCallback, useEffect, useRef, useState } from "react"

export type TodoListType = {
    type: 'Fruit' | 'Vegetable'
    name: string
    id: number
}

const TODO_LIST: Partial<TodoListType>[] = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]

export function useTodoList() {

    const [selectedItem, setSelectedItem] = useState<TodoListType[]>([])
    const [mainList, setMainList] = useState<TodoListType[]>(TODO_LIST.map((item, i) => ({
        name: item.name!,
        type: item.type!,
        id: i
    })))

    const timers = useRef<{ [key: number]: NodeJS.Timeout }>({})

    const getByType = (type: TodoListType['type']) => {
        return selectedItem.filter(item => item.type === type)
    }

    const categorize = (item: TodoListType) => {
        const timer = setTimeout(() => moveToMainInFiveSec(item), 5000);
        timers.current[item.id] = timer 
        setSelectedItem(prev => [...prev, item])
        setMainList(prev => ([...prev.filter(p => p.id !== item.id)]))
    }

    const moveTopBack = (type: TodoListType['type']) => {
        moveBack(selectedItem.filter(e => e.type === type)[0])
    }

    const moveBack = (item?: TodoListType) => {
        if (!item) return
        if (timers.current[item.id]) {
            clearTimeout(timers.current[item.id]) 
            delete timers.current[item.id]
        }
        setMainList(prev => [...prev, item])
        setSelectedItem(prev => ([...prev.filter(p => p.id !== item.id)]))
    }

    const moveToMainInFiveSec = useCallback((item: TodoListType) => {
        setSelectedItem(prev => [...prev.filter((p) => p.id !== item.id)])
        setMainList(prev => [...prev, item])
    }, [setSelectedItem, setMainList])

    useEffect(() => {
        return () => {
            Object.values(timers.current).forEach(clearTimeout)
        }
    }, [])

    return {
        mainList,
        selectedItem,
        getByType,
        categorize,
        moveBack,
        moveTopBack,
    }
}