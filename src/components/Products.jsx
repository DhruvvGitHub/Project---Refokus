import Product from "./Product"

const Products = () => {

    var products = [
        {title: "Arqitel", description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate through real-world implementation.", live: true, case: false},
        {title: "Cula", description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates", live: true, case: false},
        {title: "TTR", description:"We've created an interactive site using generative Al to allow users to engage with our thinking about Ai, industry trends and design easily.", live: true, case: true},
        {title: "Maniv", description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: true, case: true},
        {title: "Yahoo!", description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop", live: true, case: true},
        {title: "Rainfall", description:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live: true, case: false},
        {title: "Jungle", description:"We crafted a timeless visual system for Jungle Ventures, covering all espects of web design, and empowered their marketing team to scale organically using Webflow.", live: true, case: true},
        {title: "Silvr", description:"We teamed up with the leading financing solutions provider of UAE- Silvr to audit, refine and evolve their brand in the era of AI.", live: true, case: true}
    ]

  return (
    <div>
      {products.map((elem, index) => {
        return < Product key={index} data={elem} />
      })}
    </div>
  )
}

export default Products