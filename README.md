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

```
$ git submodule foreach 'echo $path `git rev-parse HEAD`' --recursive > ./build_matrix.log
```

```
$ git submodule foreach "git submodule foreach `echo -e "$path `git rev-parse @`\\n"'" --recursive
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


