FROM node

WORKDIR /app

COPY package.json ./
COPY . .

RUN npm install
RUN npm run build

# Cleanup
RUN rm -rf src
RUN rm -rf node_modules
RUN rm -rf public
RUN rm -rf .vscode

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]