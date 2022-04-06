FROM node:17.8-alpine
ENV REACT_APP_API_URL=https://space-project-backend.herokuapp.com\
    REACT_APP_DOMAIN=dev-ucnrjpf9.eu.auth0.com\
    REACT_APP_CLIENT=LlnfNaLBY1ivh1hUD7BkP9onaGN30NY9
RUN mkdir -p /forked-final-project-frontend
COPY . .
WORKDIR /forked-final-project-frontend
RUN npm install
CMD ["npm", "start"]