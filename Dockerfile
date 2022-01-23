FROM node:14-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .