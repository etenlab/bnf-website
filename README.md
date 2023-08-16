# bnf-website
1. install ionic globally: npm install -g @ionic/cli
2. install dependencies: npm i
3. run: ionic serve or npm run dev

## Deploy

1. `npm run build`
1. clear S3 folder
1. sync `dist/` folder `aws s3 sync dist/ s3://[bucket] --delete`