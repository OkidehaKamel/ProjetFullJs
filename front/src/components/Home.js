import React from 'react';

function Home({ slug }) {

    return (
        <div className="home">
            <h2 className="text-center">Accueil</h2>
            <h4>ProjetFullStackJS</h4>
            <p>Formation Chef de Projet Digital - Session 2020/2021</p>
            <p>Sanita RATTANASAMAY</p>
            <p>Kamel AHMED</p>

            <h4>Procédure de téléchargement et d'installation du Projet</h4>
            <p>Télécharger et dézipper l'application à partir de gitHub ProjetFullJS</p>

            <ol>
                <li>Executer la commande npm install mongoose afin d'installer le package de base de donnée</li>
                <li>Executer la commande npm run build s'il n'y a pas de répertoire build</li>
                <li>Executer la commande npm start afin de lancer l'application</li>
                <li>Se rendre sur localhost:5000</li>
            </ol>

            <h4>Le Projet</h4>
            <p>Application web en Fullstack JS :  outil de travail collaboratif permettant la création, la modification et l’illustration de pages web dans une structure centralisée "Wiki".</p>
            <p>Le back-office réalisé en Node.js.</p>
            <p>Base de données mongoDB.</p>
            <p>Par défaut la base est vide, il faut créer une catégorie pour initialiser la table "catégories", puis à partir de la catégorie créée, créer les articles correspondant.</p>
            <p>Afin de pouvoir structurer individuellement les articles, les contenus de ces derniers sont rentrés par markdow (https://www.ionos.fr/digitalguide/sites-internet/developpement-web/markdown/ pour utilisation ).</p>
            <p>Front-office réalisé avec React. </p>
            <p>Utilisation de Axios pour le requêtage de l’api.</p>

            <h4>Fonctionnalités développées</h4>
            <ul>
                <li>Ajout, modification et suppression d’articles</li>
                <li>La catégorisation des articles :
                    <ul>
                        <li>Page listant toutes les catégories</li>
                        <li>Affichage de la liste des articles correspondants au clic de la catégorie</li>
                    </ul>
                </li>
                <li>Le versionning : Historisation des versions d’un article, visualisation et restauration d'une version</li>
            </ul>

            <h4>API</h4>
            <ul>
                <li>Get all categories : Method GET '/categories'</li>
                <li>Get category by slug : Method GET '/categories/:slug'</li>
                <li>Get category by id : Method GET '/categories/:i</li>
                <li>Create category : Method POST '/categories/new' </li>
                <li>Get all articles : Method GET '/articles'</li>
                <li>Get articles by category id : Method GET '/articles/:categoryid'</li>
                <li>Create article : Method POST '/articles/new'</li>
                <li>Edit article by id : Methode PUT '/articles/edit/:id' </li>
                <li>Delete article by id : Methode DELETE '/articles/:id'</li>
            </ul>


        </div>
    )
}
export default Home;
