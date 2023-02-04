import React, { useEffect, useState } from 'react'
import API from '../../Api'
import Comment from '../comment/Comment'

import styles from './post.module.css'

function Post() {
    const [posts, setPosts] = useState([])
    const [clickedPostId, setClickedPostId] = useState(0)


    useEffect(() => {
        API.get().then(
            resp => { setPosts(resp.data)}
        )
    }, [])

    const clickHandler = (identy) =>
    {
        (clickedPostId === identy) ? setClickedPostId(0)
        : setClickedPostId(identy)
    }

    return (
        <div>
            <ul className={styles.list}>
                {posts.map(p =>
                    <li className={p.id === clickedPostId ? styles.active : styles.none} key={p.id}>
                        <div className={styles.title}>
                            <h3>{p.title} </h3>
                            <button onClick={() => clickHandler(p.id)}>Comment</button>
                        </div>
                        {(p.id === clickedPostId) && <Comment comment={p.body} />}
                    </li>
                )}
            </ul>
        </div>
        
    )
}

export default Post