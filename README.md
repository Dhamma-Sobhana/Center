# Center

A web app to help with running a Vipassana center.

Strapi for backend. 
Svelte with SvelteKit for frontend.
Database is PostgreSQL.
nginx proxy.
Setup with docker compose.

# Configuration

Copy `.env.example` to `.env` and set **VIRTUAL_HOST** to your domain name. **ADMIN_EMAIL** is used for LetsEncrypt.

# Start

## Development

Started with:

    docker-compose -f docker-compose.dev.yaml up --build

## Deployement

    docker-compose up --build

**TODO:** Look att running API in a path (host/api) which would require one less DNS record and SSL certificate.

# Initial data

Open Strapi administration panel:

    http://localhost:1337/admin

Create a administrator user.

Under *Collection Types*, open *Users*.

Add a new user. Make sure to set *Confirmed* to *ON* and *Role* to *Authenticated*.

Add other data as needed.

**TODO:** Prepopulate data on first run, like houses, rooms, people and so on.

# Access

Frontend is available at [VIRTUAL_HOST].

Backend is available at api.[VIRTUAL_HOST].

Login with the user you created from Strapi administration panel.

# What about SSL?

Traefik is requesting and renewing LetsEncrypt certificate. Trafic is passed on to nginx-proxy.

https://doc.traefik.io/traefik/user-guides/docker-compose/acme-http/

# Resources

For settings for exposing API in a subfolder instead of sub domain, see Strapis nginx-proxy documentation:

https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/optional-software/nginx-proxy.html

Environment variables in nginx configuration:

https://github.com/docker-library/docs/tree/master/nginx#using-environment-variables-in-nginx-configuration-new-in-119

Getting SvelteKit hot reload to work when running in docker container:

https://jenyus.web.app/blog/2021-05-30-setting-up-a-development-environment-for-sveltekit-with-docker-and-compose