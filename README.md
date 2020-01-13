# Canvas

Prototype for Canvas app.

## Getting Started

Clone this repository:

```
git clone git@github.com:reichert621/canvas.git
cd canvas
```

Install the necessary packages:

```
npm install
```

## Running the app

Run the server in development mode:

```
npm run server:watch
```

Run the UI in development mode:

```
npm run ui:watch
```

Navigate to the correct port (e.g. `localhost:3000`) to view the app.

## Environment variables

Create a `.env` file. You can do this by copying the `.env.example`:

```
cp .env.example .env
```

Variables defined here will be available at `process.env.*` in your server code.

**NB:** Be sure to never check this file in, especially if it contains API keys! (The `.env` file should be included in the `.gitignore` by default in order to prevent this.)

## Production

Run the server in production mode:

```
npm run server:build
npm start
```

Build the UI for production:

```
npm run ui:build
```

## License

[MIT](LICENSE)
