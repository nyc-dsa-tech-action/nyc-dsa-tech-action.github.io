# Internet for All NYC
A static [Gatsby](https://www.gatsbyjs.com/docs/) website for the Internet for All NYC coalition.

## Tech Stack
- React
- [Chakra UI](https://chakra-ui.com) 
- TypeScript

## Requirements
- Node.js 10.0 

## Running Locally
- Copy this repo: `git clone https://github.com/nyc-dsa-tech-action/nyc-dsa-tech-action.github.io.git`
- Install the Gatsby command-line interface globally: `npm install -g gatsby-cli`
- Install dependencies: `npm install`
- Start a development server: `gatsby develop`
- View the site locally at http://localhost:8000/

## Deploying
- Merge changes to the `source` branch, not the `master` branch - `master` is where the `public` folder Gatsby builds will be pushed to and published by Github Pages.
- Run `npm run deploy`
- [Here's Gatsby's guide to deploy to Github Pages.](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)
