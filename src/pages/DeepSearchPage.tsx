import React, { useState } from "react";
import styles from "./DeepSearchPage.module.css";

export function DeepSearchPage() {
  return (
    <div className={styles["formulaire-container"]}>
      <Formulaire />
    </div>
  );
}

function Formulaire() {
  const [nomOeuvre, setNomOeuvre] = useState("");
  const [nomAuteur, setNomAuteur] = useState("");
  const [departement, setDepartement] = useState("");
  const [miseEnValeur, setMiseEnValeur] = useState(false);

  const handleNomOeuvreChange = (e) => {
    setNomOeuvre(e.target.value);
  };

  const handleNomAuteurChange = (e) => {
    setNomAuteur(e.target.value);
  };

  const handleDepartementChange = (e) => {
    setDepartement(e.target.value);
  };

  const handleMiseEnValeurChange = (e) => {
    setMiseEnValeur(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez traiter les données du formulaire, par exemple les envoyer à un serveur
    console.log({
      nomOeuvre,
      nomAuteur,
      departement,
      miseEnValeur,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nom de l'oeuvre:
          <input
            type="text"
            value={nomOeuvre}
            onChange={handleNomOeuvreChange}
          />
        </label>
      </div>
      <div>
        <label>
          Nom de l'auteur:
          <input
            type="text"
            value={nomAuteur}
            onChange={handleNomAuteurChange}
          />
        </label>
      </div>
      <div>
        <label>
          Département:
          <select value={departement} onChange={handleDepartementChange}>
            <option value="">Choisissez un département</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Mise en valeur:
          <input
            type="checkbox"
            checked={miseEnValeur}
            onChange={handleMiseEnValeurChange}
          />
        </label>
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}
