



  var n=prompt("Enter the number")
   var i;
   printPrime(n);                   // function check whether a number is prime or not


                                        // Function to print primes
function printPrime(n)
  {
	for (i = 2; i <= n; i++) 
           {
		if (isPrime(i))
		console.log(i +" ");
	   }
  }



function isPrime(n)
{
	
	   if (n <= 1)
		return false;

	
	for (let i = 2; i < n; i++)
              {
		if (n % i == 0)
			return false;
              }
	return true;
}


