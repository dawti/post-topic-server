# post-topic-server
#using sequelize ORM

1.Run 'npm init' on terminal

2. Install npm dependencies and dev-dependencies=>
  npm install --save-dev sequelize-cli nodemon
  npm install sequelize pg pg-hstore --save  
  
3.Install babel dependencies
   npm i @babel/core @babel/node @babel/preset-env @babel/register
   
4.Create .babelrc file

5. Add to scripts in package.json
    "dev": "nodemon --exec babel-node index.js"
    
6.Edit config/config.json file

7.Change models/index.js to ES6+

8.Generating models for existing databases.
  -Post.js and Topic.js
 
9.Creating seeds:   npx sequelize-cli seed:generate --name demo-user

10.npx sequelize-cli db:seed:all ===run all seeds

11.To migrate:= npx sequelize-cli db:migrate
 
