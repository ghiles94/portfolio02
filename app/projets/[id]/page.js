"use client";

import { useRouter } from "next/navigation";
const projets = [
  {
    id: 1,
    titre: "Projet en C# ",
    description:
      "Développement d'une application en C# avec pour objectif de gérer les commandes d’un restaurant",
    image: "/csharp.png",
    technologies: "C#, .NET, SQL Server",
    role: "Programmation des fonctionnalités principales, conception de l'architecture logicielle.",
  },
  {
    id: 2,
    titre: "Projet avec Express et Vue.js ",
    description:
      "Création d'une application web complète utilisant Express pour le backend et Vue.js pour le frontend. L'application permettait de gérer une pizzeria autant que gestionnaire.",
    image: "/vue.png",
    technologies: "Express, Vue.js, MongoDB",
    role: "Implémentation des routes, création des modèles de données, conception des interfaces utilisateur",
  },
  {
    id: 3,
    titre: "Projet avec React",
    description:
      "Réalisation d'un projet utilisant React pour créer une interface utilisateur réactive et dynamique. L'objectif était de créer une page portfolio qui contient une interface plus des compétences qui aide à la recherche d’un emploi.",
    image: "/react.png",
    technologies: "React, HTML, CSS, JavaScript",
    role: "Création des composants, gestion de l'état, intégration des API.",
  },
];

function page({ params: { id } }) {
  return (
    <div className="projet">
      <div className="projetContainer">
        <h1 className="projetTitle">{projets[id - 1].titre}</h1>
        <img
          src={projets[id - 1].image}
          alt={projets[id - 1].titre}
          className="projetImage"
        />
        <p className="projetDescription">{projets[id - 1].description}</p>
        <p className="projetTechnologies">
          <span className="projetTechnologiesTitle">Technologies: </span>
          {projets[id - 1].technologies}
        </p>
        <p className="projetRole">
          <span className="projetRoleTitle">Rôle: </span>
          {projets[id - 1].role}
        </p>
      </div>
    </div>
  );
}

export default page;
