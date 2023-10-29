FROM node:20 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

FROM base as dev
CMD ["npm", "run", "dev"]

FROM base as prod
CMD ["npm", "run", "build"]
