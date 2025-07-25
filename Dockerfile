# Build stage
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/about-me /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
