import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search bar and button
 * - Card container (repeatable)
 * Footer
 * - Copyright
 * - Linkes
 * - Address
 * - Contact us
 */

const imageAddress = "data:image/png;base64,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";
const swiggyApiCardImage = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660';

/** 
const data = fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3625249&lng=85.83262599999999&')
.then(data=>(data.json()))
.then(data=>data.data.cards.find(el=>el.card.card.id=='top_brands_for_you'))
.then(el=>el.card.card).then(el=>console.warn(el));
*/

const card =  {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "header": {
                "title": "Top restaurant chains in Bhubaneswar",
                "action": {},
                "headerStyling": {
                    "padding": {
                        "left": 16,
                        "top": 28,
                        "bottom": 18
                    }
                }
            },
            "layout": {
                "rows": 1,
                "columns": 20,
                "horizontalScrollEnabled": true,
                "itemSpacing": 32,
                "widgetPadding": {},
                "containerStyle": {
                    "containerPadding": {
                        "left": 16,
                        "right": 12,
                        "bottom": 12
                    }
                },
                "scrollBar": {
                    "scrollThumbColor": "#E46D47",
                    "scrollTrackColor": "#02060C",
                    "width": 54,
                    "height": 4,
                    "scrollStyling": {
                        "padding": {
                            "top": 6,
                            "bottom": 24
                        }
                    }
                },
                "widgetTheme": {
                    "defaultMode": {
                        "backgroundColour": "#1B3028",
                        "theme": "THEME_TYPE_DARK"
                    },
                    "darkMode": {
                        "backgroundColour": "#1B3028",
                        "theme": "THEME_TYPE_DARK"
                    }
                }
            },
            "id": "top_brands_for_you",
            "gridElements": {
                "infoWithStyle": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                    "restaurants": [
                        {
                            "info": {
                                "id": "72589",
                                "name": "Jugaad Jn.",
                                "cloudinaryImageId": "fq1uss75jajmt1oueyla",
                                "locality": "Kiit Road",
                                "areaName": "Patia",
                                "costForTwo": "₹150 for two",
                                "cuisines": [
                                    "North Indian",
                                    "Snacks",
                                    "Beverages",
                                    "Desserts",
                                    "Sweets"
                                ],
                                "avgRating": 4.2,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "72589",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "9963",
                                "avgRatingString": "4.2",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 26,
                                    "lastMileTravel": 2.1,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "26 mins",
                                    "lastMileTravelString": "2.1 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 22:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "50% OFF",
                                    "subHeader": "UPTO ₹100"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/jugaad-jn-kiit-road-patia-bhubaneswar-72589",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "244438",
                                "name": "Wow! Momo",
                                "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
                                "locality": "Infocity Squre",
                                "areaName": "Patia",
                                "costForTwo": "₹300 for two",
                                "cuisines": [
                                    "Tibetan",
                                    "Healthy Food",
                                    "Asian",
                                    "Chinese",
                                    "Snacks",
                                    "Continental",
                                    "Desserts",
                                    "Beverages"
                                ],
                                "avgRating": 4.1,
                                "feeDetails": {
                                    "restaurantId": "244438",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 3400
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 3400
                                },
                                "parentId": "1776",
                                "avgRatingString": "4.1",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 34,
                                    "lastMileTravel": 4.5,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "34 mins",
                                    "lastMileTravelString": "4.5 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 02:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "EVERY ITEM",
                                    "subHeader": "@ ₹99"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/wow-momo-infocity-squre-patia-bhubaneswar-244438",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "187738",
                                "name": "hotel Toshali",
                                "cloudinaryImageId": "qhep96bo9cw7zskizcr0",
                                "locality": "It Park Road",
                                "areaName": "Patia",
                                "costForTwo": "₹250 for two",
                                "cuisines": [
                                    "Chinese",
                                    "Indian",
                                    "Thalis"
                                ],
                                "avgRating": 4,
                                "feeDetails": {
                                    "restaurantId": "187738",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "103111",
                                "avgRatingString": "4.0",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 34,
                                    "lastMileTravel": 2.7,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "34 mins",
                                    "lastMileTravelString": "2.7 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 22:30:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "₹125 OFF",
                                    "subHeader": "ABOVE ₹249",
                                    "discountTag": "FLAT DEAL"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/hotel-toshali-it-park-road-patia-bhubaneswar-187738",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "237586",
                                "name": "FreshBox",
                                "cloudinaryImageId": "hetgepazucywarpwk9mj",
                                "locality": "Mother Complex",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Beverages",
                                    "Desserts",
                                    "Indian",
                                    "Chinese",
                                    "Tibetan"
                                ],
                                "avgRating": 4,
                                "feeDetails": {
                                    "restaurantId": "237586",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "83933",
                                "avgRatingString": "4.0",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 17,
                                    "lastMileTravel": 0.9,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "17 mins",
                                    "lastMileTravelString": "0.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "20% OFF",
                                    "subHeader": "UPTO ₹50"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/freshbox-mother-complex-patia-bhubaneswar-237586",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "71210",
                                "name": " Hot Chilly Fast Food & Restaurant",
                                "cloudinaryImageId": "mvohgoovez9vuuuwacgq",
                                "locality": "Magnetic Chowk",
                                "areaName": "KIIT Square ",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "North Indian",
                                    "Chinese",
                                    "Biryani",
                                    "Kebabs",
                                    "Fast Food",
                                    "Indian"
                                ],
                                "avgRating": 3.8,
                                "feeDetails": {
                                    "restaurantId": "71210",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 3400
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 3400
                                },
                                "parentId": "97245",
                                "avgRatingString": "3.8",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 32,
                                    "lastMileTravel": 3,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "32 mins",
                                    "lastMileTravelString": "3.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 22:45:00",
                                    "opened": true
                                },
                                "badges": {
                                    "imageBadges": [
                                        {
                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                            "description": "OnlyOnSwiggy"
                                        }
                                    ]
                                },
                                "select": true,
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {
                                            "badgeObject": [
                                                {
                                                    "attributes": {
                                                        "description": "OnlyOnSwiggy",
                                                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                    }
                                                }
                                            ]
                                        },
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "₹125 OFF",
                                    "subHeader": "ABOVE ₹249",
                                    "discountTag": "FLAT DEAL"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/-hot-chilly-fast-food-and-restaurant-magnetic-chowk-kiit-square-bhubaneswar-71210",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "338648",
                                "name": "KFC",
                                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                                "locality": "Chandaka Industrial Area",
                                "areaName": "Patia",
                                "costForTwo": "₹400 for two",
                                "cuisines": [
                                    "Burgers",
                                    "Biryani",
                                    "American",
                                    "Snacks",
                                    "Fast Food"
                                ],
                                "avgRating": 4.1,
                                "feeDetails": {
                                    "restaurantId": "338648",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "547",
                                "avgRatingString": "4.1",
                                "totalRatingsString": "5K+",
                                "sla": {
                                    "deliveryTime": 23,
                                    "lastMileTravel": 2.7,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "23 mins",
                                    "lastMileTravelString": "2.7 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 00:59:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "20% OFF",
                                    "subHeader": "UPTO ₹50"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/kfc-chandaka-industrial-area-patia-bhubaneswar-338648",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "408175",
                                "name": "Pizza Hut",
                                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                "locality": "Chandaka Industrial Area",
                                "areaName": "Patia",
                                "costForTwo": "₹300 for two",
                                "cuisines": [
                                    "Pizzas"
                                ],
                                "avgRating": 3.9,
                                "feeDetails": {
                                    "restaurantId": "408175",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "721",
                                "avgRatingString": "3.9",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 29,
                                    "lastMileTravel": 2.6,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "29 mins",
                                    "lastMileTravelString": "2.6 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 02:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "aggregatedDiscountInfoV2": {},
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/pizza-hut-chandaka-industrial-area-patia-bhubaneswar-408175",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "349578",
                                "name": "WarmOven Cake & Desserts",
                                "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
                                "locality": "BDA Colony",
                                "areaName": "Chandrasekharpur",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Bakery",
                                    "Desserts",
                                    "Ice Cream",
                                    "Beverages"
                                ],
                                "avgRating": 4.4,
                                "feeDetails": {
                                    "restaurantId": "349578",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 6000
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 6000
                                },
                                "parentId": "9696",
                                "avgRatingString": "4.4",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 32,
                                    "lastMileTravel": 6,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "32 mins",
                                    "lastMileTravelString": "6.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "50% OFF",
                                    "subHeader": "UPTO ₹100"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-bda-colony-chandrasekharpur-bhubaneswar-349578",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "92292",
                                "name": "Burger King",
                                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                                "locality": "KIIT Square",
                                "areaName": "Patia Village",
                                "costForTwo": "₹350 for two",
                                "cuisines": [
                                    "Burgers",
                                    "American"
                                ],
                                "avgRating": 4.4,
                                "feeDetails": {
                                    "restaurantId": "92292",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "166",
                                "avgRatingString": "4.4",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 22,
                                    "lastMileTravel": 1.9,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "22 mins",
                                    "lastMileTravelString": "1.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 02:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "60% OFF",
                                    "subHeader": "UPTO ₹120"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/burger-king-kiit-square-patia-village-bhubaneswar-92292",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "74269",
                                "name": "GreenChillyz",
                                "cloudinaryImageId": "gcquif3ytdij3xikweyr",
                                "locality": "Infocity Road",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Indian",
                                    "Chinese"
                                ],
                                "avgRating": 3.9,
                                "feeDetails": {
                                    "restaurantId": "74269",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 3400
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 3400
                                },
                                "parentId": "399293",
                                "avgRatingString": "3.9",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 25,
                                    "lastMileTravel": 3,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "25 mins",
                                    "lastMileTravelString": "3.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 22:20:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "20% OFF",
                                    "subHeader": "UPTO ₹50"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/greenchillyz-infocity-road-patia-bhubaneswar-74269",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "103530",
                                "name": "The Belgian Waffle Co.",
                                "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
                                "locality": "Magnetic Chhak",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Waffle",
                                    "Desserts",
                                    "Ice Cream",
                                    "Beverages"
                                ],
                                "avgRating": 4.5,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "103530",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "2233",
                                "avgRatingString": "4.5",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 25,
                                    "lastMileTravel": 2,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "25 mins",
                                    "lastMileTravelString": "2.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "20% OFF",
                                    "subHeader": "UPTO ₹50"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-magnetic-chhak-patia-bhubaneswar-103530",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "115576",
                                "name": "Baskin Robbins - Ice Cream Desserts",
                                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                                "locality": "KIIT Square",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Desserts",
                                    "Beverages"
                                ],
                                "avgRating": 4.5,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "115576",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "5588",
                                "avgRatingString": "4.5",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 17,
                                    "lastMileTravel": 2,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "17 mins",
                                    "lastMileTravelString": "2.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "10% OFF",
                                    "subHeader": "ABOVE ₹1000",
                                    "discountTag": "FLAT DEAL"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-kiit-square-patia-bhubaneswar-115576",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "71240",
                                "name": "Sardar Ji Restaurant",
                                "cloudinaryImageId": "vtesuhqod65dcc2iyz2a",
                                "locality": "Kiit Road",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Indian",
                                    "North Indian",
                                    "Biryani"
                                ],
                                "avgRating": 3.9,
                                "feeDetails": {
                                    "restaurantId": "71240",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "178251",
                                "avgRatingString": "3.9",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 25,
                                    "lastMileTravel": 1.9,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "25 mins",
                                    "lastMileTravelString": "1.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 23:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "₹100 OFF",
                                    "subHeader": "ABOVE ₹249",
                                    "discountTag": "FLAT DEAL"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/sardar-ji-restaurant-kiit-road-patia-bhubaneswar-71240",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "71131",
                                "name": "Biriyani Box",
                                "cloudinaryImageId": "qmr0hzgrzn59dkddkpvj",
                                "locality": "Aryapalli",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Biryani",
                                    "Kebabs",
                                    "Desserts",
                                    "Indian"
                                ],
                                "avgRating": 4.1,
                                "feeDetails": {
                                    "restaurantId": "71131",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "7279",
                                "avgRatingString": "4.1",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 20,
                                    "lastMileTravel": 2.2,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "20 mins",
                                    "lastMileTravelString": "2.2 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "40% OFF",
                                    "subHeader": "UPTO ₹80"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/biriyani-box-aryapalli-patia-bhubaneswar-71131",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "71133",
                                "name": "Tandoori Wala",
                                "cloudinaryImageId": "j2me2vt01cju21r5v7vg",
                                "locality": "Sishu Vihar",
                                "areaName": "Patia",
                                "costForTwo": "₹500 for two",
                                "cuisines": [
                                    "Indian",
                                    "Mughlai"
                                ],
                                "avgRating": 4.2,
                                "feeDetails": {
                                    "restaurantId": "71133",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 3900
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 3900
                                },
                                "parentId": "8897",
                                "avgRatingString": "4.2",
                                "totalRatingsString": "1K+",
                                "sla": {
                                    "deliveryTime": 31,
                                    "lastMileTravel": 3,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "31 mins",
                                    "lastMileTravelString": "3.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 22:45:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "aggregatedDiscountInfoV2": {},
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/tandoori-wala-sishu-vihar-patia-bhubaneswar-71133",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "78383",
                                "name": "Biggies Burger",
                                "cloudinaryImageId": "roxqlailx1r4s5wdjdxa",
                                "locality": "Infocity Road",
                                "areaName": "Patia",
                                "costForTwo": "₹300 for two",
                                "cuisines": [
                                    "American",
                                    "Fast Food",
                                    "Beverages"
                                ],
                                "avgRating": 4.3,
                                "feeDetails": {
                                    "restaurantId": "78383",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "45723",
                                "avgRatingString": "4.3",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 27,
                                    "lastMileTravel": 2,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "27 mins",
                                    "lastMileTravelString": "2.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 01:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "30% OFF",
                                    "subHeader": "UPTO ₹75"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/biggies-burger-infocity-road-patia-bhubaneswar-78383",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "485130",
                                "name": "Momo Zone - The Momo Company",
                                "cloudinaryImageId": "qkbq8kdq880in6v3jdx2",
                                "locality": "Hb Colony",
                                "areaName": "Khordha",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Chinese",
                                    "Tibetan",
                                    "Fast Food"
                                ],
                                "avgRating": 3.8,
                                "feeDetails": {
                                    "restaurantId": "485130",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 4400
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 4400
                                },
                                "parentId": "382343",
                                "avgRatingString": "3.8",
                                "totalRatingsString": "20+",
                                "sla": {
                                    "deliveryTime": 36,
                                    "lastMileTravel": 5.5,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "36 mins",
                                    "lastMileTravelString": "5.5 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "40% OFF",
                                    "subHeader": "UPTO ₹80"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-hb-colony-khordha-bhubaneswar-485130",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "349747",
                                "name": "Kaati Zone Rolls & Wraps",
                                "cloudinaryImageId": "ae6xhpdldhmvlpymzk90",
                                "locality": "Kanak Durga Nagar",
                                "areaName": "Chandrasekharpur",
                                "costForTwo": "₹150 for two",
                                "cuisines": [
                                    "Fast Food",
                                    "Bengali",
                                    "Beverages",
                                    "Desserts"
                                ],
                                "avgRating": 3.7,
                                "feeDetails": {
                                    "restaurantId": "349747",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 5500
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 5500
                                },
                                "parentId": "248306",
                                "avgRatingString": "3.7",
                                "totalRatingsString": "500+",
                                "sla": {
                                    "deliveryTime": 36,
                                    "lastMileTravel": 6,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "36 mins",
                                    "lastMileTravelString": "6.0 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "40% OFF",
                                    "subHeader": "UPTO ₹80"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-kanak-durga-nagar-chandrasekharpur-bhubaneswar-349747",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "87002",
                                "name": "Keventers - Milkshakes & Desserts",
                                "cloudinaryImageId": "f0e94c984813053f46c214f18ce73d59",
                                "locality": "Aryapalli",
                                "areaName": "Patia",
                                "costForTwo": "₹200 for two",
                                "cuisines": [
                                    "Beverages",
                                    "Ice Cream",
                                    "Desserts",
                                    "Healthy Food"
                                ],
                                "avgRating": 4.3,
                                "veg": true,
                                "feeDetails": {
                                    "restaurantId": "87002",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 2600
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 2600
                                },
                                "parentId": "268997",
                                "avgRatingString": "4.3",
                                "totalRatingsString": "5K+",
                                "sla": {
                                    "deliveryTime": 18,
                                    "lastMileTravel": 1.9,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "18 mins",
                                    "lastMileTravelString": "1.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-10 01:00:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "40% OFF",
                                    "subHeader": "UPTO ₹80"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-aryapalli-patia-bhubaneswar-87002",
                                "type": "WEBLINK"
                            }
                        },
                        {
                            "info": {
                                "id": "85777",
                                "name": "Hotel Maharaja and Fast Food",
                                "cloudinaryImageId": "oapbfe5a3ftryfzjxr7u",
                                "locality": "Hb Colony",
                                "areaName": "Baramunda",
                                "costForTwo": "₹250 for two",
                                "cuisines": [
                                    "Indian",
                                    "Chinese",
                                    "Tandoor",
                                    "Biryani"
                                ],
                                "avgRating": 3.8,
                                "feeDetails": {
                                    "restaurantId": "85777",
                                    "fees": [
                                        {
                                            "name": "BASE_DISTANCE",
                                            "fee": 12400
                                        },
                                        {
                                            "name": "BASE_TIME"
                                        },
                                        {
                                            "name": "ANCILLARY_SURGE_FEE"
                                        }
                                    ],
                                    "totalFee": 12400
                                },
                                "parentId": "100050",
                                "avgRatingString": "3.8",
                                "totalRatingsString": "10K+",
                                "sla": {
                                    "deliveryTime": 55,
                                    "lastMileTravel": 13.3,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "55 mins",
                                    "lastMileTravelString": "13.3 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2023-09-09 23:10:00",
                                    "opened": true
                                },
                                "badges": {},
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "imageBased": {},
                                        "textBased": {},
                                        "textExtendedBadges": {}
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "₹125 OFF",
                                    "subHeader": "ABOVE ₹249",
                                    "discountTag": "FLAT DEAL"
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {},
                                        "video": {}
                                    }
                                },
                                "reviewsSummary": {},
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {}
                            },
                            "analytics": {},
                            "cta": {
                                "link": "https://www.swiggy.com/restaurants/hotel-maharaja-and-fast-food-hb-colony-baramunda-bhubaneswar-85777",
                                "type": "WEBLINK"
                            }
                        }
                    ],
                    "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                    "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                    "style": {
                        "width": {
                            "type": "TYPE_RELATIVE",
                            "value": 0.41111112,
                            "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                        },
                        "height": {
                            "type": "TYPE_RELATIVE",
                            "value": 0.7027027,
                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                        },
                        "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                    },
                    "collectionId": "84124"
                }
            }
}

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                  <img src={imageAddress}></img>
                </div>
                
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
            {
                card?.gridElements?.infoWithStyle?.restaurants?.map(el=>
                    <Restaurant key={el.info.id} resData={el}/>
                )
            }
            </div>
        </div>
    )
}

const styleCard = {
    background: 'lightgrey',
    textAlign:'center'
}

const Restaurant = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating} = props.resData.info;
    return(
        <div className="res-card" style={styleCard}>
            <img src={`${swiggyApiCardImage}/${cloudinaryImageId}`}></img>
            <h3>{name || ''}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating || ''}</p>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(<AppLayout/>);