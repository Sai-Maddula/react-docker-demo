FROM node:latest
WORKDIR /reactapp
COPY package.json /reactapp
RUN npm install
COPY . /reactapp
CMD ["npm","start"]