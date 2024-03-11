import { useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <span class='text-xl'>{counter}</span>
      <button
        onClick={() => setCounter((counter) => counter + 1)}
        class='text-2xl font-extrabold'
      >
        +
      </button>
      <button
        onClick={() => setCounter((counter) => counter - 1)}
        class='text-2xl font-extrabold'
      >
        -
      </button>
    </>
  )
}
