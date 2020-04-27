import React, { useState, useEffect } from "react";
import "./Data.css";
import Posts from "./Data"
import axios from 'axios'
import Pagination from './Pagination'
import Filters from './filters'

const EnchanceData = props => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [ChangeSort, SetChangeSort] = useState(true);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://my.api.mockaroo.com/collectionbd.json?key=007a70e0');
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);




    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);




    const tri_croissant_decroissant = () => {

    }




    return (


        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Collection</h1>
            <Filters
                setPostsPerPage={setPostsPerPage} />
            <Posts
                posts={currentPosts}
                loading={loading}
                tri={tri_croissant_decroissant}
                ChangeSort={SetChangeSort}
                SetChangeSort={SetChangeSort}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );


}

export default EnchanceData;