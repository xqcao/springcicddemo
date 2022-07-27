FROM alpine/git AS gitapp
ARG git_url
WORKDIR /git-app
RUN git clone ${git-url}

FROM node:16.9.1 AS node-app
ARG app-name
WORKDIR /reactapp
COPY --from=gitapp /git-app/${app-name}/package*.json ./
RUN npm install
COPY --from=gitapp  /git-app/${app-name}/ .
RUN npm run build


FROM nginx:1.18-alpine
COPY nginx.comfig /etc/nginx/nginx.config
COPY --from=node-app /reactapp/build /frontend/build
