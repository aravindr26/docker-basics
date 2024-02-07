FROM node:14-alpine

# Set the app directory in docker container
WORKDIR /app

# First we will just copy the package.json and install the npm modules
# we were doing this becase, else if we copy all the files now, when we are rebuilding the container
# if we made changes to the project source files, then docker will retrigger the npm install
# Now the npm install will execute only if there is a change in package.json
COPY package.json .
RUN npm install

# Copying the full source files to the container
COPY . .
CMD [ "npm", "start" ]