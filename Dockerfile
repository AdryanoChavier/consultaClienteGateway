FROM node:latest
WORKDIR /home/node/api
COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
