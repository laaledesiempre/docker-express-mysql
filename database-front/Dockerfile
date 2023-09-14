FROM node:latest

EXPOSE 5173

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
