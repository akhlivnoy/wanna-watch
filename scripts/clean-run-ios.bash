#!/bin/bash

echo "Removing node_modules..."
rm -rf node_modules/

echo "Removing pods..."
rm -rf ios/Pods

echo "Building npm packages..."
yarn

echo "Building pods..."
cd ios
pod install
cd ..

echo "iOS Launch..."
react-native run-ios