FROM node:16.13.1-alpine

ENV BACKAPP=/usr/src
WORKDIR $BACKAPP

RUN apk update

COPY package.json $BACKAPP/package.json
RUN npm install

COPY . $BACKAPP
EXPOSE 3001

CMD [ "npm", "start" ]