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
      
  6.- Executer la commande npm start afin de lancer l'application
  
  7.- Se rendre sur localhost:5000
  
-------------------------------------------------------------
-------------------------Le Projet---------------------------
-------------------------------------------------------------



-------------------------------------------------------------
-------------------------API---------------------------------
-------------------------------------------------------------
HTTP Method	  URI				             Opération CRUD			      Vue cible
-----------------------------------------------------------------------------------------------------------------------------------
GET		  '/categories'			            Get all categories
GET	  	'/categories/:slug'           Get category by slug
GET	  	'/categories/:id'             Get category by id      
POST    '/categories/new'             Create category 
GET     '/articles'                   Get all articles
GET     '/articles/:categoryid'       Get articles by category id
POST    '/articles/new'               Create article
PUT     '/articles/edit/:id'          Edit article by id
PUT     '/articles/edit-version/:id'  Delete a article version
DELETE  '/articles/:id'               Delete article by id
