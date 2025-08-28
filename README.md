# AlaKouluMatikka 📋🧮

**AlaKouluMatikka** on mobiilisovellus, joka auttaa alakoululaisia harjoittelemaan peruslaskutoimituksia. Sovellus sisältää eri vaikeustasoja ja seuraa käyttäjän edistymistä.

---

## 🔧 Ominaisuudet

- ➕➖✖️➗ Laskutehtävät (yhteen-, vähennys-, kerto- ja jakolaskut)  
- 🏫 Luokat 1–3 (+ vaikeammat tasot)  
- 📊 Tilastot: oikeat/väärät vastaukset, vastausaika, prosentit per päivä  
- 📱 Toimii Android- ja iOS-laitteilla (Expo Go / build)

---

## 🚀 Käyttöönotto

1. Asenna riippuvuudet:

<pre><code>npm install</code></pre>

2. Käynnistä sovellus Expo Go:lla:

<pre><code>expo start</code></pre>

3. Testaa puhelimella:

- Lataa **Expo Go** Google Play -kaupasta tai App Storesta ja skannaa QR-koodi.

---

## 🚰 Teknologia

- React Native  
- Expo  
- AsyncStorage (tilastojen tallennus)  
- 📦 APK / IPA -rakennus (valinnainen):

<pre><code>npm install -g eas-cli
eas build:configure
eas build -p android --profile production
eas build -p ios --profile production</code></pre>

---

## 📊 Tilastot

Sovellus seuraa käyttäjän suorituksia:

- Oikeat ja väärät vastaukset  
- Vastausaika  
- Prosentit per päivä

---

## 🧑‍💻 Kehittäjä

Juri Tökvin 📍 Suomi 🇫🇮  
📩 juritokvin@gmail.com

---

## 🇬🇧 English Summary

**AlaKouluMatikka** is a mobile app for Finnish primary school pupils to practice math operations. It includes difficulty levels, tracks performance, and provides visual feedback.

**Features:**

- Addition, subtraction, multiplication, division  
- Classes 1–3 (+ harder levels)  
- Statistics: correct/incorrect answers, response time, daily percentages  
- Works on Android and iOS (Expo Go / build)

**Setup:**

<pre><code>npm install
expo start</code></pre>

**Build APK / IPA (optional):**

<pre><code>npm install -g eas-cli
eas build:configure
eas build -p android --profile production
eas build -p ios --profile production</code></pre>
