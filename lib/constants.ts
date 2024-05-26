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
    handle: "vfeel",
    title: "VFEEL V9 18ML 8000 Puff",
    heroImage: "/products/vfeel-v9-disposable-main.png",
    thumbnail: "/products/vfeel/vfeel-thumbnail.png",
    amount: 13.99,
    availableForSale: true,
    images: [
      {
        src: "/products/vfeel/triple_berry_ice.png",
        option: "Triple Berry Ice"
      },
      {
        src: "/products/vfeel/strawberry_watermelon_ice.png",
        option: "Strawberry Watermelon Ice"
      },
      {
        src: "/products/vfeel/strawberry_peach_ice.png",
        option: "Strawberry Peach Ice"
      },
      {
        src: "/products/vfeel/mango_peach_watermelon.png",
        option: "Mango Peach Watermelon"
      },
      {
        src: "/products/vfeel/blue_razz_lemonade.png",
        option: "Blue Razz Lemonade"
      },
    ],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "vfeel",
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: ["Blue Razz Lemonade", "Mango Peach Watermelon", "Strawberry Peach Ice", "Strawberry Watermelon Ice", "Triple Berry Ice"]
      }
    ],
    variants: [
      {
        id: "vfeel_@@_triple_berry_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Triple Berry Ice"
          }
        ],
        price: {
          amount: 13.99,
          currencyCode: "USD"
        }
      },
      {
        id: "vfeel_@@_strawberry_watermelon_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Watermelon Ice"
          }
        ],
        price: {
          amount: 13.99,
          currencyCode: "USD"
        }
      },
      {
        id: "vfeel_@@_strawberry_peach_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Peach Ice"
          }
        ],
        price: {
          amount: 13.99,
          currencyCode: "USD"
        }
      },
      {
        id: "vfeel_@@_mango_peach_watermelon",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mango Peach Watermelon"
          }
        ],
        price: {
          amount: 13.99,
          currencyCode: "USD"
        }
      },
      {
        id: "vfeel_@@_blue_razz_lemonade",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Blue Razz Lemonade"
          }
        ],
        price: {
          amount: 13.99,
          currencyCode: "USD"
        }
      }
    ]
  },
  {
    handle: "freeton-resin",
    title: "Freeton F-Resin Max 2 8000 Puff",
    heroImage: "/products/freeton-fresin-pro-2-main.png",
    thumbnail: "/products/freeton/freeton-resin-max-2-thumbnail.png",
    amount: 12.99,
    availableForSale: true,
    images: [
      {
        src: "/products/freeton/max/Aloe_Grape.png",
        option: "Aloe Grape"
      },
      {
        src: "/products/freeton/max/Blueberry_Lemonade.png",
        option: "Blueberry Lemonade"
      },
      {
        src: "/products/freeton/max/Cool_Mint.png",
        option: "Cool Mint"
      },
      {
        src: "/products/freeton/max/Mango_Ice.png",
        option: "Mango Ice"
      },
      {
        src: "/products/freeton/max/Mixed_Berries.png",
        option: "Mixed Berries"
      },
      {
        src: "/products/freeton/max/Peach_Ice.png",
        option: "Peach Ice"
      },
      {
        src: "/products/freeton/max/Raspberry_Watermelon.png",
        option: "Raspberry Watermelon"
      },
    ],
    relatedproducts: ["freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin"],
    collection: "freeton",
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: [
          "Aloe Grape",
          "Blueberry Lemonade",
          "Cool Mint",
          "Mango Ice",
          "Mixed Berries",
          "Peach Ice",
          "Raspberry Watermelon"
        ]
      }
    ],
    variants: [
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
          amount: 12.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_blueberry_lemonade",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Blueberry Lemonade"
          }
        ],
        price: {
          amount: 12.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_cool_mint",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Cool Mint"
          }
        ],
        price: {
          amount: 12.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_mango_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mango Ice"
          }
        ],
        price: {
          amount: 12.99,
          currencyCode: "USD"
        }
      },
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
          amount: 12.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_peach_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Peach Ice"
          }
        ],
        price: {
          amount: 12.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-resin_@@_raspberry_watermelon",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Raspberry Watermelon"
          }
        ],
        price: {
          amount: 12.99,
          currencyCode: "USD"
        }
      },
    ]
  },
  {
    handle: "freeton-noble",
    title: "Freeton Noble Pro 16ML 5000 Puff",
    heroImage: "/products/freeton_noble_pro_main.png",
    thumbnail: "/products/freeton/freeton-noble-pro-thumbnail.png",
    amount: 11.99,
    availableForSale: true,
    images: [
      {
        src: "/products/freeton/noble/Blackberry_Ice.png",
        option: "Blackberry Ice"
      },
      {
        src: "/products/freeton/noble/Blue_Razz.png",
        option: "Blue Razz"
      },
      {
        src: "/products/freeton/noble/Cuba_Cream_Tobacco.png",
        option: "Cuba Cream Tobacco"
      },
      {
        src: "/products/freeton/noble/Double_Apple.png",
        option: "Double Apple"
      },
      {
        src: "/products/freeton/noble/Mango_Peach_Watermelon.png",
        option: "Mango Peach Watermelon"
      },
      {
        src: "/products/freeton/noble/Pink_Lemonade.png",
        option: "Pink Lemonade"
      }
    ],
    relatedproducts: [
      "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", 
      "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", 
      "freeton-resin", "freeton-resin", "freeton-resin"
    ],
    collection: "freeton",
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: [
          "Blackberry Ice",
          "Blue Razz",
          "Cuba Cream Tobacco",
          "Double Apple",
          "Mango Peach Watermelon",
          "Pink Lemonade"
        ]
      }
    ],
    variants: [
      {
        id: "freeton-noble_@@_blackberry_ice",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Blackberry Ice"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-noble_@@_blue_razz",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Blue Razz"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-noble_@@_cuba_cream_tobacco",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Cuba Cream Tobacco"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-noble_@@_double_apple",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Double Apple"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-noble_@@_mango_peach_watermelon",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Mango Peach Watermelon"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      },
      {
        id: "freeton-noble_@@_pink_lemonade",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Pink Lemonade"
          }
        ],
        price: {
          amount: 11.99,
          currencyCode: "USD"
        }
      }
    ]
  },
  {
    handle: "leafbar-platinum",
    title: "Leafbar Platinum 16ML 5000 puff",
    heroImage: "/products/leafbar-platinum.png",
    thumbnail: "/products/vfun/vfun-thumbnail.png",
    amount: 10.99,
    availableForSale: true,
    images: [
      {
        src: "/products/vfun/Strawberry_Watermelon_Passion_Fruit.png",
        option: "Strawberry Watermelon Passion Fruit"
      },
      {
        src: "/products/vfun/Strawberry_Mango_Watermelon.png",
        option: "Strawberry Mango Watermelon"
      },
      {
        src: "/products/vfun/Peach_Mango_Watermelon.png",
        option: "Peach Mango Watermelon"
      }
    ],
    relatedproducts: [
      "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", 
      "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", "freeton-resin", 
      "freeton-resin", "freeton-resin", "freeton-resin"
    ],
    collection: "vfun",
    descriptionHtml: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    options: [
      {
        id: "flavor",
        name: "flavor",
        title: "flavor",
        values: [
          "Strawberry Watermelon Passion Fruit",
          "Strawberry Mango Watermelon",
          "Peach Mango Watermelon"
        ]
      }
    ],
    variants: [
      {
        id: "leafbar-platinum_@@_strawberry_watermelon_passion_fruit",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Watermelon Passion Fruit"
          }
        ],
        price: {
          amount: 10.99,
          currencyCode: "USD"
        }
      },
      {
        id: "leafbar-platinum_@@_strawberry_mango_watermelon",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Strawberry Mango Watermelon"
          }
        ],
        price: {
          amount: 10.99,
          currencyCode: "USD"
        }
      },
      {
        id: "leafbar-platinum_@@_peach_mango_watermelon",
        availableForSale: true,
        selectedOptions: [
          {
            name: "flavor",
            value: "Peach Mango Watermelon"
          }
        ],
        price: {
          amount: 10.99,
          currencyCode: "USD"
        }
      }
    ]
  }
  
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