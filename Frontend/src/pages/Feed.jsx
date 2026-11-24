import axios from 'axios'
import { useEffect, useState } from 'react'


const Feed = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/feed/posts')
    .then((res) => {
        setPosts(res.data.posts)
    })
  }, [])
  

  return (
    <section className='feed'>
        {
            posts.length > 0 ? (
                posts.map((post) => {
                    return (
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    )
                })
            ) : (
                <h1>No posts available</h1>
            )
        }
    </section>
  )
}

export default Feed