import { h, render } from '@mow/react'

const Application = <div>
  <h1>Hello world</h1>
  <div>Div With other content</div>
</div>
const container = document.getElementById('app')

render(container)(Application)
