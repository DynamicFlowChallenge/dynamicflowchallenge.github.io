# Dynamic Flow Challenge

Repository of the Dynamic Flow Challenge website.

This website uses SvelteKit and shadcn-svelte.

## Developing

Install the dependencies with `npm i`.

You can generate the parser files with `npm run build:antlr` but at the moment those need no be
modified manually so they should be generated only once.

You can then run the development server with `npm run dev`.

## Deploying

The website is deployed to github pages.

You can manually generate the static site with `npm run build`, the build artifacts are in `build/`.
The website can the be served through any static file server like `python -m http.server 7000`.
