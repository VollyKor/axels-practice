import {
    ProductDescr,
    ProductName,
    ProductQn,
    ProductsContainer,
} from 'styled/ProductInfo';

interface Props {
    name?: string;
    color?: string;
    quantity?: number;
}

const ProductInfo = ({
    name = 'unknown',
    color = 'default',
    quantity = 1,
}: Props) => (
    <ProductsContainer className="p-1">
        <ProductName className="h6">{name}</ProductName>
        <ProductDescr>{color}</ProductDescr>
        <ProductQn>Quantity {quantity}</ProductQn>
    </ProductsContainer>
);

export default ProductInfo;
