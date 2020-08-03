FROM node:10

# Create app directory
WORKDIR /bot

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN yarn

# Copy app
COPY . .

# Run command 
CMD [ "node", "bot.js" ]