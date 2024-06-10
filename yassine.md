Mini-poc *  :

Back : Nest JS 
Front : Vue.js 2
BDD : PostgreSQL
Git hub 

   Projet :
      - Liste de prof qui propose leurs service 
      - prof cliquable qui affiche leurs service 
      
      - Systémes de connexion Prof et éléves 

      - Un éléve peu suivre un prof




      BDD : 
             users   ENUM = prof , eleve 

             abonnées ( uniquement pour les eleves)


             CREATE TYPE statut AS ENUM (« prof », « eleve ») ;
CREATE TABLE users (
	id SERIAL PRIMARY KEY NOT NULL,
	nom VARCHAR(100),
	prenom VARCHAR(100),
	date_de_naissance DATE,
	email VARCHAR(100),
	motdepasse VARCHAR(100),
	statut ENUM ('prof', 'eleve'),
	date_inscription timestamp
);