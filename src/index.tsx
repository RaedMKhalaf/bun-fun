import {useState} from 'react'
import { createRoot } from 'react-dom'

const root = createRoot(document.getElementById('root'))

const App = () => {
    const [count, setCount] = useState(0)
    return (
    <div>
        <h1>Hello World</h1>
        <div>
            Current count is {count}
        </div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
    )
}

root.render(<App />)

