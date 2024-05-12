# Using a multi-stage build - BEST PRACTICE

# 1st STAGE
# Using a lightweight NodeJS image as the base image
FROM node:20-alpine AS builder

# Set the working directory 
WORKDIR /app

# Copy the package.json and package-lock.json files 
# for reproducible builds and efficient dependency management
COPY package*.json ./

# Now install the dependencies 
RUN npm install

# Copy necessary files for building the application
COPY . .

# Build the react application
RUN npm run build

# 2nd STAGE
# Using a lightweight Nginx image
FROM nginx:1.25.5-alpine

# Copy build files from the builder stage to Nginx's web root directory
COPY --from=builder /app/build /usr/share/nginx/html