import React from 'react';

const filters = ({ postsPerPage, setPostsPerPage, change_nb_posts }) => {


    return (
        <div className="nb-of-posts">
            <label for="nb_posts" >Nombres de posts à afficher : </label>
            <input type="text" value={postsPerPage}
                onChange={e => setPostsPerPage(e.target.value)}
                id="nb_posts"
            />
            <button className="button_nb_posts" onClick={change_nb_posts} > Change </button>
        </div>
    )


}
export default filters;