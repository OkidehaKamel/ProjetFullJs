import React, { useState } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

function ArticleForm({ category, articles, setArticles }) {
    const [inputTitle, setInputTitle] = useState("");
    const [inputAuthor, setInputAuthor] = useState("");
    const [inputText, setInputText] = useState("");
    
    const submitArticle = (e) => {
        e.preventDefault();
        if (inputTitle === '') {
            alert('Veuillez entrer un titre')
        } else {
            setArticles([...articles, { title: inputTitle, author: inputAuthor, text: inputText, categoryid: category._id }])
            const recorded = {
                title: inputTitle,
                author: inputAuthor,
                text: inputText,
                categoryid: category._id,
                slug: slugify(inputTitle)
            }
            axios.post('/articles/new', recorded)
                .then(response => console.log(response.data))
            setInputTitle('')
            setInputAuthor('')
            setInputText('')
        }
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
                {/* <input type="text" id="catID" value={cat._id} className="form-control invisible" /> */}
                <div className="mb-3 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={submitArticle} >Ajouter</button>
                </div>
            </form>
        </div>
    )
}


export default ArticleForm;