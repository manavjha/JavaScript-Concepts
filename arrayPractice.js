// array logic, create 2D array



const getProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products')
	const result = await response.json()
	console.log(result)
  const tot_price = result.reduce( (all, item) => {
      all += item.price;
      return all
  } ,0)
  
  //parseFloat(result).toFixed(2)
  
  console.log(parseFloat(tot_price).toFixed(2))
}

console.log(getProducts())



