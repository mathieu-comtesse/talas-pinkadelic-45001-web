# Talas · Pinkadelic 45001 — navigateur

[Jouer dans le navigateur](https://mathieu-comtesse.github.io/talas-pinkadelic-45001-web/)

Clique sur **Jouer** : le jeu passe en plein écran. **Échap** permet d'en sortir. La progression est conservée dans ce navigateur.

Banane ramassable en se tournant automatiquement, quête du singe liée au chapitre4 et étapes explicites dans les douze missions. Gardiens animés au repos/refus/acceptation, passage maintenu fermé pendant leur ouverture. Ennemis orientés sur leur parcours, contacts bloquants, recul et assommage. Contacts des semelles sur les marches visibles et refus des plafonds trop bas corrigés. Même police native avec contours lissés ; orange commun #FF8420 mesuré sur le gilet de Dylan.

Version **0.12.0-web** : Dylan anime l’accueil avec les cinq clips ITEMSEL ; tapement du pied droit et variantes, cadrage natif. Passage du singe après repas, fiches terrain à collecter et surveillance des objets étendue aux six niveaux sources.

Version précédente **0.11.0-web** : banane redressée, trajet continu depuis l’arrivée sur le pont, visibilité vérifiée et sauvegarde incohérente réparée sans effacer la campagne. Indication du pont supérieur à gauche.

Version précédente **0.10.0-web** : chantier avec bombe à mèche native, mur friable et pique-nique pour le chien original PORTE1. Les trois poursuivants surveillent leurs objets respectifs ; vol, portage, retour et dépôt suivent leurs clips natifs et les liaisons du niveau. Le troisième attend l'ouverture de PORTE2. Le chien ajouté Rivet est retiré de ce niveau. Le trajet continu bombe→mur est vérifié avec les ennemis et le moteur réels ; les autres interactions utilisent des préparations isolées.

Le paquebot Luxitania, 134 modèles natifs, 397 animations, 1 879 pièces aux positions sources, cachettes, transferts entre sous-scènes, Planivore bureaucrate et Aurélien/T-rex au Leadership sont conservés. Les trois courses se terminent sur leur clé native. Les textes et objets portent les thèmes des sept chapitres ISO45001 ; les 74 échanges SST sont conservés.

Les nouvelles prises et déposes de Dylan utilisent les phases natives retargetées sur ses os existants. Son lancer est une gestuelle adaptée. Les portes demandent leurs objets correspondants ; les points faibles des boss, dégâts, cœurs et murs friables ont des actions physiques jouables. Le délai d’audit reste évalué à 45 minutes, mais ne bloque plus l’exploration après son expiration.

Le rendu conserve la palette rose convertie en orange au rendu, Boulon avec atlas256×256/portrait64×64 et Aurélien à la place du T-rex bleu, avec son squelette et 11 animations. Rendu du monde512×240pixels en plein écran sans lissage. Le chien original du chantier est identifié dans ITEM04.PIN : modèle70/PORTE1, 128 sommets sources, 169 triangles, 17 os et quatre animations.

Versions précédentes : jambes séparées et vêtements corrigés pour les 10 personnages, Dylan équipé de rollers dans les trois pistes, transparences des 12 décors et du domaine réparées. Police bitmap originale, menus textuels sans cadres ajoutés, couleurs et sélection pulsée natives. Freinage, super-saut et vitesses rollers corrigés par comparaison avec le code MIPS. Déplacements sur les parcours natifs à 30 Hz, introduction Talas en quatre plans, portes du domaine, autorisations et trajets des tuyaux. Les 74 évaluations ISO 45001 et la sauvegarde sont conservées.

Q/D ou flèches gauche/droite : suivre le parcours ; Espace : saut et second saut après relâchement ; Ctrl, S ou flèche bas : accroupi ; E ou Haut : passage ; E : livrer/parler ; R : prendre/déposer ; C : cachette ; F : frapper/lancer ; H : domaine ; M : carnet ; L : documents.

Ce dépôt contient la compilation Web. Les sources Unity/Blender et les preuves de validation sont dans le [dépôt séparé](https://github.com/mathieu-comtesse/talas-pinkadelic-45001). La version Windows v0.1.0 conserve son ancien rendu.

Les tests vérifient les 12 chargements, les commandes, les 12 interactions de porte, les verrouillages, les deux tuyaux du domaine, 18 interactions physiques supplémentaires, le plein écran et la sauvegarde. Les trois lancers contre Aurélien partent de positions des rails jouables. Les préparations de scène ne prouvent pas le transport continu entre ces points ni un parcours humain complet. L’audit du bateau couvre403/405segments ; tous les objets nécessaires aux objectifs sont proches d’un rail accessible dans le graphe des douze niveaux. Tous les espaces, les IA, les pièges, les trajectoires de lancer depuis les rails et les séquences originales ne sont pas encore certifiés identiques de A à Z. Les horaires d’attaque et la balistique des boss sont des adaptations Talas. L'introduction est une adaptation Talas ; les smartphones ne disposent pas encore de commandes tactiles.
