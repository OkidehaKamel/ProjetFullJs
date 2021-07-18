import React from 'react';

function Home({ slug }) {

    return (
        <div className="home">
            <h2 className="text-center">Accueil</h2>
            <h6>Contexte</h6>
            <p>Dans ce projet vous devrez créer une application web en Fullstack JS.</p>
            <p>La partie back devra se faire en NodeJS et MongoDB. La partie Front sous React.</p>
            <p>Le projet se fait par groupe de 2, vous travaillerez sur Github et vous devrez nous donner
                l’url de votre projet comme remise de devoir.</p>

            <h6>Sujet</h6>
            <p>Vous êtes chargés de créer un outil de travail collaboratif permettant la création, la
                modification et l’illustration de pages web dans une structure centralisée - aussi nommé un
                Wiki ;)</p>
            <p>Vous devez gérer à minima :</p>
            <ul>
                <li>l’ajout, la modification, la suppression d’articles</li>
                <li>La catégorisation des articles (Ex: faire une page qui centralise toutes les catégories
                    et afficher la liste des articles correspondants au clic de celle-ci)</li>
                <li>La possibilité de rajouter des tags sur les articles</li>
                <li>La recherche d’articles (par tag, par titre)</li>
                <li>Le versionning : historisation des versions d’un article, restauration de version
                    Documentation</li>
            </ul>

            <p>Vous devrez dans un premier temps définir le contrat d’interface entre le back-office et le
                front-office et vous le reseignerez dans le README.md de votre projet git</p>
            <p>Ce fichier readme servira de documentation au projet.</p>
            <p>La documentation doit contenir plusieurs points :</p>
            <ul>
                <li>Descriptif général</li>
                <li>Descriptif des fonctionnalités développées</li>
                <li>Manuel d’installation</li>
                <li>Documentation API</li>
            </ul>

            <h6>Back-office</h6>
            <p>Le back-office devra être réalisé en Node.js. Les données seront enregistrées dans une
                base mongoDB.</p>
            <p>Par défaut la base sera vide, Vous pouvez prévoir une api qui effectuera un traitement pour
                l’initialiser.</p>
            , par exemple :
            GET /api/v1/setup
            <p>La documentation devra préciser comment initialiser le projet.</p>
            <p>Vous êtes libre sur la structure documentaire à utiliser pour arriver à vos fins.</p>
            <h6>Front-office</h6>
            <p>Le front devra être réalisé avec React. Vous devrez réaliser différents composants pour faire
                votre interface.</p>
            <p>Vous pouvez utiliser Axios (à installer) ou fetch (nativement inclus avec React) pour requêter
                l’api.</p>
            <p>Barème d’évaluation</p>
            <ul>
                <li>Documentation (3 pts)</li>
                <li>Design et ergonomie (3 pts)</li>
                <li>Back-office (7 pts)</li>
                <li>Front-office (7 pts)</li>
            </ul>

        </div>
    )
}
export default Home;
