 const productosFetch = [];  

 const pedirPost = async()=>{

    const resp = 

    await fetch (  'https://api.escuelajs.co/api/v1/products');

    const data = await resp.json()

    let filtrar = data.filter (item => item.category.name === "Electronics");

    filtrar.forEach(element => {

        const u = {marca:element.title,modelo:element.description,precio:element.price*4300,foto:element.images,cantidad:1};
        productosFetch.push(u);
        console.log(u);
    });

 }   

 const  getProducts = () =>{

    pedirPost();

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productosFetch)
        },500)
    })
}
export default getProducts;
