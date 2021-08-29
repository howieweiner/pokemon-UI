# intermediate build container
FROM node:14-alpine as build

RUN apk add --quiet --no-cache curl && apk upgrade -U -a

WORKDIR /build

ADD . /build/

RUN yarn && \
    yarn run build-app && \
    curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | sh && \
    ./bin/node-prune

# runtime container
FROM node:14-alpine as server

ENV NODE_ENV=production

RUN addgroup -g 1001 -S server-group && \
  adduser -S server-user -u 101 && \
  mkdir /server && \
  chmod 777 /server && \
  chown -R server-user:server-group /server

WORKDIR /server

COPY --from=build --chown=server-user:server-group /build/package.json /server/package.json
COPY --from=build --chown=server-user:server-group /build/node_modules /server/node_modules
COPY --from=build --chown=server-user:server-group /build/dist /server/dist

# Switch user
USER server-user

EXPOSE 5000

CMD ["yarn", "start"]
