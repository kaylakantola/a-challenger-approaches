#!/bin/bash

folder=$(date +'%m-%d-%Y_%H-%M')
mkdir $folder
cd $folder
touch readme.md index.js
cd ../
cp readme.md $folder/readme.md
