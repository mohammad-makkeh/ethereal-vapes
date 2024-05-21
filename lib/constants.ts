export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';





export const MENU_ITEMS = [
  {
    title: "products",
    path: "/products",
  }
];

export const PRODUCTS = [
  {
    handle: "freeton-resin",
    title: "Freeton Ultra Resin Max 2",
    thumbnail: "/products/freeton_resin_dragonfruit.jpg",
    amount: 14,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: ["Mixed Berries", "Dragon Fruit", "Strawberry Banana", "Aloe Grape", "Ice Peach"]
      }
    ],
    variants: [
      {
        id: "freeton-resin_@@_mixed_berries",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mixed Berries"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_dragon_fruit",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Dragon Fruit"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_strawberry_banana",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Banana"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_aloe_grape",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Aloe Grape"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_ice_peach",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Ice Peach"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      }
    ]
  },
  {
    handle: "freeton-resin",
    title: "Freeton Ultra Resin Max 2",
    thumbnail: "/products/freeton_resin_dragonfruit.jpg",
    amount: 14,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: ["Mixed Berries", "Dragon Fruit", "Strawberry Banana", "Aloe Grape", "Ice Peach"]
      }
    ],
    variants: [
      {
        id: "freeton-resin_@@_mixed_berries",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mixed Berries"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_dragon_fruit",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Dragon Fruit"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_strawberry_banana",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Banana"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_aloe_grape",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Aloe Grape"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_ice_peach",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Ice Peach"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      }
    ]
  },
  {
    handle: "freeton-resin",
    title: "Freeton Ultra Resin Max 2",
    thumbnail: "/products/freeton_resin_dragonfruit.jpg",
    amount: 14,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: ["Mixed Berries", "Dragon Fruit", "Strawberry Banana", "Aloe Grape", "Ice Peach"]
      }
    ],
    variants: [
      {
        id: "freeton-resin_@@_mixed_berries",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mixed Berries"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_dragon_fruit",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Dragon Fruit"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_strawberry_banana",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Banana"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_aloe_grape",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Aloe Grape"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_ice_peach",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Ice Peach"
          }
        ],
        price: {
          amount: 14,
          currencyCode: "USD"
        }
      }
    ]
  },
]


