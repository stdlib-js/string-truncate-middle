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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# truncateMiddle

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Truncate a string in the middle to a specified length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import truncateMiddle from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-truncate-middle@v0.2.1-deno/mod.js';
```

#### truncate( str, len\[, seq] )

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
import truncateMiddle from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-truncate-middle@v0.2.1-deno/mod.js';

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



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-truncate`][@stdlib/string/truncate]</span><span class="delimiter">: </span><span class="description">truncate a string to a specified length.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-truncate-middle.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-truncate-middle

[test-image]: https://github.com/stdlib-js/string-truncate-middle/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string-truncate-middle/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-truncate-middle/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-truncate-middle?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-truncate-middle.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-truncate-middle/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-truncate-middle#cli
[cli-url]: https://github.com/stdlib-js/string-truncate-middle/tree/cli
[@stdlib/string-truncate-middle]: https://github.com/stdlib-js/string-truncate-middle/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-truncate-middle/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-truncate-middle/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-truncate-middle/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-truncate-middle/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-truncate-middle/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-truncate-middle/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-truncate-middle/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-truncate-middle/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/truncate]: https://github.com/stdlib-js/string-truncate/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
