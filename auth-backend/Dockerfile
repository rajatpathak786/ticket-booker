# Use a Node.js Alpine-based image for the development stage
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/app

# COPY package.json /usr/app/package.json
COPY ./package.json ./

# Install app dependencies
RUN npm install

# Set ENV Variable for jwt token 
ENV JWT_PVT_KEY "private_key_placeholder"


# COPY everything else
COPY ./ ./

# Initial start cmd 
CMD [ "npm", "start" ]