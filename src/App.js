import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Pages from './components/Pages'

const App = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(false)
            const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
            setPosts(res.data)
        }

        fetchData()
    })

    const currentPagePostCount = 50;
    const lastPostIndex = currentPage * currentPagePostCount;
    const firstPostIndex = lastPostIndex - currentPagePostCount;
    const currentPagePosts = posts.slice(firstPostIndex, lastPostIndex)

    const changePosts = (num) => setCurrentPage(num)
    const prevPage = () => currentPage - 1 <= 0 ? currentPage : setCurrentPage(currentPage - 1)
    const nextPage = () => currentPage + 1 > Math.ceil(posts.lenght) ? currentPage : setCurrentPage(currentPage + 1)


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
        <>
            <h1 className='text-white bg-info font-weight-bold rounded p-3 text-center sticky-top'>Posts</h1>
            <p className='container alert alert-info h3 font-weight-bold text-center'>Page : { currentPage }</p>
            <div className="container">
                <Posts posts={ currentPagePosts } isLoading={ isLoading } />
                <Pages postsPerPage={ currentPagePostCount } totalPosts={ posts.length } changePosts={ changePosts } currentPage={ currentPage } nextPage={ nextPage } prevPage={ prevPage }/>
            </div>
        </>
    )
}

export default App
