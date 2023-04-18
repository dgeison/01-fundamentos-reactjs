import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'


import './global.css'
import styles from './App.module.css'


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Dgeison Peixoto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Izadora Peixoto"
            content=" Minima ducimus quidem quaerat consequuntur, eveniet perspiciatis accusantium nam velit."
          />
        </main>
      </div>
    </div>
  )
}

