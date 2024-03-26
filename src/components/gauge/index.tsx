import { Component, createSignal, } from 'solid-js'
import styles from './gauge.module.css'

const Gauge: Component<{ value: number, recurse: boolean }> = (props) => {
  const [bool, setBool] = createSignal(false)

  setTimeout(() => setBool(props.recurse), 10)

  return <>
    <div role='feed' class={styles.wrapper} onclick={() => setBool(true)} >
      <svg viewBox="0 0 120 120" class={styles.gauge}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#18B6F6" />
            <stop offset="1000%" stop-color="#AC7FF4" />
          </linearGradient>
        </defs>

        <circle r="56" cx="60" cy="60" stroke-width="8" style="fill: #000; stroke: #0000"></circle>

        <circle
          r="56"
          cx="60"
          cy="60"
          stroke-width="8"
          style={`transform: rotate(-87.9537deg); stroke-dasharray: ${props.value * 3.51
            }, 351.858; fill:none; transform-origin:50% 50%; stroke-linecap:round; stroke:url(#gradient)`}
        ></circle>
      </svg>
      <span class={styles.value}>{props.value}</span>
    </div>
    {(bool() && props.value < 120) && <div class="recurse"><Gauge value={props.value + 1} recurse={true} /><Gauge value={props.value + 5} recurse={true} /></div>}
  </>
}

export default Gauge