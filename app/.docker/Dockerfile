FROM node:alpine3.17

WORKDIR /app

COPY package* .
COPY index.js index.js

RUN npm ci --no-audit --ignore-scripts

CMD ["node", "index.js"]

