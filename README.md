# Release Tag

[![Build Status](https://travis-ci.org/jeffersondanielss/release-tag.svg?branch=master)](https://travis-ci.org/jeffersondanielss/release-tag)
[![Maintainability](https://api.codeclimate.com/v1/badges/d1fe409e97fa1cafc973/maintainability)](https://codeclimate.com/github/jeffersondanielss/release-tag/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d1fe409e97fa1cafc973/test_coverage)](https://codeclimate.com/github/jeffersondanielss/release-tag/test_coverage)

<center>
  <img src="preview.png" alt="how use preview">
</center>

## What is it?
Updating the project tag based on the type of change.

- Major, Big changes in the API (1.0.0)
- Minor, Adding features (0.1.0)
- Path, Bug fixes (0.0.1)
- Dev, Development versions (0.0.0.1.bug)

## How install?

Install Globally
```bash
$ npm i -g release-tag
```

## how use

```bash
$ release-tag
```

## Development
Scripts useful at the time of development, example:

```bash
$ yarn test
```

## Comands

command | description 
--------| -----------
build | Remove the types and build in the / lib folder
type | Does static type checking
test | run unit tests
lint | run the linter
doctor | Run the build, unit tests, type checking, and linter to see if everything is fine
doc:prepare | Generate docs
doc:server | Run server of docs pages
doc | Run build, doc:prepare and doc:server scripts
