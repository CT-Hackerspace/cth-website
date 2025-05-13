#!/bin/bash
WEBROOT="/var/www/html";
# if we can't find an agent, start one, and restart the script.
if [ -z "$SSH_AUTH_SOCK" ] ; then
  exec ssh-agent bash -c "ssh-add /home/tenner/.ssh/gh; $0"
  exit
fi
[ -d "/tmp/build-site/" ] || mkdir /tmp/build-site/
cd /tmp/build-site/
[ -d 'cth-website' ] || $(git clone git@github.com:CT-Hackerspace/cth-website.git)
cd "cth-website"
git pull origin main
bun install
bun run build
echo $(pwd);
[ -f "dist/index.html" ] || {
    echo "Build Failure"
    exit 1
}
echo "Moving Files"
rm -r $WEBROOT/**
cp -r dist/** $WEBROOT
[ -f "$WEBROOT/index.html" ] || echo "Moving Failed";