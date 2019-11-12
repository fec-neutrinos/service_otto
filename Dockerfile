FROM node:latest
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# RUN npm run seed
EXPOSE 3010
CMD [ "npm", "start" ]