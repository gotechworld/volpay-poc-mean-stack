FROM node:alpine3.17 as frontend

WORKDIR /frontend

COPY src src
COPY angular.json .
COPY package* .
COPY tsconfig* .

RUN npm ci --no-audit --ignore-scripts

RUN npm run build

FROM nginx:alpine3.17
COPY --from=frontend /frontend/dist/frontend /usr/share/nginx/html


