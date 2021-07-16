import React, { useState } from 'react';
import axios from 'axios';
import slugify from 'react-slugify';

function CategoryForm({ elements, setElements }) {
    const [inputName, setInputName] = useState("");
    const [inputImage, setInputImage] = useState("");

    const submitCat = (e) => {
        e.preventDefault();

        if (inputName === '') {
            alert('Veuillez entrer un nom de catégorie')
        } else {
            var check_category = elements.filter(element => (element.name == inputName));
            if (check_category.length > 0) {
                alert('Cette catégorie existe déjà')
            }else{                
                setElements([...elements, { name: inputName, image: inputImage }])
                const recorded = {
                    name: inputName,
                    image: inputImage,
                    slug: slugify(inputName)
                }
                axios.post('/categories/new', recorded)
                    .then(response => console.log(response.data))
                setInputName('')
                setInputImage('')
            }
        }
    }

    return (
        <div>
            <form id="formList" className="d-flex">
                <div className="mb-3 d-flex col-md-5 justify-content-around">
                    <label for="name" className="form-label ">Nom :</label>
                    <input type="text" id="name" onChange={(event) => setInputName(event.target.value)} value={inputName} className="form-control" />

                </div>
                <div className="mb-3 d-flex col-md-5 justify-content-around">
                    <label for="image" className="form-label ">Image :</label>
                    <input type="text" id="image" onChange={(event) => setInputImage(event.target.value)} value={inputImage} className="form-control" />

                </div>
                <div className="mb-3 d-flex col-md-2">
                    <button type="submit" className="btn btn-primary" onClick={submitCat} >Ajouter</button>
                </div>
            </form>
        </div>
    )
}

// class CategoryForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: '',
//             image: ''
//         }
//         this.changeName=this.changeName.bind(this)
//         this.changeImage=this.changeImage.bind(this)
//         this.onSubmit=this.onSubmit.bind(this)
//     }

//     changeName(e){
//         this.setState({
//             name:e.target.value
//         })
//     }
//     changeImage(e){
//         this.setState({
//             image:e.target.value
//         })
//     }

//     onSubmit(e){
//         e.preventDefault()
//         const recorded ={
//             name:this.state.name,
//             image:this.state.image
//         }
//         axios.post('/categories/new',recorded)
//         .then(response=> console.log(response.data))
//         this.setState({
//             name: '',
//             image: ''
//         })
//         window.location = '/categories'
//         // window.history.back()

//     }
//     render() {
//         return (
//             <div>
//                 <form id="formList" className="d-flex"onSubmit={this.onSubmit}>
//                     <div className="mb-3 d-flex col-md-5 justify-content-around">
//                         <label for="name" className="form-label ">Nom :</label>
//                         <input type="text" id="name" onChange={this.changeName} value={this.state.name} className="form-control" />                        
//                     </div>
//                     <div className="mb-3 d-flex col-md-5 justify-content-around">
//                         <label for="image" className="form-label ">Image :</label>
//                         <input type="text" id="image" onChange={this.changeImage} value={this.state.image} className="form-control" /> 
//                     </div>
//                     <div  className="mb-3 d-flex col-md-2">
//                         <button type="submit" className="btn btn-primary" id="addTask" className="" >Ajouter</button>
//                     </div>                    
//                 </form>
//             </div>
//         )
//     }
// }

export default CategoryForm;