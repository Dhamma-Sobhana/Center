# Strapi Svelte template

A template for creating new projects.

Strapi for backend. 
Svelte with SvelteKit for frontend.
Database is PostgreSQL.
nginx proxy.
Setup with docker compose.

# Configuration

Copy `.env.example` to `.env` and set **VIRTUAL_HOST** to your domain name.

# Start

    docker-compose up

Frontend is available at [VIRTUAL_HOST].

Backend is available at api.[VIRTUAL_HOST].

# What about SSL?

I did try to integrate LetsEncrypt but ran into a hen and egg situation with nginx requiring a certificate to start and certbot requring nginx to be running to request a certificate. There are ways to work around this but they initially were to complicated.

Usually I run services behind CloudFlare which can handle SSL but I suppose the connection between CloudFlare and the service should be encrypted as well, even if just with a self signed certificate.

# Resources

For settings for exposing API in a subfolder instead of sub domain, see Strapis nginx-proxy documentation.

https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html

Environment variables in nginx configuration:

https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration-new-in-119