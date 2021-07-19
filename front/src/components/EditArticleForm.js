import React, { useState, useEffect } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

function EditArticleForm({ category, articles, setArticles, article }) {
    const [version, setVersion] = useState(article.version.pop());
    const [inputTitle, setInputTitle] = useState(version.title);
    const [inputAuthor, setInputAuthor] = useState(version.author);
    const [inputText, setInputText] = useState(version.text);

    const submitEditArticle = (e) => {
        e.preventDefault();

        setVersion({ title: inputTitle, author: inputAuthor, text: inputText })
        const prev_version = {
            title: inputTitle,
            author: inputAuthor,
            text: inputText,
            slug: slugify(inputTitle)
        }

        setVersion(prev_version);
        axios.put('/articles/edit/' + article._id, prev_version)
            .then(response => {
                window.history.back()
            })
    }

    return (
        <div>
            <form id="formListArticle" className="">
                <div className="row">
                    <div className="mb-3 d-flex col-md-8 justify-content-between">
                        <label for="title" className="form-label ">Titre :</label>
                        <input type="text" id="title" onChange={(event) => setInputTitle(event.target.value)} value={inputTitle} className="form-control" />
                    </div>
                    <div className="mb-3 d-flex col-md-4 justify-content-between">
                        <label for="author" className="form-label ">Auteur :</label>
                        <input type="text" id="author" onChange={(event) => setInputAuthor(event.target.value)} value={inputAuthor} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 d-flex justify-content-between">
                        <label for="text" className="form-label ">Markdown :</label>
                        <textarea id="text" onChange={(event) => setInputText(event.target.value)} value={inputText} className="form-control"></textarea>
                    </div>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary" onClick={submitEditArticle} >Modifier</button>
                </div>
            </form>
        </div>
    )
}


export default EditArticleForm;