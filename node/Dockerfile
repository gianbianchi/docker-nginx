FROM node:16

WORKDIR /usr/src/app

WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install \
&& npm install express --save\
&& npm install mysql --save

COPY . .

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.7.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

CMD ["node", "index.js"]