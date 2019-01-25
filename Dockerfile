FROM node

RUN mkdir -p /www/src/node

WORKDIR /usr/src/node

COPY . /usr/src/node

RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000

CMD ["npm", "run", "start:prod"]