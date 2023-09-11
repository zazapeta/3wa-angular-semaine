#!/bin/bash

# Tableau contenant les noms des branches à fusionner
branches=("Alexis" "Bryan" "nova" "sami" "Antoine" "fabien")

# Nom de la branche cible
branche_cible="main"

# Se déplacer sur la branche cible
git checkout $branche_cible

# Mettre à jour la branche cible
git pull origin $branche_cible

# Boucle pour fusionner chaque branche
for branche in "${branches[@]}"; do
  # Fusionner la branche dans la branche cible
  git merge "origin/$branche"
done

# Pousser les modifications fusionnées
git push origin $branche_cible