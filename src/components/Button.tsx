import "./button.css"

export default function Counter(props: { disabled: boolean, fn: Function, sign: string }) {
    return <>
        <button class="button" disabled={props.disabled} onClick={() => props.fn()} aria-label={props.sign} >
            {props.sign}
        </button >
    </>
}
