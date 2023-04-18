import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {

    const publishedAtFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='22 de março às 22:30h' dateTime='2023-04-09 22:30:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>🐍💻📊 - para representar a linguagem Python e sua aplicação em análise de dados</p>
                <p> - para representar a grande comunidade de desenvolvedores trabalhando juntos na melhoria da linguagem Python</p>
                <p>🤝{' '}<a href="#">aplicativos.</a></p>
                <p>
                    <a href="#">#novoaplicativo</a>{' '}
                    <a href="#">#datascience</a>{' '}
                    <a href="#">#portifolio</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />

            </div>

        </article>
    )
}