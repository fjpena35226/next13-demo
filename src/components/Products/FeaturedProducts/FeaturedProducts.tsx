import React from 'react'
import { getProducts } from 'src/helpers/api';
import { Product } from 'src/helpers/api/models/product.model';
import FeaturedProductsContainer from './FeaturedProductsContainer.client';
import ProductCard from '../Product/ProductCard.client';

async function FeaturedProducts() {
    const products: Product[] = await getProducts();
    
    return (
      <FeaturedProductsContainer>
        {products?.slice(1, 9).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </FeaturedProductsContainer>
    );
}

export default FeaturedProducts
