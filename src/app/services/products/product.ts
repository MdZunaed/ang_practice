export interface ProductsDto {
    products: Product[];
    total:    number;
    skip:     number;
    limit:    number;
}
export interface Product {
    id:                   number;
    title:                string;
    description:          string;
    price:                number;
    discountPercentage:   number;
    rating:               number;
    stock:                number;
    tags:                 string[];
    brand:                string;
    sku:                  string;
    weight:               number;
    warrantyInformation:  string;
    shippingInformation:  string;
    minimumOrderQuantity: number;
    images:               string[];
    thumbnail:            string;
}