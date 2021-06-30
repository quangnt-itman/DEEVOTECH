/**
 * todo: 6. Using JavaScript, given a list of temperature degrees temperatures, write a function sortTemperatures to sort the list by their distance to 0 degree.
 * F -> C = (5/9)*(F-32)
 * C -> F = ((9/5)*C) + 32
 * * step 1: detack number and temperature degree unit to splitNumberAndTemperatures
 * * step 2: choose 'C' degree is a standart degree unit
 * 	? + return an Object array with a same type temperature property
 * * step 3: sort array with min to max value belong sametype
 * * step 4: return result with sorted array temperatures
 */
const sortTemperatures = ( temperatures ) => {
	let splitNumberAndTemperatures = temperatures.map( ( item, index, array ) => {
		return item.split( ' ' );
	} );

	let takeTemperatures2SameType = splitNumberAndTemperatures.map( ( item, index, array ) => {
		if ( item[ 1 ] === 'C' ) {
			return {
				number: parseInt(item[ 0 ]),
				temperature: item[ 1 ],
				sameType: parseInt(item[ 0 ])
			};
		} else {
			return {
				number: parseInt( item[ 0 ] ),
				temperature: item[ 1 ],
				sameType: ( 5 / 9 ) * ( item[ 0 ]  - 32 )
			};
		}
	} );
	console.log( takeTemperatures2SameType );

	return takeTemperatures2SameType.sort( ( a, b ) => a.sameType - b.sameType )
		.map( item => item.number + ' ' + item.temperature );
};

const temperatures = [ '32 C', '100 F', '-2 C', '-150 F' ];
console.log( sortTemperatures( temperatures ) );


