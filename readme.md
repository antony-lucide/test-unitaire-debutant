# Introduction aux Tests Unitaires avec Illustrations

Ce guide explique les différentes façons de réaliser un test unitaire, en illustrant chaque étape avec des images situées dans le dossier `image`.  
Les photos utilisées sont : `npm.png`, `jest.png`, `failed.png`, `pass.png`.

---

## Qu’est-ce qu’un test unitaire ?

Un test unitaire est une méthode de test logiciel qui consiste à vérifier qu’une unité de code (fonction, méthode, module) fonctionne comme prévu, de façon isolée.  
Il s’agit du premier niveau de test dans le cycle de développement logiciel, généralement automatisé et écrit par les développeurs.

---

## Pourquoi écrire des tests unitaires ?

- Garantir la qualité et la robustesse du code
- Détecter rapidement les bugs lors du développement
- Faciliter la maintenance et l’évolution du code
- Documenter le comportement attendu des fonctions

---

## Bonnes pratiques pour les tests unitaires

- **Indépendance** : chaque test doit pouvoir s’exécuter seul, sans dépendre d’autres tests.
- **Lisibilité** : nommer les tests de façon explicite (méthode_scenario_résultatAttendu).
- **Simplicité** : tester un seul comportement par test, avec des cas minimalistes.
- **Automatisation** : privilégier l’automatisation pour des retours rapides et fiables.
- **Pas de logique dans les tests** : éviter les conditions ou boucles dans le code de test.

---

## Étapes pour réaliser un test unitaire

### 1. Installer les dépendances

Utilisez un gestionnaire de paquets comme npm pour installer les outils de test (ex : Jest).

![npm install](./image/npm.png)


---

### 2. Écrire un test unitaire

Respectez le modèle Arrange/Act/Assert pour structurer vos tests :

- **Arrange** : préparer les objets nécessaires
- **Act** : exécuter la méthode à tester
- **Assert** : vérifier le résultat obtenu


---

### 3. Lancer les tests avec Jest

![jest run](./image/jest.png)


---

### 4. Interpréter les résultats

#### Succès : tous les tests passent

![tests réussis](./image/pass.png)

#### Échec : un ou plusieurs tests échouent

![tests échoués](./image/failed.png)

Corrigez le code jusqu’à ce que tous les tests passent.

---

## Gérer les imports d’images dans les tests

Si votre code importe des images (ex : `import logo from './image/npm.png'`), Jest peut échouer car il ne sait pas interpréter les fichiers binaires.  
Pour éviter cela, configurez un mock dans `jest.config.js` :


Créez ensuite le fichier `__mocks__/fileMock.js` :


Cela permet à Jest d’ignorer les fichiers image lors des tests.

---

## Résumé visuel du workflow

1. Installation des dépendances  
   ![npm install](./image/npm.png)
2. Lancement des tests  
   ![jest run](./image/jest.png)
3. Succès  
   ![tests réussis](./image/pass.png)
4. Échec  
   ![tests échoués](./image/failed.png)

---

Pour plus de détails sur les bonnes pratiques et l’organisation des tests unitaires, consultez la documentation officielle ou des guides spécialisés.