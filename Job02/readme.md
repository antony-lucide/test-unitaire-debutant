# 🧪 Test Unitaire Débutant — PHP & PHPUnit

Bienvenue dans ce projet d'apprentissage des tests unitaires en PHP avec **PHPUnit**. Ce repo contient une structure simple avec quelques tests pour comprendre les bases.

---

## 📁 Structure du projet

TEST-UNITAIRE-DEBUTANT/ ├── Job01/ ├── Job02/ │ ├── image/ │ │ ├── error.png │ │ ├── success.png │ │ ├── dependencies.png │ │ └── build.png │ ├── src/ │ ├── tests/ │ │ └── MathTest.php │ ├── vendor/ │ ├── composer.json │ └── composer.lock


---

## ⚙️ Dépendances

Le projet utilise **Composer** pour gérer les dépendances.

```bash
composer init
composer require --dev phpunit/phpunit


<?php

use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testAddition()
    {
        $this->assertEquals(2 + 2, 4);
    }
}
```


🚧 Problèmes rencontrés

Au début, j'ai rencontré plusieurs erreurs en lançant PHPUnit à cause de :

    Mauvais nom de classe (TestMath au lieu de MathTest)

    Lancement de fichiers non reconnus (ex: phpunit math)

    Tentatives de tests via des noms invalides

📸 Exemple d'erreur :

✅ Résultat final

Après correction du nom de classe et du chemin du fichier, le test fonctionne parfaitement :

```bash

./vendor/bin/phpunit tests/MathTest.php


```

📸 Résultat du test :

🧱 Build et configuration

    PHPUnit v10.5

    PHP 8.x

    Pas de framework, juste PHP natif

    Organisation simple en src/ pour le code et tests/ pour les tests

📸 Exemple du build/config général :

📌 À retenir

    Toujours faire correspondre le nom du fichier et le nom de la classe de test

    Utiliser composer pour gérer les outils comme PHPUnit

    Lancer les tests avec des chemins explicites ou via autoload
