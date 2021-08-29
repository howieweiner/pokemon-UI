# intermediate build container
FROM node:14-alpine as build

WORKDIR /build

ADD . /build/

RUN npm ci && \
    npm run build

# intermediate dependencies container
FROM node:14-alpine as dependencies

RUN apk add --quiet --no-cache curl && apk upgrade -U -a

WORKDIR /dependencies

COPY package*.json /dependencies/

RUN npm ci --production --no-optional && \
    curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh && \
    ./bin/node-prune

# runtime container
FROM node:14-alpine AS server

ENV NODE_ENV=production

RUN addgroup -g 1001 -S app-group && \
  adduser -S app-user -u 101 && \
  mkdir /app && \
  chmod 777 /app && \
  chown -R app-user:app-group /app

WORKDIR /app

COPY --from=build --chown=app-user:app-group /build/.next /app/.next
COPY --from=build --chown=app-user:app-group /build/package.json /app/package.json
COPY --from=build --chown=app-user:app-group /build/next.config.js /app/next.config.js
COPY --from=dependencies --chown=app-user:app-group /dependencies/node_modules /app/node_modules

ADD public /app/public

# Switch user
USER app-user

EXPOSE 3000

CMD ["npm", "run", "start"]
