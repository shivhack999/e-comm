import shoes2 from '../../assets/shoes2.png';
import images2 from '../../assets/images2.png';
const ProductObj = {
    categories:{
        tShirt:{
            '#12345': {
                title: "Women's Tree Runner Go",
                minPrice: '299.00',
                maxPrice: '399.00',
                shippingCharges: 'free shipping',
                productSelled: 20,
                colors: {
                    black:{
                        availableSize: new Set([
                            6.5, 8, 7.5, 10.5
                        ]), 

                        imagesList: [shoes2, shoes2, shoes2, shoes2, shoes2, shoes2],
                    },
                    grey:{
                        availableSize: new Set([
                            7, 6, 8, 10
                        ]),

                        imagesList: [images2, images2, images2, images2, images2, images2],
            
                    },
                    
                    orange:{
                        availableSize: new Set([
                            6.5, 6, 8, 10, 7, 7.5
                        ]), 

                        imagesList: [shoes2, shoes2, shoes2, shoes2, shoes2, shoes2],
                    },

                    skyblue:{
                        availableSize: new Set([
                            9.5, 7, 6, 7.5, 8, 10
                        ]), 
                        
                        imagesList: [shoes2, shoes2, images2, shoes2, shoes2, shoes2]
                    },
                }
            }
        } 
    }
}

export default ProductObj;