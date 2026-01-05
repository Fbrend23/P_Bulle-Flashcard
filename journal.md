# Journal de travail


## Semaine 45 (2025-11-03 → 2025-11-09)

### 2025-11-03

#### Commit 0904472
**Date :** 2025-11-03 08:18:19 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Initial commit

| Fichier | Modifications |
|---------|---------------|
| .gitignore | 139 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ |
| README.md | 2 + |

---

#### Commit 5f89e0a
**Date :** 2025-11-03 08:32:10 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** initial commit

| Fichier | Modifications |
|---------|---------------|
| adonisjs/.editorconfig | 22 + |
| adonisjs/.env.example | 12 + |
| adonisjs/.gitignore | 25 + |
| adonisjs/ace.js | 27 + |
| adonisjs/adonisrc.ts | 106 + |
| adonisjs/app/exceptions/handler.ts | 49 + |
| adonisjs/app/middleware/auth_middleware.ts | 25 + |
| .../middleware/container_bindings_middleware.ts | 19 + |
| adonisjs/app/models/user.ts | 33 + |
| adonisjs/bin/console.ts | 47 + |
| adonisjs/bin/server.ts | 45 + |
| adonisjs/bin/test.ts | 62 + |
| adonisjs/config/app.ts | 40 + |
| adonisjs/config/auth.ts | 28 + |
| adonisjs/config/bodyparser.ts | 55 + |
| adonisjs/config/database.ts | 24 + |
| adonisjs/config/hash.ts | 24 + |
| adonisjs/config/logger.ts | 35 + |
| adonisjs/config/session.ts | 48 + |
| adonisjs/config/shield.ts | 51 + |
| adonisjs/config/static.ts | 17 + |
| adonisjs/config/vite.ts | 28 + |
| .../migrations/1762154527946_create_users_table.ts | 21 + |
| .../1762154527949_create_access_tokens_table.ts | 31 + |
| adonisjs/eslint.config.js | 2 + |
| adonisjs/package-lock.json | 7910 ++++++++++++++++++++ |
| adonisjs/package.json | 74 + |
| adonisjs/resources/css/app.css | 10 + |
| adonisjs/resources/js/app.js | 1 + |
| .../resources/views/pages/errors/not_found.edge | 8 + |
| .../resources/views/pages/errors/server_error.edge | 8 + |
| adonisjs/resources/views/pages/home.edge | 408 + |
| adonisjs/start/env.ts | 38 + |
| adonisjs/start/kernel.ts | 48 + |
| adonisjs/start/routes.ts | 12 + |
| adonisjs/tests/bootstrap.ts | 37 + |
| adonisjs/tsconfig.json | 7 + |
| adonisjs/vite.config.ts | 19 + |
| doc/P_Bulle_Dev-Flashcards.docx | Bin 0 -> 770149 bytes |
| docker-compose.yml | 36 + |

---

#### Commit 04d8b44
**Date :** 2025-11-03 08:57:29 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(db) add mcd and mld

| Fichier | Modifications |
|---------|---------------|
| doc/Looping1.lo1 | Bin 0 -> 26770 bytes |
| doc/Looping1.loo | Bin 0 -> 26770 bytes |
| doc/mcd.png | Bin 0 -> 21622 bytes |
| doc/mld.png | Bin 0 -> 13032 bytes |

---

#### Commit 78d7909
**Date :** 2025-11-03 09:09:41 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(deck) Add model and migration

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 30 ++++++++++++++++++++++ |
| .../migrations/1762156779627_create_decks_table.ts | 24 +++++++++++++++++ |

---

#### Commit f1f92e1
**Date :** 2025-11-03 09:10:11 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #1 from Fbrend23/DEV_db_deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 30 ++++++++++++++++++++++ |
| .../migrations/1762156779627_create_decks_table.ts | 24 +++++++++++++++++ |

---

#### Commit 977cb2e
**Date :** 2025-11-03 09:16:50 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(flashcard) Add model and migration

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/flashcard.ts | 25 ++++++++++++++++++++++ |
| .../1762157465742_create_flashcards_table.ts | 23 ++++++++++++++++++++ |

---

#### Commit bb6e27d
**Date :** 2025-11-03 09:17:08 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #2 from Fbrend23/DEV_db_flashcards

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/flashcard.ts | 25 ++++++++++++++++++++++ |
| .../1762157465742_create_flashcards_table.ts | 23 ++++++++++++++++++++ |

---

#### Commit 697b6dd
**Date :** 2025-11-03 09:22:19 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(user) Modified model and migration to match mcd

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/user.ts | 13 +++++++++++-- |
| .../database/migrations/1762154527946_create_users_table.ts | 7 +++++-- |

---

#### Commit d8334ec
**Date :** 2025-11-03 09:22:37 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #3 from Fbrend23/DEV_db_user

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/user.ts | 13 +++++++++++-- |
| .../database/migrations/1762154527946_create_users_table.ts | 7 +++++-- |

---

#### Commit a5578e1
**Date :** 2025-11-03 09:33:03 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(relations) add relations to deck and user

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 8 ++++++-- |
| adonisjs/app/models/user.ts | 7 ++++++- |

---

#### Commit 6ef3a2c
**Date :** 2025-11-03 09:33:21 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #4 from Fbrend23/DEV_db_relations

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 8 ++++++-- |
| adonisjs/app/models/user.ts | 7 ++++++- |

---

#### Commit e38307d
**Date :** 2025-11-03 10:36:08 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(auth) add controller

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 48 +++++++++++++++++++++++++++++ |

---

#### Commit dc4da05
**Date :** 2025-11-03 10:36:24 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(auth) add auth route

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 10 +++++++++- |

---

#### Commit 8fbc747
**Date :** 2025-11-03 11:11:46 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(auth) Fixed wrong bracket

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 4 ++-- |

---

#### Commit 6f984c3
**Date :** 2025-11-03 11:22:41 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(auth) add validator

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/validators/auth.ts | 32 ++++++++++++++++++++++++++++++++ |

---

#### Commit 8813551
**Date :** 2025-11-03 11:23:03 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(auth) modifed with lazy loading

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 1 + |

---


## Semaine 46 (2025-11-10 → 2025-11-16)

### 2025-11-10

#### Commit 8b6a5b0
**Date :** 2025-11-10 08:26:56 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(auth) Missing property and typo

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 4 ++-- |

---

#### Commit e471c33
**Date :** 2025-11-10 09:07:41 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(package) Add Bootstrap

| Fichier | Modifications |
|---------|---------------|
| adonisjs/package-lock.json | 29 +++++++++++++++++++++++++++++ |
| adonisjs/package.json | 1 + |

---

#### Commit 0c85f85
**Date :** 2025-11-10 09:08:12 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(home) Add homepage with Edge

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/home.edge | 22 ++ |
| adonisjs/resources/views/pages/home.edge | 408 ------------------------------- |

---

#### Commit 348344c
**Date :** 2025-11-10 09:08:23 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(Edge) Add Layout

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/layout.edge | 24 ++++++++++++++++++++++++ |

---

#### Commit cbdaa38
**Date :** 2025-11-10 09:08:41 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(Edge) Add header and footer partials

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/partials/footer.edge | 3 +++ |
| adonisjs/resources/views/partials/header.edge | 19 +++++++++++++++++++ |

---

#### Commit dca95dd
**Date :** 2025-11-10 09:09:01 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(Routes) Add Edge render

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 4 ++++ |

---

#### Commit e6617f7
**Date :** 2025-11-10 10:28:24 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(auth) Using web for authentification

| Fichier | Modifications |
|---------|---------------|
| adonisjs/config/auth.ts | 14 +++++++------- |

---

#### Commit 09cda81
**Date :** 2025-11-10 11:04:13 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(deck) Add validator

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/validators/deck.ts | 16 ++++++++++++++++ |

---

#### Commit 5a52a23
**Date :** 2025-11-10 11:15:13 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** wip(deck)

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 57 ++++++++++++++++++++++++++++ |
| adonisjs/start/routes.ts | 3 ++ |

---

### 2025-11-15

#### Commit 37e82a7
**Date :** 2025-11-15 14:01:02 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Add GitHub Actions workflow for journal updates

| Fichier | Modifications |
|---------|---------------|
| .github/workflows/journal.yml | 32 ++++++++++++++++++++++++++++++++ |

---

#### Commit 19f7914
**Date :** 2025-11-15 14:52:50 +0100 — **Auteur :** Fbrend23

**Message :** feat(script) add my log generator

| Fichier | Modifications |
|---------|---------------|
| journal.sh | 82 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ |

---

#### Commit 8f58281
**Date :** 2025-11-15 15:22:02 +0100 — **Auteur :** Fbrend23

**Message :** Make journal.sh executable and add journal.md

| Fichier | Modifications |
|---------|---------------|
| journal.sh | 0 |

---

#### Commit a8230d3
**Date :** 2025-11-15 15:27:21 +0100 — **Auteur :** Fbrend23

**Message :** Delete journal.yml

| Fichier | Modifications |
|---------|---------------|
| .github/workflows/journal.yml | 32 -------------------------------- |

---


## Semaine 47 (2025-11-17 → 2025-11-23)

### 2025-11-17

#### Commit 427c5fb
**Date :** 2025-11-17 09:21:17 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(html): add header end tag

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/partials/header.edge | 3 ++- |

---

#### Commit a7bb971
**Date :** 2025-11-17 10:23:42 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(HomePage): Add homepage with list of all published decks

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/homepages_controller.ts | 13 ++++++++ |
| .../migrations/1762156779627_create_decks_table.ts | 2 +- |
| adonisjs/resources/views/pages/home.edge | 36 ++++++++++++++++++++++ |

---

#### Commit b6b4622
**Date :** 2025-11-17 10:38:59 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(myDecks): Add page for listing all user's decks and show one deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 37 +++++++------- |
| adonisjs/resources/views/pages/decks.edge | 71 ++++++++++++++++++++++++++ |
| adonisjs/resources/views/pages/decks/show.edge | 33 ++++++++++++ |

---

#### Commit a542f0c
**Date :** 2025-11-17 11:15:00 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** update(pages): moved home.edge to /pages

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/home.edge | 22 ---------------------- |

---

#### Commit 74ee5bd
**Date :** 2025-11-17 11:16:06 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** wip(routes): add routes

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 23 ++++++++--------------- |

---

#### Commit d474570
**Date :** 2025-11-17 11:20:27 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(forms): add components for a forms

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/input.edge | 10 ++++++++++ |
| adonisjs/resources/views/components/select.edge | 16 ++++++++++++++++ |
| adonisjs/resources/views/components/textarea.edge | 10 ++++++++++ |

---

#### Commit 139d604
**Date :** 2025-11-17 11:20:39 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** wip(decks) Edit deck's title, description and state

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 18 ++++++++-- |
| adonisjs/resources/views/pages/decks/edit.edge | 47 ++++++++++++++++++++++++++ |

---


## Semaine 48 (2025-11-24 → 2025-11-30)

### 2025-11-24

#### Commit 5e382d0
**Date :** 2025-11-24 08:07:52 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(controller) implemented user authentication

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 96 ++++++++++++++--------------- |

---

#### Commit 0fd919f
**Date :** 2025-11-24 09:01:57 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(forms) add Forms page for editing and creating

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/input.edge | 10 ---------- |
| adonisjs/resources/views/components/select.edge | 16 ---------------- |
| .../resources/views/partials/createOrUpdateForm.edge | 14 ++++++++++++++ |

---

#### Commit 2bbf343
**Date :** 2025-11-24 10:50:47 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(pages): Deleted html tag in components

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/layout.edge | 10 +++++ |
| adonisjs/resources/views/pages/decks/edit.edge | 52 +++---------------------- |
| adonisjs/resources/views/pages/decks/show.edge | 41 +++++-------------- |
| adonisjs/resources/views/pages/home.edge | 46 ++++++---------------- |

---

#### Commit db329f0
**Date :** 2025-11-24 11:04:02 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(component) add input for the forms

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/input.edge | 10 ++++++++++ |

---

#### Commit 743cee3
**Date :** 2025-11-24 11:21:17 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** update: router for showing the deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/decks.edge | 6 +++--- |

---


## Semaine 49 (2025-12-01 → 2025-12-07)

### 2025-12-01

#### Commit 05009f9
**Date :** 2025-12-01 08:47:16 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(forms) add radio component and modified input component

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/input.edge | 4 ++-- |
| adonisjs/resources/views/components/radio.edge | 10 ++++++++++ |

---

#### Commit 323a668
**Date :** 2025-12-01 08:48:20 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(forms): replaced checkbox with radio

| Fichier | Modifications |
|---------|---------------|
| .../resources/views/partials/createOrUpdateForm.edge | 18 ++++++++++++------ |

---

#### Commit d364bba
**Date :** 2025-12-01 08:48:42 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** update(controller): added return routes

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 3 ++- |

---

#### Commit b67c96f
**Date :** 2025-12-01 08:58:40 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(deck): removed regex

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/validators/deck.ts | 11 ++--------- |

---

#### Commit 222fb7d
**Date :** 2025-12-01 09:23:54 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(decks): implemented creation of decks

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/decks/create.edge | 5 +++++ |
| adonisjs/resources/views/pages/decks/show.edge | 2 +- |
| adonisjs/start/routes.ts | 11 +++++++++-- |

---

#### Commit 9ca7c02
**Date :** 2025-12-01 09:24:21 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(decks): can now delete decks

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 16 +++++++++++++++- |

---

#### Commit bb4bb96
**Date :** 2025-12-01 10:52:46 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix: renamed decks.edge to myDecks.edge

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/{decks.edge => myDecks.edge} | 0 |

---

#### Commit e437019
**Date :** 2025-12-01 10:53:09 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(controller): add flashcards controller

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/flashcards_controller.ts | 78 +++++++++++++++++++++++ |

---

#### Commit 0a9e6a8
**Date :** 2025-12-01 10:53:23 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(validator): add validator for flashcards

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/validators/card.ts | 8 ++++++++ |

---

#### Commit 83f8cab
**Date :** 2025-12-01 10:53:49 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat(routes): add routes for flashcards

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 14 ++++++++++++++ |

---

#### Commit 1efdf7c
**Date :** 2025-12-01 11:08:18 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat: forms component for card creation/edit

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/partials/createOrUpdateCards.edge | 9 +++++++++ |

---

#### Commit 6d4fc91
**Date :** 2025-12-01 11:08:44 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat: show cards of a deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/cards/index.edge | 45 +++++++++++++++++++++++++ |

---


## Semaine 50 (2025-12-08 → 2025-12-14)

### 2025-12-08

#### Commit c27728d
**Date :** 2025-12-08 08:47:19 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** chores: changed basic id to deckId/cardId for better routing

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 20 +++++++++++--------- |
| adonisjs/resources/views/pages/cards/index.edge | 4 +++- |
| adonisjs/resources/views/pages/decks/edit.edge | 2 +- |
| adonisjs/resources/views/pages/decks/show.edge | 7 ++++--- |
| adonisjs/resources/views/pages/home.edge | 2 +- |
| adonisjs/start/routes.ts | 20 ++++++++++---------- |

---

#### Commit 94a55dc
**Date :** 2025-12-08 10:59:00 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat: implemented authentication

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 79 ++++++++------------ |
| adonisjs/app/controllers/decks_controller.ts | 90 +++++++++-------------- |
| adonisjs/resources/views/pages/auth/register.edge | 30 ++++++++ |
| adonisjs/resources/views/partials/header.edge | 45 ++++++++---- |
| adonisjs/start/routes.ts | 34 ++++++--- |

---

#### Commit 1ac9f2e
**Date :** 2025-12-08 11:10:02 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix(auth) changed routes and deletes username in valdidator

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 4 ++-- |
| adonisjs/app/validators/auth.ts | 5 ----- |

---

#### Commit b7a3826
**Date :** 2025-12-08 11:12:37 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #5 from Fbrend23/feat/auth

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 31 ++ |
| adonisjs/app/controllers/decks_controller.ts | 71 ++++ |
| adonisjs/app/controllers/flashcards_controller.ts | 78 ++++ |
| adonisjs/app/controllers/homepages_controller.ts | 13 + |
| adonisjs/app/validators/auth.ts | 27 ++ |
| adonisjs/app/validators/card.ts | 8 + |
| adonisjs/app/validators/deck.ts | 9 + |
| adonisjs/config/auth.ts | 14 +- |
| .../migrations/1762156779627_create_decks_table.ts | 2 +- |
| adonisjs/package-lock.json | 29 ++ |
| adonisjs/package.json | 1 + |
| adonisjs/resources/views/components/input.edge | 10 + |
| adonisjs/resources/views/components/layout.edge | 34 ++ |
| adonisjs/resources/views/components/radio.edge | 10 + |
| adonisjs/resources/views/components/textarea.edge | 10 + |
| adonisjs/resources/views/pages/auth/register.edge | 30 ++ |
| adonisjs/resources/views/pages/cards/index.edge | 47 +++ |
| adonisjs/resources/views/pages/decks/create.edge | 5 + |
| adonisjs/resources/views/pages/decks/edit.edge | 5 + |
| adonisjs/resources/views/pages/decks/show.edge | 11 + |
| adonisjs/resources/views/pages/home.edge | 418 +-------------------- |
| adonisjs/resources/views/pages/myDecks.edge | 71 ++++ |
| .../views/partials/createOrUpdateCards.edge | 9 + |
| .../views/partials/createOrUpdateForm.edge | 20 + |
| adonisjs/resources/views/partials/footer.edge | 3 + |
| adonisjs/resources/views/partials/header.edge | 33 ++ |
| adonisjs/start/routes.ts | 42 ++- |

---

#### Commit 4a41ea2
**Date :** 2025-12-08 11:20:00 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #6 from Fbrend23/main

| Fichier | Modifications |
|---------|---------------|
| journal.sh | 82 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ |

---


## Semaine 51 (2025-12-15 → 2025-12-21)

### 2025-12-15

#### Commit 7609d55
**Date :** 2025-12-15 08:44:24 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Create createCard.edge

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/cards/createCard.edge | 5 +++++ |

---

#### Commit 0407bbb
**Date :** 2025-12-15 08:44:52 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** update: updated forms for cards input

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/partials/createOrUpdateCards.edge | 7 +++---- |

---

#### Commit dbcdf7c
**Date :** 2025-12-15 08:45:28 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat: controller card complet

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/flashcards_controller.ts | 107 +++++++++++++++------- |

---

#### Commit 56e84a7
**Date :** 2025-12-15 08:46:03 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** feat: add routes for create and edit card

| Fichier | Modifications |
|---------|---------------|
| adonisjs/start/routes.ts | 4 ++-- |

---

#### Commit 0d2f2df
**Date :** 2025-12-15 09:05:21 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix: add foreign keys to models

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 20 ++++++++++++-------- |
| adonisjs/app/models/flashcard.ts | 13 +++++++++---- |
| adonisjs/app/models/user.ts | 4 +++- |

---

#### Commit 3b365a7
**Date :** 2025-12-15 09:07:17 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix: deck controller for auth

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 12 ++++++------ |

---

#### Commit 5842dbc
**Date :** 2025-12-15 09:13:08 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** fix: deleted head to use layout

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/myDecks.edge | 40 +++++------------------------ |

---


## Semaine 01 (2025-12-29 → 2026-01-04)

### 2026-01-03

#### Commit 3eb0cd1
**Date :** 2026-01-03 10:26:46 +0100 — **Auteur :** Fbrend23

**Message :** chores: add comments

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 15 +++++++++++ |
| adonisjs/package-lock.json | 40 +++++++++++++++++++++++----- |

---

#### Commit abd90d0
**Date :** 2026-01-03 10:45:20 +0100 — **Auteur :** Fbrend23

**Message :** chores: modified anwser to answer and add bracket to migration

| Fichier | Modifications |
|---------|---------------|
| .../migrations/1762154527946_create_users_table.ts | 2 +- |
| .../migrations/1762154527949_create_access_tokens_table.ts | 2 +- |
| .../migrations/1762156779627_create_decks_table.ts | 14 ++++++++++---- |
| .../migrations/1762157465742_create_flashcards_table.ts | 10 ++++++++-- |

---

#### Commit 11db62b
**Date :** 2026-01-03 10:49:11 +0100 — **Auteur :** Fbrend23

**Message :** fix: add underscore to column's name

| Fichier | Modifications |
|---------|---------------|
| adonisjs/database/migrations/1762156779627_create_decks_table.ts | 2 +- |
| adonisjs/database/migrations/1762157465742_create_flashcards_table.ts | 2 +- |

---

#### Commit d255adb
**Date :** 2026-01-03 10:50:14 +0100 — **Auteur :** Fbrend23

**Message :** fix: changed relation type for user

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 8 ++++---- |
| adonisjs/app/models/flashcard.ts | 13 ++++++++----- |

---

#### Commit 71eb954
**Date :** 2026-01-03 11:17:32 +0100 — **Auteur :** Fbrend23

**Message :** chores: add bootstrap classes for style

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/radio.edge | 25 +++-- |
| adonisjs/resources/views/components/textarea.edge | 22 ++-- |
| adonisjs/resources/views/pages/cards/index.edge | 93 +++++++++-------- |
| adonisjs/resources/views/pages/home.edge | 28 +++-- |
| adonisjs/resources/views/pages/myDecks.edge | 118 +++++++++------------- |
| adonisjs/resources/views/partials/header.edge | 48 +++++---- |

---

#### Commit 4ef0adb
**Date :** 2026-01-03 11:25:40 +0100 — **Auteur :** Fbrend23

**Message :** fix: changed id with deckId to avoid confusion

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 12 ++++++------ |
| adonisjs/app/controllers/flashcards_controller.ts | 6 +++--- |
| adonisjs/resources/views/pages/myDecks.edge | 2 +- |

---

#### Commit 354d4bc
**Date :** 2026-01-03 11:37:31 +0100 — **Auteur :** Fbrend23

**Message :** merge: from branch dev_deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/cards/create.edge | 5 +++++ |

---

#### Commit c973797
**Date :** 2026-01-03 11:47:30 +0100 — **Auteur :** Fbrend23

**Message :** Merge branch 'feat/ui' into DEV_Deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 15 ++++ |
| adonisjs/app/controllers/flashcards_controller.ts | 9 +-- |
| adonisjs/app/models/flashcard.ts | 2 +- |
| .../migrations/1762154527946_create_users_table.ts | 2 +- |
| .../1762154527949_create_access_tokens_table.ts | 2 +- |
| .../migrations/1762156779627_create_decks_table.ts | 14 +++- |
| .../1762157465742_create_flashcards_table.ts | 10 ++- |
| adonisjs/package-lock.json | 40 ++++++++-- |
| adonisjs/resources/views/components/radio.edge | 25 +++--- |
| adonisjs/resources/views/components/textarea.edge | 22 ++--- |
| adonisjs/resources/views/pages/cards/create.edge | 5 ++ |
| adonisjs/resources/views/pages/cards/index.edge | 93 +++++++++++----------- |
| adonisjs/resources/views/pages/home.edge | 28 ++++--- |
| adonisjs/resources/views/pages/myDecks.edge | 90 +++++++++++---------- |
| adonisjs/resources/views/partials/header.edge | 48 ++++++----- |

---

#### Commit ea597cb
**Date :** 2026-01-03 11:56:44 +0100 — **Auteur :** Fbrend23

**Message :** fix: delete foreign key attribution because of migration fix

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/models/deck.ts | 12 ++++-------- |
| adonisjs/app/models/flashcard.ts | 6 ++---- |

---

#### Commit 0b00088
**Date :** 2026-01-03 12:02:43 +0100 — **Auteur :** Fbrend23

**Message :** fix: corrected typo and add style

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/components/input.edge | 22 ++++++++++++---------- |
| adonisjs/resources/views/pages/cards/create.edge | 2 +- |
| .../views/partials/createOrUpdateCards.edge | 5 ++--- |
| .../views/partials/createOrUpdateForm.edge | 13 ++++++------- |

---

#### Commit 39a47bd
**Date :** 2026-01-03 12:06:25 +0100 — **Auteur :** Fbrend23

**Message :** feat: add card edition

| Fichier | Modifications |
|---------|---------------|
| adonisjs/resources/views/pages/cards/createCard.edge | 5 ----- |
| adonisjs/resources/views/pages/cards/edit.edge | 5 +++++ |

---

#### Commit 9cfed49
**Date :** 2026-01-03 12:06:52 +0100 — **Auteur :** Fbrend23

**Message :** fix: modified id to cardId to avoid confusion

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/flashcards_controller.ts | 6 +++--- |

---

#### Commit d41eb23
**Date :** 2026-01-03 12:10:50 +0100 — **Auteur :** Fbrend23

**Message :** feat: add french errors messages

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/validators/auth.ts | 22 +++++++++++++++++++++- |
| adonisjs/app/validators/card.ts | 9 ++++++++- |
| adonisjs/app/validators/deck.ts | 10 +++++++++- |

---

#### Commit dc69c83
**Date :** 2026-01-03 12:14:59 +0100 — **Auteur :** Fbrend23

**Message :** feat: add admin role

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 22 +++++++++++--- |
| adonisjs/app/controllers/flashcards_controller.ts | 34 ++++++++++++---------- |
| adonisjs/app/models/user.ts | 3 ++ |
| ...438749298_create_add_is_admin_to_users_table.ts | 17 +++++++++++ |

---

#### Commit a9964ba
**Date :** 2026-01-03 12:24:12 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** Merge pull request #7 from Fbrend23/DEV_Deck

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 43 ++++++-- |
| adonisjs/app/controllers/flashcards_controller.ts | 112 +++++++++++++------ |
| adonisjs/app/models/deck.ts | 8 +- |
| adonisjs/app/models/flashcard.ts | 13 ++- |
| adonisjs/app/models/user.ts | 7 +- |
| adonisjs/app/validators/auth.ts | 22 +++- |
| adonisjs/app/validators/card.ts | 9 +- |
| adonisjs/app/validators/deck.ts | 10 +- |
| .../migrations/1762154527946_create_users_table.ts | 2 +- |
| .../1762154527949_create_access_tokens_table.ts | 2 +- |
| .../migrations/1762156779627_create_decks_table.ts | 14 ++- |
| .../1762157465742_create_flashcards_table.ts | 10 +- |
| ...438749298_create_add_is_admin_to_users_table.ts | 17 +++ |
| adonisjs/package-lock.json | 40 +++++-- |
| adonisjs/resources/views/components/input.edge | 22 ++-- |
| adonisjs/resources/views/components/radio.edge | 25 +++-- |
| adonisjs/resources/views/components/textarea.edge | 22 ++-- |
| adonisjs/resources/views/pages/cards/create.edge | 5 + |
| adonisjs/resources/views/pages/cards/edit.edge | 5 + |
| adonisjs/resources/views/pages/cards/index.edge | 93 ++++++++-------- |
| adonisjs/resources/views/pages/home.edge | 28 +++-- |
| adonisjs/resources/views/pages/myDecks.edge | 118 +++++++++------------ |
| .../views/partials/createOrUpdateCards.edge | 8 +- |
| .../views/partials/createOrUpdateForm.edge | 13 ++- |
| adonisjs/resources/views/partials/header.edge | 48 +++++---- |
| adonisjs/start/routes.ts | 4 +- |

---


## Semaine 02 (2026-01-05 → 2026-01-11)

### 2026-01-05

#### Commit 3986bf6
**Date :** 2026-01-05 08:20:16 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** chores: changed comments

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/decks_controller.ts | 2 +- |

---

#### Commit 58bcd35
**Date :** 2026-01-05 08:26:01 +0100 — **Auteur :** Brendan Fleurdelys

**Message :** chores(controllers): add more detailled comments

| Fichier | Modifications |
|---------|---------------|
| adonisjs/app/controllers/auth_controller.ts | 12 ++++++++++++ |
| adonisjs/app/controllers/decks_controller.ts | 15 +++++++++------ |
| adonisjs/app/controllers/flashcards_controller.ts | 12 ++++++------ |

---

