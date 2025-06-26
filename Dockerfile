# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN pnpm install
RUN pnpm build

# Etapa 2: Producción
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.mjs ./next.config.mjs

EXPOSE 3000

CMD ["npm", "run", "start"]

