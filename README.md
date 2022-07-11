# bookmark-manager-app

## Project Kanban Board

You can check our kanban board [here](https://github.com/orgs/we-craft-code/projects/4/views/1).

## How to start contributing?

1. Fork the repo
2. Clone the forked repo to your machine

3. Add we-craft-code repo as the upstream

   `git remote add upstream git@github.com:we-craft-code/bookmarks-manager.git`

---

## How to run the dev environment?

Make sure you have all the packages needed installed:

- Node.js (>= 16)
- Yarn (>= 1.22.0)
- Docker
- Docker Compose

Run `yarn` inside the root, frontend and backend folders.

Run `yarn dev:start`.

Docker-compose will launch a boilerplate that consists of:

- Frontend container
- Backend container
- Database container
- Mongo Express container

---

## Tech Stack

**frontend:**

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**backend:**

- [Nest.js](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
