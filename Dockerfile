FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build



