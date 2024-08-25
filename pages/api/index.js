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
export const getCart = async () => {
  const query = gql`
query MyQuery {
  userCarts {
    currency
    price
    productDescription
    productImage
    productName
    quantity
    id
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
export const addToCart = async (data = {}) => {
  const query = gql`
mutation AddToCart {
  createUserCart(
    data: {productName: "${data.productName}", price: ${data.price}, productImage: "${data.productImage}", productDescription: "${data.productDescription}",currency:"${data.currency}",quantity:${data.quantity}}
  ) {
    id
  }
  publishManyUserCarts(to: PUBLISHED) {
    count
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
export const removeCart = async (productId) => {
  const query = gql`
mutation MyMutation {
  deleteUserCart(where: {id: "${productId}"}) {
    id
  }
  publishManyUserCarts(to: PUBLISHED) {
    count
  }
}
`
  const res = await request(API_URL, query);
  return res;
}
