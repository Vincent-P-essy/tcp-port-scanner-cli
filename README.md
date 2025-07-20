TCP Port Scanner CLI

Outil CLI Node.js pour détecter les ports TCP ouverts sur un hôte,avec gestion asynchrone, scan parallèle et timeout configurable. pour détecter les ports TCP ouverts sur un hôte,avec gestion asynchrone, scan parallèle et timeout configurable.

git clone https://github.com/Vincent-P-essy/tcp-port-scanner-cli.git
cd tcp-port-scanner-cli
npm install
npm link

Usage

port-scanner <host> <start-end> [timeout_ms]
# Exemple:
port-scanner example.com 1-1000 300

Fonctionnalités

-Scan parallèle configurable

-Timeout paramétrable

-Affichage en temps réel des ports ouverts

-Export JSON possible (en décommentant la partie correspondante)

Auteur

Vincent Plessyhttps://github.com/Vincent-P-essy

