import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => {
  return 'Hello world'
})

app.listen(3333, () => {
  console.log('HTTP Server running')
})
