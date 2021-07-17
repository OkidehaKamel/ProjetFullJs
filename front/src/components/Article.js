import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

function Article({ article }) {
    console.log(article.text)
    // React.render(<ReactMarkdown source={article.text} />, document.getElementById('markdown'))
    return (
        <div className="border border-secondary rounded">
            <h2 className="text-start">{article.title}</h2>
            {/* <p>test2</p> */}
            {/* <div id="markdown">

        </div> */}
            <div className="d-flex">
                <div className="markdown col-md-9 p-2">
                    <ReactMarkdown children={article.text} />
                </div>
                <div className="col-md-3 border-start">
                    <div className="d-flex justify-content-around">
                        <a className="btn btn-info" href={'/article/edit/' + article._id}>Editer</a>
                        <button className="btn btn-secondary">Supprimer</button>
                    </div>
                    <div>
                        <h6 className="mt-4">Archives</h6>
                    </div>

                </div>
            </div>

        </div>
    )

}
export default Article;