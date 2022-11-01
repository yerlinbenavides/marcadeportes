FROM node

WORKDIR /app

COPY package*.jason ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
