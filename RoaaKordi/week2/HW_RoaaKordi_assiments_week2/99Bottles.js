
let bottles1  = 99;
let bottles2 = 98;
/*
while(i < 10)
{
    console.log('Value of i is:' + i );
    i++;
}*/

do{  
    if( bottles1 < 100 && bottles1 > 1){
       
    console.log(bottles1 + 'bottles of beer on the wall,' + bottles1 + 'bottles of beer.Take one down and pass it around,' + bottles2 +'bottles of beer on the wall.'  );
    bottles1--;
    bottles2--;
    }
  
}while( bottles1 <= 99 && bottles1>=2 && bottles2 <=98 )
    console.log(bottles1 + 'bottle of beer on the wall,' + bottles1 + 'bottle of beer.Take one down and pass it around, No more bottles of beer on the wall.'  );
    console.log('No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall.');
 


/////////////////////
/*
let j = -10;
do{
    console.log('value of j is:'+ j++);
}
while(j<=0)*/