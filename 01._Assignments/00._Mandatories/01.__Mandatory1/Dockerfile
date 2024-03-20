# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Run the build script
RUN npm run build

# Expose the port your app runs on
EXPOSE 8080

# Command to run your app
CMD ["npm", "run", "start"]