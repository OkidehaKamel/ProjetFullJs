import React, { useState, useEffect } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

function EditArticleForm({ category, articles, setArticles, article }) {
    const [version, setVersion] = useState(article.version.pop())
    const lastVersion = article.version.pop()
    const [inputTitle, setInputTitle] = useState(version.title);
    const [inputAuthor, setInputAuthor] = useState(version.author);
    const [inputText, setInputText] = useState(version.text);
    const [articleToEdit, setArticleToEdit]=useState(article);
    // const [currentVersion,setCurrentVersion] = useState(article.version.pop());
    // const[version,addVersion]=useState(article.version);



    const submitEditArticle = (e) => {
        e.preventDefault();

        // setArticles([...articles, { title: inputTitle, author: inputAuthor, text: inputText, categoryid: category._id }])
        setVersion({ title: inputTitle, author: inputAuthor, text: inputText })
        const prev_version = {
            title: inputTitle,
            author: inputAuthor,
            text: inputText,
            slug: slugify(inputTitle)
        }
        setVersion(prev_version);
        console.log(prev_version);
        // setArticleToEdit()
        const dataUpdate = {
            // title: inputTitle,
            // author: inputAuthor,
            // text: inputText,
            // categoryid: article.categoryid,
            // slug: slugify(inputTitle)
            title: version.title,
            author: version.author,
            text: version.text,
            slug: slugify(version.title)
        }
        console.log(dataUpdate);
        console.log(article._id);
        axios.put('/articles/edit/' + article._id, prev_version)
            .then(response => {
                console.log(response.data)
                if (response.data) {
                    alert("Données modifiées")
                    document.location.reload()
                    // setInputTitle(version.title)
                    // setInputAuthor(version.author)
                    // setInputText(version.text)
                }
            })
            .catch(error => {
                alert("données non modifiées")
            })
        // setVersion(article.version.push(prev_version))
        // console.log(article.version)
        // useEffect(() => {
        //     // PUT request using axios inside useEffect React hook
        //     const article = { title: 'React Hooks PUT Request Example' };
        //     axios.put('/articles/article/'+article._id, article)
        //         .then(response => console.log(response.data));

        // // empty dependency array means this effect will only run once (like componentDidMount in classes)
        // }, []);

        // useEffect(() => {
        // axios.put('/articles/article/'+article._id, article)
        //     .then(response => console.log(response.data));
        // db.animal.update(
        //     { "_id": "100" },
        //     {
        //         $push: {
        //             animalArray: "cat"
        //         }
        //     }
        // );
        // .then(response=>response.data.version);
        // }, []);

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
                        {/* <input type="text" id="title" onChange={(event) => setInputTitle(event.target.value)} value={currentVersion.title} className="form-control" /> */}
                    </div>
                    <div className="mb-3 d-flex col-md-4 justify-content-between">
                        <label for="author" className="form-label ">Auteur :</label>
                        <input type="text" id="author" onChange={(event) => setInputAuthor(event.target.value)} value={inputAuthor} className="form-control" />
                        {/* <input type="text" id="author" onChange={(event) => setInputAuthor(event.target.value)} value={currentVersion.author} className="form-control" /> */}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 d-flex justify-content-between">
                        <label for="text" className="form-label ">Markdown :</label>
                        <textarea id="text" onChange={(event) => setInputText(event.target.value)} value={inputText} className="form-control"></textarea>
                        {/* <textarea id="text" onChange={(event) => setInputText(event.target.value)} value={currentVersion.text} className="form-control"></textarea> */}
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