import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/dgeison.png" alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Geison</strong>
                            <time title='22 de março às 22:30h' dateTime='2023-04-09 22:30:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentários'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer >
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}