import React, { useState, useEffect } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

function EditArticleForm({ category, articles, setArticles,article }) {

    const [inputTitle, setInputTitle] = useState(article.title);
    const [inputAuthor, setInputAuthor] = useState(article.author);
    const [inputText, setInputText] = useState(article.text);
    const [version,setVersion] = useState([]);


    const submitEditArticle = (e) => {
        e.preventDefault();
      
            // setArticles([...articles, { title: inputTitle, author: inputAuthor, text: inputText, categoryid: category._id }])
            const prev_version = {
                title: inputTitle,
                author: inputAuthor,
                text: inputText,
                slug: slugify(inputTitle)
            }

            // useEffect(() => {
            //     // PUT request using axios inside useEffect React hook
            //     const article = { title: 'React Hooks PUT Request Example' };
            //     axios.put('/articles/article/'+article._id, article)
            //         .then(response => console.log(response.data));
            
            // // empty dependency array means this effect will only run once (like componentDidMount in classes)
            // }, []);

            // axios.post('/articles/new', recorded)
            //     .then(response => console.log(response.data))
            // setInputTitle('')
            // setInputAuthor('')
            // setInputText('')
      
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
                   
                        <button type="submit" className="btn btn-primary" onClick={submitEditArticle} >Modifier</button>
                     

                </div>
            </form>
        </div>
    )
}


export default EditArticleForm;