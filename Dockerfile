FROM node:6
ADD . .
RUN npm install
CMD ["yarn", "start"]

