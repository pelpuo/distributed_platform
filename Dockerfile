# Use the official Node.js base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that Nginx will run on
EXPOSE 3000

# Start Nginx
CMD ["npm", "start"]