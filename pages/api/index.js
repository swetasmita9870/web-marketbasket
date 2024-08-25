import { API_URL } from "@/Config";
import request, { gql } from "graphql-request"

export const getCategories = async (number = '13') => {
  const query = gql`
query MyQuery {
  categories(first: ${number}) {
    name
    id
    slug
    icon {
      url
    }
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
export const getCategorieProducts = async (categoryName) => {
  const query = gql`
query MyQuery {
  categories(where: {slug: "${categoryName}"}) {
    product {
       price
    id
    name
    rating
    slug
    type
    currency
    description
    quantity
    offerEnds
    offers
    discountedPrice
    productImage {
      url
    }
    }
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
export const getProduct = async (productname) => {
  const query = gql`
query MyQuery {
  products(where: {slug: "${productname}"}) {
    price
    id
    name
    rating
    slug
    type
    currency
    description
    quantity
    offerEnds
    offers
    discountedPrice
    productImage {
      url
    }
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
export const getPopularProducts = async (rating = 3.5) => {
  const query = gql`
query MyQuery {
  products(where: {rating_gt: ${rating}}) {
    name
    price
    discountedPrice
    currency
    slug
    productImage {
      url
    }
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
