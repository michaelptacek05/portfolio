# Build stage
FROM node:24-alpine AS builder
WORKDIR /app

# zaleží na lockfile
COPY package.json package-lock.json* yarn.lock* ./
RUN npm ci --silent

COPY . .
RUN npm run build

# Runtime stage
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# standalone build artefakty
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]