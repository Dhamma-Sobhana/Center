# Center

A web app to help with running a Vipassana center.

Strapi for backend. 
Svelte with SvelteKit for frontend.
Database is PostgreSQL.
nginx proxy.
Setup with docker compose.

# Configuration

Copy `.env.example` to `.env` and set **VIRTUAL_HOST** to your domain name. **ADMIN_EMAIL** is used for LetsEncrypt.

# Development

Started with:

    docker-compose -f docker-compose.dev.yaml up --build

# Deployement

    docker-compose up --build

Frontend is available at [VIRTUAL_HOST].

Backend is available at api.[VIRTUAL_HOST].

## TODO
Look att running API in a path (host/api) which would require one less DNS record and SSL certificate.

# What about SSL?

Traefik is requesting and renewing LetsEncrypt certificate. Trafic is passed on to nginx-proxy.

https://doc.traefik.io/traefik/user-guides/docker-compose/acme-http/

# Resources

For settings for exposing API in a subfolder instead of sub domain, see Strapis nginx-proxy documentation.

https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html

Environment variables in nginx configuration:

https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration-new-in-119
