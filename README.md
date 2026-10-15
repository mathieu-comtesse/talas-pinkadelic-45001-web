# Talas · Pinkadelic 45001 — navigateur

[Jouer dans le navigateur](https://mathieu-comtesse.github.io/talas-pinkadelic-45001-web/)

Clique sur **Jouer** : le jeu passe en plein écran. **Échap** permet d'en sortir. La progression est conservée dans ce navigateur.

Version **0.6.0-web** : palette rose convertie en orange au rendu, Boulon avec atlas256×256/portrait64×64 et Aurélien à la place du T-rex bleu, avec son squelette et 11 animations. Rendu du monde512×240pixels en plein écran sans lissage. Le chien déjà présent est conservé, son origine PS1 reste à vérifier.

Versions précédentes : jambes séparées et vêtements corrigés pour les 10 personnages, Dylan équipé de rollers dans les trois pistes, transparences des 12 décors et du domaine réparées. Police bitmap originale, menus textuels sans cadres ajoutés, couleurs et sélection pulsée natives. Freinage, super-saut et vitesses rollers corrigés par comparaison avec le code MIPS. Déplacements sur les parcours natifs à 30 Hz, introduction Talas en quatre plans, portes du domaine, autorisations et trajets des tuyaux. Les 74 évaluations ISO 45001 et la sauvegarde sont conservées.

Q/D ou flèches gauche/droite : suivre le parcours ; Espace : saut et second saut après relâchement ; Ctrl, S ou flèche bas : accroupi ; E ou Haut : porte ; E : parler ; R : prendre/déposer ; H : domaine ; M : carnet ; L : documents.

Ce dépôt contient la compilation Web. Les sources Unity/Blender et les preuves de validation sont dans le [dépôt séparé](https://github.com/mathieu-comtesse/talas-pinkadelic-45001). La version Windows v0.1.0 conserve son ancien rendu.

Les tests vérifient les 12 chargements, les commandes, les 12 interactions de porte, les verrouillages, les deux tuyaux du domaine, le plein écran et la sauvegarde. La couverture des parcours est consignée dans les sources : tous les espaces, les collisions contextuelles, les plateformes mobiles et l'IA des boss ne sont pas encore certifiés identiques au jeu original. L'introduction est une adaptation Talas ; les smartphones ne disposent pas encore de commandes tactiles.
