FROM node:10-alpine as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g @angular/cli@8.3.22

USER node

RUN npm install

COPY --chown=node:node . .

CMD ng serve --host 0.0.0.0


# Trying too setup nginx
# RUN cd /home/node/app && npm run build

# # STEP 2 build a small nginx image with static website
# FROM nginx:alpine
# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*
# ## From 'builder' copy website to default nginx public folder
# COPY --from=builder /home/node/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]