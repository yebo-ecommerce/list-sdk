#
FROM node:alpine

#
ENV PATH /root/.yarn/bin:$PATH

#
RUN apk update && apk upgrade && \
    apk --update add --no-cache --virtual .yarn-deps ca-certificates curl tar && \
    update-ca-certificates && \
    rm -rf /var/cache/apk/* && \
    curl -o- -L https://yarnpkg.com/install.sh | sh -s && \
    apk del .yarn-deps && \
    npm uninstall -g npm && \
    rm -rf ~/.npm

#
RUN yarn global add mocha nyc babel-cli istanbul isparta rollup

# App
WORKDIR /usr/local/src/

# Be more eficient
COPY package.json yarn.lock /usr/local/src/

RUN yarn --pure-lockfile

# Copy the files
COPY . /usr/local/src/

# Image command
CMD ["yarn", "run", "build"]
