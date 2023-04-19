import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/dgeison.png",
      name: "Dgeison Peixoto",
      role: "Data Scientist",
    },
    content: [
      {
        type: "paragraph",
        content:
          "🐍💻📊 - para representar a linguagem Python e sua aplicação em análise de dados",
      },
      {
        type: "paragraph",
        content:
          " - para representar a grande comunidade de desenvolvedores trabalhando juntos na melhoria da linguagem Python",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-17 22:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/67557314?v=4",
      name: "Izadora Peixoto",
      role: "Desenvolvedora Back-end",
    },
    content: [
      {
        type: "paragraph",
        content:
          "🐍💻📊 - para representar a linguagem Python e sua aplicação em análise de dados",
      },
      {
        type: "paragraph",
        content:
          " - para representar a grande comunidade de desenvolvedores trabalhando juntos na melhoria da linguagem Python",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2021-03-10 22:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
