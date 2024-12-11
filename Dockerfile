# Stage 1: Development (Node.js Environment)
FROM node:20.18.0 AS development

WORKDIR /app

# Copy package.json và yarn.lock trước để tối ưu cache
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn install --frozen-lockfile

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build project
FROM development AS build
RUN yarn build

# Stage 2: Production (Nginx Environment)
FROM nginx:stable-alpine

# Copy file build từ giai đoạn build vào thư mục phục vụ của nginx
COPY --from=dist /app/dist /usr/share/nginx/html

# Copy file cấu hình Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose cổng 80
EXPOSE 80
