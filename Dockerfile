FROM node:12-alpine

USER node
WORKDIR /usr/app/avatars

COPY . .

RUN npm ci

ENTRYPOINT ["npm","start"]
EXPOSE 8080