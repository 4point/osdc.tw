#!/bin/sh
find . -type f -name '*~' -delete
middleman build --clean
rsync -a --delete build/* ../web-html
