/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var numGraphemeClusters = require( '@stdlib/string-num-grapheme-clusters' );
var nextGraphemeClusterBreak = require( '@stdlib/string-next-grapheme-cluster-break' );
var format = require( '@stdlib/string-format' );
var round = require( '@stdlib/math-base-special-round' );
var floor = require( '@stdlib/math-base-special-floor' );


// MAIN //

/**
* Truncates a string in the middle to a specified length.
*
* @param {string} str - input string
* @param {integer} len - output string length (including sequence)
* @param {string} [seq='...'] - custom replacement sequence
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a string
* @returns {string} truncated string
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 5 );
* // returns 'b...p'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 5, '>>>' );
* // returns 'b>>>p'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 10 );
* // returns 'beep boop'
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 0 );
* // returns ''
*
* @example
* var str = 'beep boop';
* var out = truncateMiddle( str, 2 );
* // returns '..'
*
* @example
* var str = '🐺 Wolf Brothers 🐺';
* var out = truncateMiddle( str, 7 );
* // returns '🐺 ... 🐺'
*/
function truncateMiddle( str, len, seq ) {
	var seqLength;
	var fromIndex;
	var strLength;
	var seqStart;
	var nVisual;
	var seqEnd;
	var idx2;
	var idx1;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isNonNegativeInteger( len ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', len ) );
	}
	if ( arguments.length > 2 ) {
		if ( !isString( seq ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a string. Value: `%s`.', seq ) );
		}
	}
	seq = seq || '...';
	seqLength = numGraphemeClusters( seq );
	strLength = numGraphemeClusters( str );
	fromIndex = 0;
	if ( len > strLength ) {
		return str;
	}
	if ( len - seqLength < 0 ) {
		return seq.slice( 0, len );
	}
	seqStart = round( ( len - seqLength ) / 2 );
	seqEnd = strLength - floor( ( len - seqLength ) / 2 );
	nVisual = 0;
	while ( nVisual < seqStart ) {
		idx1 = nextGraphemeClusterBreak( str, fromIndex );
		fromIndex = idx1;
		nVisual += 1;
	}
	idx2 = idx1;
	while ( idx2 > 0 ) {
		idx2 = nextGraphemeClusterBreak( str, fromIndex );
		if ( idx2 >= seqEnd + fromIndex - nVisual ) {
			break;
		}
		fromIndex = idx2;
		nVisual += 1;
	}
	return str.substring( 0, idx1 ) + seq + str.substring( idx2 );
}


// EXPORTS //

module.exports = truncateMiddle;
