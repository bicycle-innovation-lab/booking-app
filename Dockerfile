FROM node:10

# Create app directory
WORKDIR /app
ADD . /app/

# global install & update
# RUN npm i -g npm && npm i -g yarn

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install
RUN yarn build

EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
