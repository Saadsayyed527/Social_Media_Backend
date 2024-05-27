# Use official Node.js image as base
FROM node:14

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
