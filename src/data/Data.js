import React from "react";
import "./Data.css";


const Array = ({
    nbElements,
    setNbElements
}) => (
        <>
            <div className="array">
                <table>
                    <thead>
                        <tr>
                            <td>SERIE</td>
                            <td>ALBUM</td>
                            <td>AUTEUR</td>
                            <td>EDITEUR</td>
                            <td>ANNEE</td>
                            <td>ETAT</td>
                            <td>DEDICACE</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )


export default Array;