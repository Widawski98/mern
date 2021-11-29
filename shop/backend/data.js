import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Micha',
            email:'admin@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
          {
            name:'NATALKA',
            email:'USER@example.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:false,
        },
    ],
    products:[
        {
           
            name:'Acer Nitro 5',
            category:'PC',
            image:'/images/product1.jpg',
            price:1000,
            brand:'Acer',
            rating:4.5,
            numReviews:10,
            description:'Acer pc game',
            countInStock:10,

        },
             {
           
            name:'Acer Nitro 6',
            category:'PC',
            image:'/images/product2.jpg',
            price:3230,
            brand:'Acer',
            rating:2.5,
            numReviews:10,
            description:'Acer pc game',
            countInStock:10,

        },
             {
         
            name:'Acer Nitro 7',
            category:'PC',
            image:'/images/product3.jpg',
            price:325600,
            brand:'Acer',
            rating:1.5,
            numReviews:10,
            description:'Acer pc game',
            countInStock:10,

        },
             {
          
            name:'Acer Nitro 8',
            category:'PC',
            image:'/images/product4.jpg',
            price:3220,
            brand:'Acer',
            rating:3.5,
            numReviews:10,
            description:'Acer pc game',
            countInStock:10,

        },
             {
        
            name:'Acer Nitro 9',
            category:'PC',
            image:'/images/product5.jpg',
            price:3220,
            brand:'Acer',
            rating:4.5,
            numReviews:1,
            description:'Acer pc game',
            countInStock:10,

        },
             {
     
            name:'Acer Nitro 10',
            category:'PC',
            image:'/images/product6.jpg',
            price:3600,
            brand:'Acer',
            rating:5,
            numReviews:20,
            description:'Acer pc game',
            countInStock:10,

        },
    ]
}
export default data;