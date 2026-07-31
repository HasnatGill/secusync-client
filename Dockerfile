FROM node:18-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the production bundle
RUN npm run build

# Install a lightweight static file server to serve the built 'dist' folder
RUN npm install -g serve

# Expose the frontend service port
EXPOSE 3001

# Start the application serving the built 'dist' folder on port 3001
CMD ["serve", "-s", "dist", "-l", "3001"]
