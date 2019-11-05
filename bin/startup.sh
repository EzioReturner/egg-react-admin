#!/bin/bash -e
# root
env=$1
export PATH=$PATH:/usr/local/nodejs/bin:/usr/sbin:/usr/local/git/bin

echo "[startup step 1] luckyfind start startup.sh"
echo '[node -v] '`node -v`
echo '[npm -v] '`npm -v`
echo '[current user] '`whoami`

NODE_ROOT=/usr/local/node
# attention five star:
# git project name maybe uppercase, but here must be set lowercase
# because the uda deployment set project name always to lowercase
PROJECT_NAME=luckyfind
PROJECT_ROOT=$NODE_ROOT/$PROJECT_NAME
LOG_ROOT=$NODE_ROOT/logs/$PROJECT_NAME

echo '[startup step 2] echo something...'
echo "NODE_ROOT: ${NODE_ROOT}"
echo "PROJECT_NAME: ${PROJECT_NAME}"
echo "PROJECT_ROOT: ${PROJECT_ROOT}"
echo "LOG_ROOT: ${LOG_ROOT}"
echo "Run env: ${env}"
echo 'user: '`whoami`
echo 'npm -v:'`npm -v`
echo 'node -v:'`node -v`

if [ "$env" = "" ];
  then
    echo "[Error] the start.sh need a environment argument"
    echo "[Maybe] the argument must be one of them [ local / test / test2 / pre / prod ]"
    exit 1
fi

echo "[startup step 3] export NODE_ENV=${env} EGG_SERVER_ENV=${env}"
export NODE_ENV=${env} EGG_SERVER_ENV=${env}

cd $PROJECT_ROOT

echo "[startup step 4] mkdir -p logs dir"
mkdir -p $LOG_ROOT

echo "[startup step 5] npm cache clean --force"
npm cache clean --force

echo "[startup step 6] npm install --production --registry=https://registry.npm.taobao.org"
npm install --production --registry=https://registry.npm.taobao.org

echo "[startup step 7] npm run stop"
npm run stop

echo "[startup step 8] npm run build"
npm run build

echo "[startup step 9] npm run start"
npm run start -- --stdout="$LOG_ROOT/master-stdout.log" --stderr="$LOG_ROOT/master-stderr.log"

echo "[Success] Server is running..."
