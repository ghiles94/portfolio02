import Link from "next/link";

function page() {
  const projets = [
    {
      id: 1,
      titre: "Projet en C# ",
      description:
        "Développement d'une application en C# avec pour objectif de gérer les commandes d’un restaurant",
      image: "/csharp.png",
    },
    {
      id: 2,
      titre: "Projet avec Express et Vue.js ",
      description:
        "Création d'une application web complète utilisant Express pour le backend et Vue.js pour le frontend. L'application permettait de gérer une pizzeria autant que gestionnaire.",
      image: "/vue.png",
    },
    {
      id: 3,
      titre: "Projet avec React",
      description:
        "Réalisation d'un projet utilisant React pour créer une interface utilisateur réactive et dynamique. L'objectif était de créer une page portfolio qui contient une interface plus des compétences qui aide à la recherche d’un emploi.",
      image: "/react.png",
    },
  ];

  return (
    <div className="projets">
      <div className="projetsContainer">
        <h1 className="projetsTitle">Projets</h1>
        <div className="projetsCards">
          {projets.map((projet) => (
            <Link
              href={`/projets/${encodeURIComponent(projet.id)}`}
              className="projetsCardLink"
            >
              <div key={projet.id} className="projetsCard">
                <div className="projetsCardImage">
                  <img src={projet.image} alt={projet.titre} />
                </div>
                <h3>{projet.titre}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
