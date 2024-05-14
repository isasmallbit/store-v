FROM node:18-alpine as builder

WORKDIR /app

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

COPY package.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM node:18-alpine as runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json ./
RUN npm install -g pnpm
RUN pnpm install --production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 5173

USER node

CMD ["node_modules/.bin/next", "start", "-p", "5173"]