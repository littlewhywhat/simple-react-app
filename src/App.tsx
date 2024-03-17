import { Button, Flex } from 'antd'
import { useState } from 'react'
import { increment } from './utils'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex justify="center" align="center">
        <Button onClick={() => setCount(increment)}>
          count is {count}
        </Button>
      </Flex>
    </>
  )
}
