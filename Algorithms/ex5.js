/**
 * todo : 5. Using JavaScript, write a function findNearestPrime that receives a parameter N and returns the largest prime number that is lower than or equal N.
 * * step 1: check prime numbers and push prime numbers to PrimeNumberArray
 * * step 2: check nearest prime in PrimeNumberArray
 */

const checkPrimeNumber = ( n ) => {
	let flag = true;

	if ( n < 2 ) return false;
	else {
		for ( let i = 2; i < n - 1; i++ ) {
			if ( ( n % i ) === 0 ) {
				flag = false;
				break;
			}
		}
	}
	return flag;
};


const findNearestPrime = ( N ) => {
	if ( N < 2 ) return 'N must be greater than or equal 2';
	if ( N === 2 ) return 2;

	const PrimeNumberArray = [];

	for ( let i = 2; i <= N; i++ ) {
		let flag = checkPrimeNumber( i );
		if ( flag ) {
			PrimeNumberArray.push( i );
		}
	}
	console.log( PrimeNumberArray );


	if ( N === PrimeNumberArray[ PrimeNumberArray.length - 1 ] ) {
		return PrimeNumberArray[ PrimeNumberArray.length - 2 ];
	} else {
		return PrimeNumberArray[ PrimeNumberArray.length - 1 ];
	}
};

let kq = findNearestPrime( 3 );
console.log( kq );
