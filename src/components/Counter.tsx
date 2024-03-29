import { createSignal } from "solid-js"
import Button from './Button'
import Gauge from './Gauge'
import styles from './counter.module.css'

export default function Counter(props: { initialValue: number }) {
    const [count, setCount] = createSignal(props.initialValue)
    const add = () => {
        if (count() === 99) celebrate()
        if (count() < 100) setCount(count() + 1)
    }
    const subtract = () => {
        if (count() > 0) setCount(count() - 1)
    }

    // console.log("Script: Counter")

    return <>
        {/* {console.log("Render: Counter")} */}
        <div class={styles['wrapper']}>
            <Button disabled={count() === 0} fn={subtract} sign="-" />
            <Gauge value={count()} recurse={false} />
            <Button disabled={count() === 100} fn={add} sign="+" />
        </div>
    </>
};

export const celebrate = async () => {
    const defaults = {
        spread: 360,
        ticks: 70,
        gravity: 0,
        decay: 0.95,
        startVelocity: 30,
        colors: ['006ce9', 'ac7ff4', '18b6f6', '713fc2', 'ffffff'],
        origin: {
            x: 0.5,
            y: 0.35,
        },
    }

    function loadConfetti() {
        return new Promise<(opts: any) => void>((resolve, reject) => {
            if ((globalThis as any).confetti) {
                return resolve((globalThis as any).confetti as any)
            }
            const script = document.createElement('script')
            script.src =
                'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js'
            script.onload = () => resolve((globalThis as any).confetti as any)
            script.onerror = reject
            document.head.appendChild(script)
            script.remove()
        })
    }

    const confetti = await loadConfetti()

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 80,
            scalar: 1.2,
        })

        confetti({
            ...defaults,
            particleCount: 60,
            scalar: 0.75,
        })
    }

    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
    setTimeout(shoot, 300)
    setTimeout(shoot, 400)
}
