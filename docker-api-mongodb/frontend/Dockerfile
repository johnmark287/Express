FROM node:17-alpine

WORKDIR /app

COPY packages.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
