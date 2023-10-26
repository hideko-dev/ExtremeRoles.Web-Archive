import './css/global.css'
import App from './app.svelte'
import "svelte-ripple-action/ripple.css"

const app = new App({
  target: document.getElementById('app'),
})

export default app
