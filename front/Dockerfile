FROM node:16.13.1-alpine

ENV VUEAPP=/usr/src

WORKDIR $VUEAPP

RUN apk update

COPY package.json $VUEAPP/package.json
RUN npm install

COPY . $VUEAPP
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
