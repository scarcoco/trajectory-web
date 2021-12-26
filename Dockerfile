# 生成文件
FROM node:17.3.0-bullseye as builder
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install && npm run build

# 静态文件部署
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html