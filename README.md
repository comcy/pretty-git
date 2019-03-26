# pretty git

This repository contains a collection of some wrappers to easily us git built-in functionalities.

**Content**

- [pretty git](#pretty-git)
  - [Intention](#intention)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Tools](#tools)
  - [Development](#development)
  - [Tests](#tests)
  - [License](#license)

---


## Intention


## Installation


## Usage

### Tools

**Submodules**

First level submodules

```
$ git submodule foreach 'echo `git rev-parse @`' 
```
Submodules deeper then first level

```
$ git submodule foreach 'git submodule foreach --recursive `echo "git rev-parse @"`'
```

## Development




## Tests

Test

```
npm test
```


## License

MIT license

Copyright 2018 © comcy.


