  import bcrypt from 'bcryptjs';
  
  const data = {
       users: [
           {
               name: 'Simone', 
               email: 'simone@example.com', 
               password: bcrypt.hashSync('1234', 8),
               isAdmin: true,
           },
           {
            name: 'John', 
            email: 'user@mail.com', 
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
       ],
 
    products: [
        {
            name: "NIKE Sweater black",
            category: "man",
            image: "/images/man-1.png",
            description: "Long sleeve sweater black, 100% cotton",
            price: 29,
            countInStock: 4,
            rating: 4.5,
            numReviews: 10,
            availableSize: ["M", "L", "XXL"]
        },
        {
            name: "LOGO Sweater navy",
            category: "man",
            image: "/images/man-2.png",
            description: "Long sleeve sweater navy with front logo print, 100% cotton",
            price: 27.99,
            countInStock: 0,
            rating: 3.0,
            numReviews: 11,
            availableSize: ["M", "L"]
        },
        {
            name: "IRONHACK Logo T-Shirt blue",
            category: "man",
            image: "/images/man-3.png",
            description: "Become a real Ironhacker wearing this unique shirt. Short sleeve t-shirt with front logo, blue.",
            price: 99,
            countInStock: 250,
            rating: 5,
            numReviews: 100,
            availableSize: ["S", "M", "L", "XL"]
        },
        {
            name: "LOGO print T-Shirt black",
            category: "man",
            image: "/images/man-4.png",
            description: "Black T-Shirt with cool black&white back print, 100% cotton",
            price: 19.99,
            countInStock: 2,
            rating: 4.0,
            numReviews: 7,
            availableSize: ["S", "M"]
        },
        {
            name: "ASOS Pullover light grey",
            category: "woman",
            image: "/images/woman-1.png",
            description: "Asymmetrical ladies' sweater with trumpet arm, light grey, 65% cotton, 35% polyester",
            price: 19.99,
            countInStock: 0,
            rating: 3.5,
            numReviews: 8,
            availableSize: ["XS", "M", "L"]
        },
        {
            name: "White Blouse, long sleeves",
            category: "woman",
            image: "/images/woman-2.png",
            description: "White Blouse with long sleeves and V-neck, 100% polyester",
            price: 29,
            countInStock: 14,
            rating: 4,
            numReviews: 23,
            availableSize: ["S", "XL"]
        },
        {
            name: "Mini dress black&white checked",
            category: "woman",
            image: "/images/woman-3.png",
            description: "Cute mini strap dress black&white checked, 100% viscose",
            price: 29.99,
            countInStock: 10,
            rating: 3.5,
            numReviews: 12,
            availableSize: ["XS", "S", "L"]
        },
        {
            name: "Long beach dress, green with prints",
            category: "woman",
            image: "/images/woman-4.png",
            description: "Beautiful long summer beach dress with extravagant cut, green color with yellow flower prints",
            price: 50.99,
            countInStock: 12,
            rating: 4.5,
            numReviews: 16,
            availableSize: ["M", "L", "XL", "XXL"]
        }
    ]
};

export default data;