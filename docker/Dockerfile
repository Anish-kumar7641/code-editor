# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Install g++ for compiling C++ code
RUN apt-get update && apt-get install -y g++

# Copy the application files
COPY package*.json ./
RUN npm install
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "app.js"]
