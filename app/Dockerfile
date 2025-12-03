# Use the latest officials Node.js image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy all the files from current directory (host) to container's working directory
COPY . .

# Install all dependencies listed in package.json
RUN npm install

# EXPOSE port 4200 for the app to be accessible
EXPOSE 4200

# Run the app using nodemon and app.js as entry point
CMD ["node", "app.js"]