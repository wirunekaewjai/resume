# STEP 1
FROM node:25-alpine AS builder

WORKDIR /workspace

RUN npm install -g pnpm@11.1.2

COPY . .

ENV CI=true

RUN pnpm install --frozen-lockfile
RUN pnpm build

# STEP 2
FROM nginx:stable-alpine

# Copy static files from build stage to Nginx html directory
COPY --from=builder /workspace/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]