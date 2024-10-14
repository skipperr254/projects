import data from '../data.js';

const HomeScreen = {
    render: () => {
        const { products } = data;

        return `
        <div class="products">
            ${products.map(product => (
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
        )).join("\n")}
        </div>
        `
    }
}

export default HomeScreen;