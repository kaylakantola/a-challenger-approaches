#!/bin/bash

folder=$(date +'%m-%d-%Y_%H-%M')
mkdir $folder
cd $folder
touch readme.md
cd ../
cp readme.md $folder/readme.md
