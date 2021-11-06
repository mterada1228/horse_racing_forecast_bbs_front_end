FROM node:16-alpine

WORKDIR /usr/src/app/next

COPY package*.json ./

RUN yarn install
