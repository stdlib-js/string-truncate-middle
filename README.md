<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# truncateMiddle

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Truncate a string in the middle to a specified length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-truncate-middle
```

</section>

<section class="usage">

## Usage

```javascript
var truncateMiddle = require( '@stdlib/string-truncate-middle' );
```

#### truncate( str, len[, seq] )

Truncates a string in the middle to a specified length.

```javascript
var out = truncateMiddle( 'beep boop', 7 );
// returns 'be...op'
```

By default, the truncated string uses the replacement sequence `'...'`. To customize the replacement sequence, provide a `seq` argument:

```javascript
var out = truncateMiddle( 'beep boop', 7, '!' );
// returns 'bee!oop'

out = truncateMiddle( 'beep boop', 7, '!!!' );
// returns 'be!!!op'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var truncateMiddle = require( '@stdlib/string-truncate-middle' );

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var out = truncateMiddle( str, 15 );
// returns 'Lorem ... elit.'

str = 'To be or not to be, that is the question';
out = truncateMiddle( str, 19, '|' );
// returns 'To be or | question'

str = 'The quick fox jumps over the lazy dog.';
out = truncateMiddle( str, 28, '...' );
// returns 'The quick fox...he lazy dog.'

str = '🐺 Wolf Brothers 🐺';
out = truncateMiddle( str, 7 );
// returns '🐺 ... 🐺'

str = '🐺 Wolf Pack 🐺';
out = truncateMiddle( str, 7, '🐺🐺🐺' );
// returns '🐺 🐺🐺🐺 🐺'
```

</section>

<!-- /.examples -->


<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-truncate-middle
```

</section>

<section class="usage">

### Usage

```text
Usage: truncate-middle [options] [<string>] --len <length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          String length.
         --seq str             Custom replacement sequence. Default: '...'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ truncate-middle 'Hello, World!' --len 8
Hel...d!

$ truncate-middle 'Hello, World!' --len 6 --seq '!'
Hel|d!
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-truncate-middle.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-truncate-middle

[test-image]: https://github.com/stdlib-js/string-truncate-middle/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-truncate-middle/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-truncate-middle/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-truncate-middle?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-truncate-middle.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-truncate-middle/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-truncate-middle/main/LICENSE

</section>

<!-- /.links -->
