import "./button.css"

export default function Counter(props: { disabled: boolean, fn: Function, sign: string }) {
    // console.log(`Script: "${props.sign}" Button`)

    return <>
        {/* {console.log(`Render: "${props.sign}" Button`)} */}
        <button class="button" disabled={props.disabled} onClick={() => props.fn()} aria-label={props.sign} >
            {props.sign}
        </button >
    </>
}
