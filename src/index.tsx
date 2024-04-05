/* @refresh reload */
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import Counter from './components/counter'
import Header from './components/header'
import './index.css'

render(() =>
  <div class="App">
    <Header />
    <main class="App-main">
      <Router>
        <Route path='/load' component={() => <Counter initialValue={50} maxValue={1000} recurse={false} />} />
        <Route path='/' component={() => <Counter initialValue={80} maxValue={13} recurse={true} />} />
      </Router>
    </main>
  </div>
  , document.getElementById('app')!)
