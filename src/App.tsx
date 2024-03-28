import type { Component } from 'solid-js'
import styles from './App.module.css'
import Counter from './components/Counter'
import Header from './components/headertmp'

const App: Component = () => {
  console.log('Script: App')
  return <>
    {console.log('Render: App')}
    <div class="App">
      <Header />
      <main class={styles["App-main"]}>
        <Counter initialValue={95} />
      </main>
    </div>
  </>
}

export default App
