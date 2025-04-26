https://github.com/VolodymyrOsinchuk/react-webpack.git

### or create a new repository on the command line

echo "# react-webpack" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git push -u origin main && git push --set-upstream origin master

### or push an existing repository from the command line

git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git branch -M main
git push -u origin main

…or create a new repository on the command line
echo "# react-webpack" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git branch -M main
git push -u origin main

Quick setup — if you’ve done this kind of thing before
https://github.com/VolodymyrOsinchuk/react-webpack.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# react-webpack" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/VolodymyrOsinchuk/react-webpack.git
git branch -M main
git push -u origin main

### Netlify

npm install netlify-cli -g
netlify deploy
netlify deploy --prod

### path variable envirement

rundll32 sysdm.cpl,EditEnvironmentVariables

    "start": "webpack serve ",
    "build": "rm -rf build && webpack --config webpack.prod.js",
    "server": "nodemon server/index.js",
    "dev": "webpack --config webpack.dev.js && nodemon server/index.js "
