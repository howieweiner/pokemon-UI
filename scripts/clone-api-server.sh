#!/bin/bash

if [ -d "gitrepo" ]
then
    echo "Git repo already cloned.. skipping"
else
    echo "Cloning Git repo.."
    mkdir gitrepo
    git clone git@github.com:lucasbento/graphql-pokemon.git ./gitrepo
fi
