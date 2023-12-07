[![License](http://img.shields.io/:license-apache%202.0-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![User chat](https://img.shields.io/badge/chat-users-brightgreen.svg)](https://debezium.zulipchat.com/#narrow/stream/302529-users)
[![Developer chat](https://img.shields.io/badge/chat-devs-brightgreen.svg)](https://debezium.zulipchat.com/#narrow/stream/302533-dev)
[![Google Group](https://img.shields.io/:mailing%20list-debezium-brightgreen.svg)](https://groups.google.com/forum/#!forum/debezium)
[![Stack Overflow](http://img.shields.io/:stack%20overflow-debezium-brightgreen.svg)](http://stackoverflow.com/questions/tagged/debezium)

Copyright Debezium Authors.
Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

# Debezium UI

![WEB UI SAMPLE](https://user-images.githubusercontent.com/10202690/114378465-05cb5000-9b88-11eb-9914-a8dd5b3994ae.png)

Debezium is an open source distributed platform for change data capture (CDC).

This repository contains a web-based UI for Debezium, allowing to configure Debezium connectors in an intuitive way, control their lifecycle, and more.
The Debezium UI is a standalone web application, which connects to Kafka Connect via its REST API.

This project is under active development, any contributions are very welcome.

## Prerequisites

Debezium UI needs a properly running Debezium instance version 1.4.0.Beta1 or newer and running DB instances, depending
on what connectors you are going to use (Postgres, Mongo DB, MySQL, etc).

### DEV Infrastructure with Docker-Compose

You can setup a running DEV infrastructure with Zookeeper, Kafka, Debezium, Postgres and
Mongo DB using docker-compose:

```
## optionally make sure you have the latest images:
$ docker-compose pull

Pulling dbzui-zookeeper ... done
Pulling dbzui-db-mongo  ... done
Pulling dbzui-db-mysql  ... done
Pulling debezium-ui_mongo-initializer_1 ... done
Pulling dbzui-kafka     ... done
Pulling dbzui-db-pg     ... done
Pulling dbzui-connect   ... done

## start containers
$ docker-compose up -d

Creating dbzui-db-mysql  ... done
Creating dbzui-db-pg     ... done
Creating dbzui-zookeeper ... done
Creating dbzui-db-mongo  ... done
Creating debezium-ui_mongo-initializer_1 ... done
Creating dbzui-kafka     ... done
Creating dbzui-connect   ... done

```

Debezium UI will be available on [http://localhost:8080](http://localhost:8080)      
Kafka Connect REST API with Debezium will be available on local port **8083**.   
Postgres will be available on local port **65432**.  
MySQL will be available on local port **63306**.  
Mongo DB will be availaible after ~20 seconds on local port **37017** (connect via `mongo -u debezium -p dbz --authenticationDatabase admin localhost:37017/inventory`)
Kafka will be available on local port **9092**.  

```
## later stop containers:
$ docker-compose down

Stopping dbzui-connect   ... done
Stopping dbzui-kafka     ... done
Stopping dbzui-zookeeper ... done
Stopping dbzui-db-mongo  ... done
Stopping debezium-ui_mongo-initializer_1 ... done
Stopping dbzui-db-pg     ... done
Stopping dbzui-db-mysql  ... done
Removing dbzui-connect   ... done
Removing dbzui-kafka     ... done
Removing dbzui-zookeeper ... done
Removing dbzui-db-mongo  ... done
Removing debezium-ui_mongo-initializer_1 ... done
Removing dbzui-db-pg     ... done
Removing dbzui-db-mysql  ... done
Removing network debezium-ui_dbzui-network

```

## Build

The entire application (UI and backend) can be built via Maven:

```
./mvnw clean install
```

The UI part is an single-page application (SPA) based on the React framework. It is packaged as JAR,
whose contents are then exposed by the Quarkus-based backend application.

### Backend

The UI backend is a Quarkus application located under _backend_.
You can run it in development mode like so:

```
./mvnw -am -pl backend package quarkus:dev
```

Swagger UI can be accessed from:  [http://localhost:8080/swagger-ui/](http://localhost:8080/swagger-ui/)

## UI Development

The UI frontend code is located under the _ui_ folder.  See the [UI README](./ui/README.md) for more information about UI development.

## Contributing

The Debezium community welcomes anyone that wants to help out in any way, whether that includes
reporting problems, helping with documentation, or contributing code changes to fix bugs, add tests,
or implement new features.
See [this document](https://github.com/debezium/debezium/blob/main/CONTRIBUTE.md) for details.

## Quick-start

```bash
git clone https://github.com/patternfly/patternfly-react-seed
cd patternfly-react-seed
npm install && npm run start:dev
```
## Development scripts
```sh
# Install development/build dependencies
npm install

# Start the development server
npm run start:dev

# Run a production build (outputs to "dist" dir)
npm run build

# Run the test suite
npm run test

# Run the test suite with coverage
npm run test:coverage

# Run the linter
npm run lint

# Run the code formatter
npm run format

# Launch a tool to inspect the bundle size
npm run bundle-profile:analyze

# Start the express server (run a production build first)
npm run start

# Start storybook component explorer
npm run storybook

# Build storybook component explorer as standalone app (outputs to "storybook-static" dir)
npm run build:storybook
```

## Configurations
* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./webpack.common.js)
* [Jest Config](./jest.config.js)
* [Editor Config](./.editorconfig)

## Raster image support

To use an image asset that's shipped with PatternFly core, you'll prefix the paths with "@assets". `@assets` is an alias for the PatternFly assets directory in node_modules.

For example:
```js
import imgSrc from '@assets/images/g_sizing.png';
<img src={imgSrc} alt="Some image" />
```

You can use a similar technique to import assets from your local app, just prefix the paths with "@app". `@app` is an alias for the main src/app directory.

```js
import loader from '@app/assets/images/loader.gif';
<img src={loader} alt="Content loading />
```

## Vector image support
Inlining SVG in the app's markup is also possible.

```js
import logo from '@app/assets/images/logo.svg';
<span dangerouslySetInnerHTML={{__html: logo}} />
```

You can also use SVG when applying background images with CSS. To do this, your SVG's must live under a `bgimages` directory (this directory name is configurable in [webpack.common.js](./webpack.common.js#L5)). This is necessary because you may need to use SVG's in several other context (inline images, fonts, icons, etc.) and so we need to be able to differentiate between these usages so the appropriate loader is invoked.
```css
body {
  background: url(./assets/bgimages/img_avatar.svg);
}
```

## Adding custom CSS
When importing CSS from a third-party package for the first time, you may encounter the error `Module parse failed: Unexpected token... You may need an appropriate loader to handle this file typ...`. You need to register the path to the stylesheet directory in [stylePaths.js](./stylePaths.js). We specify these explicity for performance reasons to avoid webpack needing to crawl through the entire node_modules directory when parsing CSS modules.

## Code quality tools
* For accessibility compliance, we use [react-axe](https://github.com/dequelabs/react-axe)
* To keep our bundle size in check, we use [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
* To keep our code formatting in check, we use [prettier](https://github.com/prettier/prettier)
* To keep our code logic and test coverage in check, we use [jest](https://github.com/facebook/jest)
* To ensure code styles remain consistent, we use [eslint](https://eslint.org/)
* To provide a place to showcase custom components, we integrate with [storybook](https://storybook.js.org/)

## Multi environment configuration
This project uses [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) for exposing environment variables to your code. Either export them at the system level like `export MY_ENV_VAR=http://dev.myendpoint.com && npm run start:dev` or simply drop a `.env` file in the root that contains your key-value pairs like below:

```sh
ENV_1=http://1.myendpoint.com
ENV_2=http://2.myendpoint.com
```

With that in place, you can use the values in your code like `console.log(process.env.ENV_1);`
