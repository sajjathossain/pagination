import React from 'react'
import '../css/Posts.css'

const Posts = ({ posts, isLoading }) => {

    if(isLoading) {
        return (
            <div className="text-center align-center">
                <div class="spinner-grow text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="row cardRows mb-4">
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className="card imgCard border border-info">
                            <img src={post.url} alt="image" className="rounded" />
                            <h4 className="card-title font-weight-bold m-2 text-success">Post No : {post.id}</h4>
                            <p className="card-title font-weight-bold m-2">{post.title}</p>
                        </div>
                    )
                })
            }            
        </div>
    )
}

export default Posts
