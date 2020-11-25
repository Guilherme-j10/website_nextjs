FROM node:12
WORKDIR /usr/src/www
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx", "next", "build"]
EXPOSE 3000
CMD ["npx", "next", "start"]
           
    