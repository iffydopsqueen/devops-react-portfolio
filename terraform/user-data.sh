#!/bin/bash

# Update the package repository
sudo yum update -y

# Install Docker
sudo yum install docker -y

sudo service docker enable

sudo service docker start

sudo usermod -aG docker ec2-user 

sudo chmod 666 /var/run/docker.sock

# # Pull Docker image from ECR
# docker pull <ECR_REPOSITORY_URI>:latest

# docker build -t react-portfolio:1.0 .

# # Run the Docker container
# docker run -d -p 80:80 <ECR_REPOSITORY_URI>:latest
# docker run -d -p 8080:80 react-portfolio:1.0 - my application port (nginx)