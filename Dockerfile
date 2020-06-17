# setting up the base/parent image
FROM node:alpine

# creating the working directory
WORKDIR /usr/src/app

# bringing package.json
COPY ./package*.json ./

# running installer
RUN npm install

# bringing up all rest files
COPY ./ ./

# setting up default command
CMD [ "npm", "start" ]