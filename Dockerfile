FROM ubuntu:16.04

RUN apt update -y
RUN apt install -y nodejs npm

COPY . .
RUN npm install
CMD npm run start

EXPOSE 3000
