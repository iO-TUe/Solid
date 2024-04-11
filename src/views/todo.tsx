import { For, createSignal, type Component } from 'solid-js'

import { createStore } from 'solid-js/store'
import Counter from "../components/counter"
import Item from "../components/item"
import './todo.css'

const Todo: Component = () => {

    let id = 0
    const [items, setItems] = createStore<{ id: number, text: string }[]>([])
    const [input, setInput] = createSignal('')

    function addItem({ key }: KeyboardEvent) {
        if (key === "Enter" && input()) {
            setItems([...items, { id: id++, text: input() }])
            setInput('')
        }
    }

    function removeItem(rid: number) {
        setItems(items.filter(({ id }) => id !== rid))
    }

    return <>
        <section id="todo">
            <label >
                <h2>Add new item</h2>
                <input id="input" value={input()} onInput={(ev) => setInput(ev.target.value)} onKeyDown={addItem} />
            </label>
            <ul class="list">
                <For each={items}>{(item) =>
                    <Item item={item} remove={removeItem} />
                }</For>
            </ul>
        </section>
        <section id="counters">
            <Counter initialValue={50} maxValue={500} recurse={false} />
        </section>
    </>
}

export default Todo
