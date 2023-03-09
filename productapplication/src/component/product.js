// import React, { useState } from 'react'

// function Product() {
//     const [productName,setProductName] =useState('')
//     const [products,setProducts]=useState([{
        
//     }])
    

//     const [index,setIndex] = useState()
    

     
//     const submitClick =( )=>{
   
  
      
        
    
//     }
 


// console.log(index)
    
//   return (
//     <div>
//          <h1>PRODUCT APPLICATION</h1>
//          <div>
//             <form >
//                 <input  onChange={(event)=>{
//                     event.preventDefault();
               
//                     setProductName(event.target.value)}} type="text" value={productName} />
//              </form>
//              <button onClick={()=>{
//               submitClick()
//              }}>add</button>
//          </div>
//          {
//             products && products.length > 0 && products.map((item,index)=>(

//                 <div key={index}>{item}{index} <button onClick={()=>{
//                      setIndex (index);
//                     setProductName(item)}}
                    
//                     >edit</button> <button onClick={()=>{const newA = products.filter((value) => value !== item);
//                 setProducts(newA)
//             }}>delete</button></div>
               
//             ))
//          }
//     </div>
//   )
// }

// export default Product



import React, { useEffect,useState } from 'react'

function Product() {

    const [productName, setPrductName]=useState("")
    const [products,setProducts]=useState([])
    const [id,setId]=useState()
    const [index,setIndex]=useState()
    

    // useEffect(()=>{
    //     localStorage.setItem("products",JSON.stringify(products))
    // },[products])

    const getProducts = localStorage.getItem("products")
    const productMap =JSON.parse( getProducts)
    console.log(JSON.parse( getProducts))
    



    // localStorage.setItem("products",JSON.stringify([ 
    //     {id: 1, name: ""}, {id: 2, name: "sfsdsdfsdfadas"}, {id: 3, name: "sdsd"}]))


//   products[2].name = "sdfs"

const addProduct = ()=>{
    if(id){
       

        products[index] ={id:id,name:productName}
        setPrductName("");
      }else{
       setProducts([...products,{id:products.length+1 ,name:productName}])

       setPrductName("");
      }
}

  return (
    <div>
        <h1>PRODUCT APPLICATION</h1>
        <form>
            <input type="text" onChange={(event)=>{setPrductName(event.target.value);console.log(event.target.value)}} value={productName} />
        </form>
        <button onClick={()=>{addProduct()
            // setPrductName("");setProducts([...products,{id:products.length+1 ,name:productName}])
        }
            }>{id ?"update":"add"}</button>

                 {
            productMap && products.length > 0 && products.map((item,index)=>(

                <div key={index}>{item.name}{index} <button onClick={()=>{
                  setId(item.id);
                    setIndex(index)
                     setPrductName(item.name)}}
                    
                    >edit</button> <button onClick={()=>{const newA = products.filter((value) => value !== item);
                setProducts(newA)
            }}>delete</button></div>
               
            ))
         }
    </div>
  )
}

export default Product

