// @ts-check
let obj123 ={}

let arr45 = ["xx","yy", "xx"]

const ChkObj = () => {

    for (let index = 0; index < arr45.length; index++) {
      
        if(obj123[arr45[index]]){
            obj123[arr45[index]] = obj123[arr45[index]] + 1
        } else {
            obj123[arr45[index]] =1
        }
    }
    return obj123
}
// getServerSideProps
console.log(ChkObj())
// https://fakestoreapi.com/products

const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const result = await response.json();
  return result
}

getAllProducts().then( val => {
    
    const totalPrice = val.reduce( (all,item) => {
       all +=item.price
       return all
    } ,0)
    console.log(totalPrice)
})

// TODO things Today as planned
// 1. Next JS app with getStaticProps and getServerSideProps
// 2. Typescript docs.