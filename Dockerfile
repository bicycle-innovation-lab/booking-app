FROM node:10

# Create app directory
WORKDIR /app
ADD . /app/

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
