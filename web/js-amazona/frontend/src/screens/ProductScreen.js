import { getProduct } from "../../api";
import { parseRequestURL } from "../utils";

const ProductScreen = {
    render: async () => {
        const parsedURL = parseRequestURL();
        const product = await getProduct(parsedURL.id);
        if (product.error) return `<h1>${product.error}</h1>`
        return `
                <h1>${product.name}</h1>
            `
    },
};

export default ProductScreen;
