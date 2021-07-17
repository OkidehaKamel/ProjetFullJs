import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

function Article({ article }) {
    // console.log(article.version.pop());
    var checkArticle = '';
    if (article.version.length > 1) {
        checkArticle = article.version.pop()
    } else {
        checkArticle = article.version[0]
    }
    const lastVersion = checkArticle;
    const version = article.version;
    console.log(version);

    // React.render(<ReactMarkdown source={article.text} />, document.getElementById('markdown'))
    return (
        <div className="border border-secondary rounded">
            <h2 className="text-start title">{lastVersion.title}</h2>
            <div className="d-flex">
                <div className="markdown col-md-10 p-2">
                    <ReactMarkdown children={lastVersion.text} />
                </div>
                <div className="col-md-2 border-start">
                    <div className="d-flex justify-content-around mb-2">
                        <a className="btn btn-info" href={'/article/edit/' + article._id}>Editer</a>
                        <button className="btn btn-secondary">Supprimer</button>
                    </div>
                    <div className="border border-1 rounded-top">
                        <h6 className="mt-2">Archives</h6>
                        <ul className="list-group">
                            {(version.length > 0) ?
                                version.map(archive => (
                                    <li className="list-group-item">V.{version.indexOf(archive)} - {archive.title}</li>
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