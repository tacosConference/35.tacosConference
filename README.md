# Website for TaCoS 2026

This is the page for the 36th TaCoS held in Heidelberg in 2026. 

This page is written using SvelteKit with TypeScript, made to be compiled for SSR with maximum loading speed in mind. 

## Installing

```sh
pnpm install
```

## Developing

```sh
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of this page:

```sh
pnpm run build
```

You can preview the production build with `npm run preview`.

The static adapter is already setup for a static export to be served on a server without Node.js or similar. 