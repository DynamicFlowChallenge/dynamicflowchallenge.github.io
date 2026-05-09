# Dynamic Flow Challenge

Repository of the Dynamic Flow Challenge website.

This website uses SvelteKit and shadcn-svelte.

## Developing

Install the dependencies with `npm i`.

You can generate the ANTLR parser files (for language execution) with `npm run build:antlr` but at the moment those need no be
modified manually so they should be generated only once.

### CodeMirror & Lezer Grammar

The project uses a Lezer grammar for CodeMirror 6 syntax highlighting and autocompletion.

Parser files can be generated from Lezer grammar with:

```bash
npx lezer-generator src/lib/courant-autocomplete/courant.grammar -o src/lib/courant-autocomplete/parser.ts --typeScript
```

## Deploying

The website is deployed to github pages.

You can manually generate the static site with `npm run build`, the build artifacts are in `build/`.
The website can the be served through any static file server like `python -m http.server 7000`.
