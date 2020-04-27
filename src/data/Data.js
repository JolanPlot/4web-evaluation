import React from "react";
import "./Data.css";


const haut = String.fromCharCode(0x2191)
const bas = String.fromCharCode(0x2193)

const Posts = ({ posts, loading, tri, ChangeSort, SetChangeSort }) => {
    if (loading) {
        return <h2>Chargement des données...</h2>;
    }

    return (
        <>

            <div className="background_data"></div>
            <table className='table mb-4'>
                <tr>
                    <th>Album {<button className="Button_Sort_Album" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
                    <th>Auteur {<button className="Button_Sort_Auteur" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
                    <th>Editeur {<button className="Button_Sort_Editeur" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
                    <th>Etat {<button className="Button_Sort_Etat" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
                    <th>Annee {<button className="Button_Sort_Annee" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
                    <th>Dedicace {<button className="Button_Sort_Dedicace" onClick={() => SetChangeSort(!ChangeSort)} > {ChangeSort ? haut : bas} </button>} </th>
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

        </>

    );
};


export default Posts;