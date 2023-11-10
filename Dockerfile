FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY .env.defaults .env
COPY src/ ./src/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]