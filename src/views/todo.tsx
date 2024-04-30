import { For, type Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import Counter from "../components/counter.gen"
import Item from "../components/item"
import './todo.css'

const Todo: Component = () => {
    let id = 0
    const [items, setItems] = createStore<{ id: number, text: string }[]>([])

    function addItem({ key, target }: KeyboardEvent) {
        if (key === "Enter" && (target as HTMLInputElement).value) {
            setItems([...items, { id: id++, text: (target as HTMLInputElement).value }]);
            (target as HTMLInputElement).value = ''
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    return <>
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input id="input" onKeyUp={addItem} />
            </label>
            <ul class="list">
                <For each={items}>{(item) =>
                    <Item item={item} remove={removeItem} />
                }</For>
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={5} recurse={false} />
        </section>
    </>
}

export default Todo
