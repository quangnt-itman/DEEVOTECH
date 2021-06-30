/**
 * todo: (( a + b)* h ) / 2
 */
function cong ( a, b ) {
  let promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( a + b )
      , 1000 );
  } );
  return promise;
}

function nhan ( kq, h ) {
  let promise = new Promise( ( ( resolve, reject ) => {
    setTimeout( () => resolve( kq * h ), 1000 );
  } ) );
  return promise;
}

function chia ( kq, c ) {
  let promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( kq / c ), 1000 );
  } );
  return promise;
}

async function Tinh ( a, b, h, c ) {
  let ab = await cong( a, b );
  let abh = await nhan( ab, h );
  let abhc = await chia( abh, c );

  console.log( abhc );
  return abhc;
}

Tinh( 10, 20, 3, 2 );
// Tinh( 10, 20, 3, 2 ).then( kq => console.log( kq ) ).catch( err => console.log( err ) );


