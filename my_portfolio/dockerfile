# Use the official Node.js LTS image as the base image
FROM node:lts AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production version of the React app
RUN npm run build

# Use a lightweight web server to serve the built React app
FROM nginx:alpine AS production

# Copy the production build from the build container to the web server container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
