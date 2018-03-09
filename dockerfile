FROM nginx:alpine

RUN apk add tzdata --update --no-cache && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" /etc/localtime && apk del tzdata

COPY ./dest/www/ /usr/share/nginx/html

EXPOSE 80
