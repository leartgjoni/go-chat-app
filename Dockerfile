FROM node:alpine as builder

ARG API_URL
ENV REACT_APP_API_URL=${API_URL}

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

FROM nginx:stable

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /var/www
