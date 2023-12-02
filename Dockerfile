FROM node:14

WORKDIR /app
RUN mkdir -p /app/uploads
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
