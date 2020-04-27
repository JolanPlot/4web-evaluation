import React from 'react';
import './filters.css'

const filters = ({ postsPerPage, setPostsPerPage, change_nb_posts, Rechercher }) => {

    return (
        <nav>
            <div className="nb-of-posts">
                <label for="nb_posts" > Nombres de posts à afficher : </label>
                <input type="number" value={postsPerPage} min="1"
                    onChange={e => setPostsPerPage(e.target.value)}
                    id="nb_posts"
                />
            </div>
            <div className="search">
                <label for="search" > Recherche : </label>
                <input id="element_rechercher" name="element_rechercher" type="text" size="20" placeholder="Search on site…"></input>

                <button onClick={() => Rechercher()} > Recherche </button>

            </div>



            <div className="radio_button" >
                <label for="Dedicaces">Dédicacés ? </label>
                <label for="Oui" >Oui</label>
                <input type="radio" id="radio_button" value="Oui" checked></input>

                <label for="Non" >Non</label>
                <input type="radio" id="radio_button" value="Non"></input>
            </div>
        </nav>
    )


}
export default filters;