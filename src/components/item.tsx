import type { Component } from 'solid-js'
import './item.css'

const Item: Component<{ item: { id: number, text: string }, remove: (id: number) => void }> = (props) => {
    return <li class="item" data-id={props.item.text}>
        <span>{props.item.text}</span>
        <button onClick={() => props.remove(props.item.id)}>x</button>
    </li>
}

export default Item
