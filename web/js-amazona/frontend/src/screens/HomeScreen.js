import axios from 'axios';

const HomeScreen = {
    render: async () => {
        // const { products } = data;

        const response = await axios({
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response || response.statusText !== 'OK') return '<h1>Error! Could not fetch data. Something went wrong!</h1>';

        const products = response.data;

        return `
        <div class="products">
            ${products.map((product) => (
        `
                <div class="product">
                    <a class="product-img" href="/#/product/${product._id}">
                        <img src="${product.image}" alt="Product 1">
                    </a>
                    <div class="product-name">
                        <a href="/#/product/${product._id}">
                            ${product.name}
                        </a>
                    </div>
                    <div class="product-brand">
                        ${product.brand}
                    </div>
                    <div class="product-price">
                        $${product.price}
                    </div>
                </div>
                `
    )).join('\n')}
        </div>
        `;
    },
};

export default HomeScreen;
