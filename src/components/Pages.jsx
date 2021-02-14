import React from 'react'
import '../css/Pages.css'

const Pages = ({postsPerPage, totalPosts, changePosts, currentPage, nextPage, prevPage}) => {

    const pagesNumber = []
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pagesNumber.push(index)        
    }

    return (
        <div className=" mb-3">
            <div className="d-flex flex-row mb-3 p-1 justify-content-center h4">
                <button onClick={prevPage} type="button" className="btn btn-info p-2 m-2 rounded btn-block">Prev</button>
                <button onClick={nextPage} type="button" className="btn btn-info p-2 m-2 rounded btn-block"> Next </button>
            </div>
            <div className="pagesContainer">
                {
                    pagesNumber.map((num) => {
                        return (
                            <button key={num} className={`p-2 btn ${num === currentPage ? "btn-dark" : "btn-info"} `} onClick={() => changePosts(num)}>{num}</button>
                        )
                    })
                }
            </div>
        </div>        
    )
}

export default Pages
