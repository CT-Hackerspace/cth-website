#!/bin/bash
# if we can't find an agent, start one, and restart the script.
if [ -z "$SSH_AUTH_SOCK" ] ; then
  exec ssh-agent bash -c "ssh-add /home/.ssh/id_ec25519; $0"
  exit
fi
[ -d "/tmp/build-site/" ] || mkdir /tmp/build-site/
cd /tmp/build-site/
[ -d 'cth-website' ] || $(git clone git@github.com:CT-Hackerspace/cth-website.git)
cd "cth-website"
git pull origin
bun install
bunx astro build
[ -d "dist" ] || echo "Build Failure"; exit 1;
