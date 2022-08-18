FROM node:18-alpine

# set working directory
WORKDIR /vite

# add `/services/node_modules/.bin` to $PATH
ENV PATH /vite/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]