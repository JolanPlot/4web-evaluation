import React from "react";
import "./Data.css";


const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Chargement des données...</h2>;
    }

    return (
        <table className='table mb-4'>
            <tr>
                <th>Album</th>
                <th>Auteur</th>
                <th>Editeur</th>
                <th>Etat</th>
                <th>Annee</th>
                <th>Dedicace</th>
            </tr>


            {posts.map(post => (
                <tr>
                    <td key={post.id} className='group-item'>
                        {post.Album}

                    </td>
                    <td>
                        {post.Auteur}
                    </td>
                    <td>
                        {post.Editeur}
                    </td>
                    <td>
                        {post.Etat}
                    </td>
                    <td>
                        {post.Annee}
                    </td>
                    <td>
                        {post.Dedicace}
                    </td>

                </tr>
            ))}
        </table>
    );
};


export default Posts;