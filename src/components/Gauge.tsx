import { Component, createSignal, } from 'solid-js'
import styles from './gauge.module.css'

const Gauge: Component<{ value: number, recurse: boolean }> = (props) => {
  const [bool, setBool] = createSignal(false)

  setTimeout(() => setBool(props.recurse), 0)

  console.log("Script: Gauge")
  return <>
    {console.log("Render: Gauge")}
    <div role='feed' class={styles.wrapper} onclick={() => setBool(true)} >
      <svg viewBox="0 0 120 120" class={styles.gauge}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#335d9c" />
            <stop offset="1000%" stop-color="#90c3e8" />
          </linearGradient>
        </defs>

        <circle r="56" cx="60" cy="60" stroke-width="8" style="fill: #000; stroke: #0000"></circle>

        <circle r="56" cx="60" cy="60" stroke-width="8" class={styles.stroke}
          style={`stroke-dasharray: ${props.value * 3.51}, 351.858;`}
        ></circle>
      </svg>
      <span class={styles.value}>{props.value}</span>
    </div>
    {(bool() && props.value < 100) && <div class="recurse"><Gauge value={props.value + 1} recurse={true} /><Gauge value={props.value + 5} recurse={true} /></div>}
  </>
}

export default Gauge
