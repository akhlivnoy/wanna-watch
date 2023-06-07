#!/bin/bash

echo "Removing node_modules..."
rm -rf node_modules/

echo "Building npm packages..."
yarn

echo "Removing android gradle cache..."
cd android
./gradlew clean
cd ..

echo "Android Launch..."
react-native run-android