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
    title: "Products",
    path: "/search",
  },
  {
    title: "About Us",
    path: "/aboutus",
  },
];

export const PRODUCTS = [
  {
    handle: "vfeel-v9",
    title: "VFEEL V9 Disposable",
    thumbnail: "/products/vfeel-v9-disposable-main.png",
    amount: 16,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "vfeel",
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
    title: "Freeton F-Resin Max 2",
    thumbnail: "/products/freeton-fresin-pro-2-main.png",
    amount: 14,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "freeton",
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
    handle: "freeton-noble",
    title: "Freeton Noble Pro",
    thumbnail: "/products/freeton_noble_pro_main.png",
    amount: 13,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "freeton",
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
    handle: "leafbar-platinum",
    title: "Leafbar Platinum",
    thumbnail: "/products/leafbar-platinum.png",
    amount: 10,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "vfun",
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
    handle: "leafbar-platinum",
    title: "Leafbar Platinum",
    thumbnail: "/products/leafbar-platinum-1.png",
    amount: 10,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "vfun",
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
    handle: "vfeel-v9",
    title: "VFeel V9",
    thumbnail: "/products/vfeel-1.png",
    amount: 10,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "vfeel",
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
    handle: "freeton-noble",
    title: "Freeton Noble Pro",
    thumbnail: "/products/freeton-noble-pro-1.png",
    amount: 10,
    availableForSale: true,
    images: ["/products/freeton_resin_dragonfruit.jpg", "/products/freeton_resin_strawberrybanana.jpg",],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "freeton",
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





export const COLLECTIONS = [
  {
    title: "All",
    value: "all",
    path: "/search",
  },
  {
    title: "Freeton",
    value: "freeton",
    path: "/search/freeton",
  },
  {
    title: "VFeel",
    value: "vfeel",
    path: "/search/vfeel",
  },
  {
    title: "VFun x Leafbar",
    value: "vfun",
    path: "/search/vfun",
  },
]