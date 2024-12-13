FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
USER node
COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production
ENV NODE_ENV production
EXPOSE 5500
CMD "npm" "start"
