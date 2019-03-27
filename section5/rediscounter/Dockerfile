FROM node:alpine

WORKDIR '/usr/rediscounter'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]