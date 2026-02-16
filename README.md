## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## Deploy to dev

```bash
npm run build
aws s3 rm s3://dev.investingwithfire.com --recursive --profile fire_capital
aws s3 sync dist s3://dev.investingwithfire.com --acl public-read --profile fire_capital
```


## Deploy to prod - update

```bash
npm run build
aws s3 sync dist s3://investingwithfire.com --acl public-read --profile fire_capital
aws cloudfront create-invalidation --distribution-id E3E71YLTUMUO13 --paths '/*' --profile fire_capital
```

## Deploy to prod - remove and upload

```bash
npm run build
aws s3 rm s3://investingwithfire.com --recursive --profile fire_capital
aws s3 sync dist s3://investingwithfire.com --acl public-read --profile fire_capital
aws cloudfront create-invalidation --distribution-id E3E71YLTUMUO13 --paths '/*' --profile fire_capital
```


##SVG Optimizer

npm -g install svgo

# Processing single files:
svgo one.svg two.svg -o one.min.svg two.min.svg --multipass
# Processing directory of svg files, recursively using `-f`, `--folder` :
svgo -f ./path/to/folder/with/svg/files -o ./path/to/folder/with/svg/output
# Help for advanced usage
svgo --help
