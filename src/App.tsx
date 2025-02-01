import './App.css'
import Counter from './features/counter/Counter'
import { AddPost } from './features/posts/AddPost'
import Posts from './features/posts/Posts'

function App() {
  return (
    <>
      <Counter></Counter>
      <hr/>
      <AddPost></AddPost>
      <Posts></Posts>
    </>
  )
}

export default App
