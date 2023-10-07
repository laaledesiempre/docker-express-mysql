
cd ./database-front
docker build . -t laaledesiempre/docker-express-mysql:react
#pwd
cd ../express-mysql-server
docker build . -t laaledesiempre/docker-express-mysql:express
#pwd
cd ../nginx_server
docker build . -t laaledesiempre/docker-express-mysql:nginx
#pwd
cd ..
echo done!

