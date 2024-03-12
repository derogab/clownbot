FROM node:lts-alpine3.16

# Create app directory
WORKDIR /bot

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Copy app
COPY . .

# Run command 
ENTRYPOINT [ "node", "bot.js" ]
CMD [ "" ]