# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.7.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=development
ENV PORT=3000


RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

USER node

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
