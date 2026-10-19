# Preseason Tracker

Preseason Tracker is a React web app for exploring a football club's preseason activity by club and season. It plots the countries and territories visited on a world map, shows opposition notes when available, and lists the young players taken on the trip with their position, nationality, and age.

## Features

- Select a club and season using options loaded from the API.
- View preseason destinations highlighted on an interactive world map.
- Hover over a destination to see its opposition note, when one is available.
- Highlighted small regions have visible markers; select a marker to zoom in and use Reset map view to return.
- View the young players included in that club's preseason squad.
- Switch between light and dark themes.

## API

The frontend uses the [Youngsters Preseason API](https://github.com/onifadeayomikun/Youngsters-Preseason-YP-API/blob/database/server.js).

It requests club and season options from `GET /v1/club` and `GET /v1/seasons`. For a selected club and season, it requests destination and opposition-note data from `GET /v1/clubs-countries/:club/preseason/:season` and player data from `GET /v1/clubs/:club/preseason/:season`.

Set `VITE_API_URL` to the API server's base URL when it is not served from the same origin as the frontend. If `VITE_API_URL` is unset, the development client uses relative URLs and Vite proxies `/v1` and `/api` requests to `http://localhost:4000`. Start the API server separately; see its repository for backend setup instructions.

## Tech stack

- React and JavaScript
- Vite
- Axios
- Oxlint

## Getting started

Prerequisites: Node.js and npm.

1. Clone this frontend repository and change into its directory:

   ```sh
   git clone <frontend-repository-url>
   cd Preseason-Tracker
   ```

2. Install dependencies and start the development server:

   ```sh
   npm install
   npm run dev
   ```

3. Make sure the API server is running at `http://localhost:4000`, or configure `VITE_API_URL` to point to your API server.

Run the linter with:

```sh
npm run lint
```
