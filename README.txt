##database
Create a connection to database in ./web-competition/app.js

##node_modules
Run command in ./web-competition to load and install all packages in package.json
npm install

After that packages gyp, pre-gyp and zopfli need to be removed (error when deployed to production server).

##URL
Change URL in ./web-competition/assets/app/app.routing.js

##run frontend

#production
Run command in ./web-competition
npm run build:prod

During this process are created new files in ./web-competition/public that need to be add to Git.
Properties of the command can be changed in ./web-competition/package.json

#development
Run command in ./web-competition before deploy
npm run build

During this process are created new files in ./web-competition/public that need to be add to Git.
Properties of the command can be changed in ./web-competition/package.json

##run backend
Run command in ./web-competition
npm start

##install new package and set to ./web-competition/package.json as development dependency
Run command in ./web-competition
npm install package save-dev

##install new package and set to ./web-competition/package.json as dependency
Run command in ./web-competition
npm install package save

#process environment variables

Process environment variables that need to be set up are in files:
./web-competition/app.js - database credentials
./web-competition/routes/user.js - secret for HMAC algorithm (create token)
./web-competition/routes/app.js - secret for HMAC algorithm (verify token)
