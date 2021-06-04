# post-topic-server
#using sequelize ORM

1.Run 'npm init' on terminal
2. Install npm dependencies and dev-dependencies- 
  npm install --save-dev sequelize-cli
  npm install --save sequelize       
  npm install pg pg-hstore --save  
3.Install babel dependencies
   npm i @babel/core @babel/node @babel/preset-env @babel/register
4.Create .babelrc file
5. Add to scripts in package.json
    "dev": "nodemon --exec babel-node index.js"
