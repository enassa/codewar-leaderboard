FROM node:16.14 as builder

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/codl-ui

WORKDIR /usr/src/app/codl-ui
COPY package*.json ./
RUN yarn



COPY . .

RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/codl-ui/build /usr/share/nginx/html

