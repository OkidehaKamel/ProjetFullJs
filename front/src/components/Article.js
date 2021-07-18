import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

function Article({ article }) {
    var restored='';
    // array.push(array.splice(array.indexOf(element), 1)[0]);
    // colors.push(colors.splice(colors.indexOf('blue'), 1).pop());
    var checkArticle = article.version[article.version.length-1];
    // if (article.version.length > 1) {
    //     checkArticle = article.version.pop()
    // } else {
    //     checkArticle = article.version[0]
    // }
    const [lastVersion,setLastVersion] = useState(checkArticle);
    const version = article.version;
    console.log(version);

    const deleteArticle=(e)=>{
        axios.delete('/articles/'+article._id)
        document.location.reload()
    }

    const show=(element)=>{
        setLastVersion(element)
    }

    return (
        <div className="border border-secondary rounded">
            <h2 className="text-start title">{lastVersion.title}</h2>
            <div className="d-flex">
                <div className="markdown col-md-9 p-2">
                    <ReactMarkdown children={lastVersion.text} />
                </div>
                <div className="col-md-3 border-start">
                    <div className="d-flex justify-content-around mb-2">
                        <a className="btn btn-info" href={'/article/edit/' + article._id}>Editer</a>
                        <button  type="button" className="btn btn-secondary" onClick={deleteArticle} >Supprimer</button>
                    </div>
                    <div className="border border-1 rounded-top">
                        <h6 className="mt-2">Archives</h6>
                        <ul className="list-group">
                            {(version.length > 0) ?
                                version.map(archive => (
                                    <li className="list-group-item">
                                        V.{version.indexOf(archive)} - {archive.title}
                                        <button type="submit" onClick={()=>show(archive)}>Voir</button>
                                    </li>
                                ))
                                : <li>Pas de version antérieure</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Article;