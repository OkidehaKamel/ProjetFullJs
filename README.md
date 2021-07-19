# ProjetFullJs
-------------------------------------------------------------
--------------------ProjetFullStackJS------------------------
-------------------------------------------------------------

---Formation Chef de Projet Digital - Session 2020/2021 ---
---Sanita RATTANASAMAY---
---Kamel AHMED--- 

-------------------------------------------------------------
---Procédure de téléchargement et d'installation du Projet---
-------------------------------------------------------------

  1.- Téléchargement de la solution sur le GitHub ProjetFullJS
          - Onglet Code - Download ZIP
          
  2.- Dezipper le dossier ProjetFullJs
  
  3.- Ouvrir son terminal
  
  4.- Se rendre sur le dossier ProjetFullJs en utilisant la 
      commande cd
    
  5.- Executer la commande npm install mongoose afin d'installer
      le package de base de donnée

  6.- Executer la commande npm run build s'il n'y a pas de répertoire build
      
  7.- Executer la commande npm start afin de lancer l'application
  
  8.- Se rendre sur localhost:5000
  
-------------------------------------------------------------
-------------------------Le Projet---------------------------
-------------------------------------------------------------

Application web en Fullstack JS :  outil de travail collaboratif permettant la création, la
modification et l’illustration de pages web dans une structure centralisée "Wiki".

Le back-office réalisé en Node.js. 

Base de données mongoDB.

Par défaut la base est vide, il faut créer une catégorie pour initialiser la table "catégories", 
puis à partir de la catégorie créée, créer les articles correspondant.

Afin de pouvoir structurer individuellement les articles, les contenus de ces derniers sont rentrés par markdow (https://www.ionos.fr/digitalguide/sites-internet/developpement-web/markdown/ pour utilisation ).

Front-office réalisé avec React. 

Utilisation de Axios pour le requêtage de l’api.

-------------------------------------------------------------
-------------------Fonctionnalités développées---------------
-------------------------------------------------------------
- Ajout, modification et suppression d’articles

-  La catégorisation des articles : 

    . Page listant toutes les catégories

    . Affichage de la liste des articles correspondants au clic de la catégorie
  
- Le versionning :
  Historisation des versions d’un article, visualisation et restauration d'une version

-------------------------------------------------------------
-------------------------API---------------------------------
-------------------------------------------------------------
Get all categories : Method GET '/categories'

Get category by slug : Method GET '/categories/:slug'

Get category by id : Method GET '/categories/:id'  

Create category : Method POST '/categories/new'    

Get all articles : Method GET '/articles'

Get articles by category id : Method GET '/articles/:categoryid'

Create article : Method POST '/articles/new'

Edit article by id : Methode PUT '/articles/edit/:id' 

Delete article by id : Methode DELETE '/articles/:id'


