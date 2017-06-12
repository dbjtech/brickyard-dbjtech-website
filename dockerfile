FROM node:alpine

RUN apk add tzdata --update --no-cache && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" /etc/localtime && apk del tzdata

RUN npm i http-server -g --production && npm cache clean --force

WORKDIR /src/app
COPY ./dest ./dest

CMD http-server -p 80 dest/www

EXPOSE 80
