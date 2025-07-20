# TCP Port Scanner (Node.js)

Ce projet est un **scanner de ports TCP** écrit en JavaScript (Node.js). Il permet de vérifier quels ports sont ouverts sur une machine cible.

##  Fonctionnalités

- Scan d'une plage de ports sur une adresse IP ou un nom de domaine.
- Timeout personnalisable pour chaque port.
- Export JSON (optionnel).

##  Utilisation

### Prérequis

- Node.js installé

### Commande

```bash
node scanner.js <hôte> <début-fin> [timeout_ms]
```

### Exemple

```bash
node scanner.js example.com 1-1000 300
```

Cela scannera les ports de 1 à 1000 avec un délai de 300 ms par port.

##  Fichiers

- `scanner.js` : script principal
- `package.json` : métadonnées du projet

##  Installation

```bash
npm init -y
```

##  Auteur

Vincent Plessy — Étudiant en L3 Informatique à l'Université Gustave Eiffel, passionné par le DevOps, la cybersécurité et les systèmes.
