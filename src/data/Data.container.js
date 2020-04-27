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

        console.log("Tri des données dans l'ordre croissant")
    }

    const Rechercher = () => {
        var str = document.getElementById("element_rechercher").value;
        if (str == "") {
            alert("Please enter some text to search!");
            return;
        }

        var supported = false;
        var found = false;
        if (window.find) {        // Firefox, Google Chrome, Safari
            supported = true;
            // if some content is selected, the start position of the search 
            // will be the end position of the selection
            found = window.find(str);
        }
        else {
            if (document.selection && document.selection.createRange) { // Internet Explorer, Opera before version 10.5
                var textRange = document.selection.createRange();
                if (textRange.findText) {   // Internet Explorer
                    supported = true;
                    // if some content is selected, the start position of the search 
                    // will be the position after the start position of the selection
                    if (textRange.text.length > 0) {
                        textRange.collapse(true);
                        textRange.move("character", 1);
                    }

                    found = textRange.findText(str);
                    if (found) {
                        textRange.select();
                    }
                }
            }
        }

        if (supported) {
            if (!found) {
                alert("The following text was not found:\n" + str);
            }
        }
        else {
            alert("Your browser does not support this example!");
        }
    }





    return (


        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Collection</h1>
            <Filters
                setPostsPerPage={setPostsPerPage}
                Rechercher={Rechercher} />

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