#!/bin/bash
# if we can't find an agent, start one, and restart the script.
if [ -z "$SSH_AUTH_SOCK" ] ; then
  exec ssh-agent bash -c "ssh-add ; $0"
  exit
fi
mkdir /tmp/build-site/
cd /home/www//build-site/
[ -d 'cth-website' ] || $(git clone git@github.com:CT-Hackerspace/cth-website.git)
cd "cth-website"
git pull origin
bun install
bunx astro build
[ -d "dist" ] || echo "Build Failure"; exit 1;
