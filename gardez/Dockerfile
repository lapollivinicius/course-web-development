FROM node:24.0.0-alpine AS dev
ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
ENV CHOKIDAR_USEPOLLING=true
ENV CHOKIDAR_INTERVAL=100

