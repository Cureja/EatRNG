window.onload = function () {
    var socket = io();

    //connect to socket

    var latlong = null;

    var dummy = [
        {
            "geometry": {
                "location": {
                    "lat": 49.2666677,
                    "lng": -123.2425266
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26807587989271,
                        "lng": -123.2411982701073
                    },
                    "southwest": {
                        "lat": 49.26537622010727,
                        "lng": -123.2438979298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "06f675bcd19afdbfcf5bc471daed8468b0349719",
            "name": "McDonald's",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114572650697524886641/photos\">Nimalqua</a>"
                    ],
                    "photo_reference": "CmRaAAAAMn20jwIHQ48G2J1BJ5aeCTkkmTubDKuphFRI1DVfV9jgkf1ZdFJQPmBfjCP5L00a0ktfgmMpUixamFgmIAL2mCJ3AQweE1uJzQlADKfKou2k0mkbh4WpptBaUwwx1pmmEhBHASqB5W9DIwbUx_kNHClZGhR1NLxOywGWzrWuBZDXbwMr9d2YZw",
                    "width": 2988
                }
            ],
            "place_id": "ChIJ724lCrhyhlQR40w5_LUVBas",
            "plus_code": {
                "compound_code": "7Q84+MX University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+MX"
            },
            "price_level": 1,
            "rating": 3.4,
            "reference": "ChIJ724lCrhyhlQR40w5_LUVBas",
            "scope": "GOOGLE",
            "types": [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 354,
            "vicinity": "101 5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.266466,
                    "lng": -123.243429
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26789977989272,
                        "lng": -123.2421086701073
                    },
                    "southwest": {
                        "lat": 49.26520012010728,
                        "lng": -123.2448083298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5cf4714ac44e786ca5cf255b0d4e420e257df2a3",
            "name": "A&W Canada",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104513786931946503920/photos\">A&amp;W</a>"
                    ],
                    "photo_reference": "CmRaAAAAL-hS-A24LRMV93yD3nKEj9ncdA0fqJ4Y_62XjEqIs9NDtVLmyiJzmerXcYxqkWhp4bJetlOGmmZmDo7J83iswyVsEK8uQra_ZGl4r43pY65rjCs3h4QkuqjKPEPPxsqJEhApX8qAEORUWE4R0PuaCM6tGhQPYY2e9lnOdoj_t8zWZ8LSiLq1Pg",
                    "width": 1080
                }
            ],
            "place_id": "ChIJvygj-cdyhlQR-0d3pYpr5Xs",
            "plus_code": {
                "compound_code": "7Q84+HJ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+HJ"
            },
            "price_level": 1,
            "rating": 3.7,
            "reference": "ChIJvygj-cdyhlQR-0d3pYpr5Xs",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 156,
            "vicinity": "5778 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2666177,
                    "lng": -123.2426541
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26804002989272,
                        "lng": -123.2413310201073
                    },
                    "southwest": {
                        "lat": 49.26534037010728,
                        "lng": -123.2440306798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5b1e864048cdcd4a1132c4c3f299340fd6538756",
            "name": "Petra Mediterranean Food",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 2988,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/117336166350415582196/photos\">Nasa Rouf</a>"
                    ],
                    "photo_reference": "CmRaAAAAAVqVTHTZpLXBFyI-7SBWf2iR9LOsVlabhCElv9OnfTNnQbGsXhzuWtirn7Z3Mf9Uj-dhAaMMBjaC007H6FV8wbCTm7gbKiEYDaOW6SwclBmLj9FrWjxCfP_6RzJJV6o5EhCf97hTEBHWUokSZrlM7eMjGhTdWyP8FqoNxLPM0aXz-Y0jyfjwvg",
                    "width": 5312
                }
            ],
            "place_id": "ChIJ2USHCrhyhlQRD4WWMHUyrP0",
            "plus_code": {
                "compound_code": "7Q84+JW University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+JW"
            },
            "rating": 3.6,
            "reference": "ChIJ2USHCrhyhlQRD4WWMHUyrP0",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 7,
            "vicinity": "5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.266096,
                    "lng": -123.2421087
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26738567989272,
                        "lng": -123.2407089201073
                    },
                    "southwest": {
                        "lat": 49.26468602010728,
                        "lng": -123.2434085798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "2d8907aaf6e26eaac981d6a602635236bbc259b4",
            "name": "Pita Pit",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 288,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102019438670329040604/photos\">The Pita Pit</a>"
                    ],
                    "photo_reference": "CmRaAAAA_oZlFhlJWerdkwpZhqCYn8A_glyuxj4RiKf-mq0ps5XFjeLaDdC_QCVlq3D1YSJeDHmM7ZGR0pKz5A29uFteWk9mYPT9vh7zitqzdWy9X3NfgSWDOZnxZ-4w0X8lnNccEhC9ANrKiphAAoab4aX4HI9wGhRvQO5irLuXenQ5vH26i9Rp81nr5A",
                    "width": 512
                }
            ],
            "place_id": "ChIJJfNy8sdyhlQRHfHUtd4dgL8",
            "plus_code": {
                "compound_code": "7Q85+C5 University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q85+C5"
            },
            "price_level": 1,
            "rating": 4,
            "reference": "ChIJJfNy8sdyhlQRHfHUtd4dgL8",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 71,
            "vicinity": "5717 Dalhousie Rd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.265961,
                    "lng": -123.2466381
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26739252989272,
                        "lng": -123.2453247201073
                    },
                    "southwest": {
                        "lat": 49.26469287010728,
                        "lng": -123.2480243798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "6eec32ea89136d44ac45af07319d8dd3113565ab",
            "name": "Mahony & Sons Public House",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 3204,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102439939934551537949/photos\">Mahony &amp; Sons Public House - UBC</a>"
                    ],
                    "photo_reference": "CmRaAAAASRZwyns5JRgylqhjp-Wuj0mrWIHDzlQHRbAFUj1yjuYI2iL49jdC7Hmo6BUvxiBYwaMadIRjXud31n2rPSfvJOYOXBBvRyr51y3RZYUOHKXuu1IOKEf4W3s0084YkQS6EhBrrBLLxheI_7Xuf14ZWP7fGhSYJzrUz25OOpSpAkNZ-zWQ0C_NYQ",
                    "width": 4807
                }
            ],
            "place_id": "ChIJIYUl3bdyhlQRm3P9NrjqJoA",
            "plus_code": {
                "compound_code": "7Q83+98 University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q83+98"
            },
            "price_level": 2,
            "rating": 3.5,
            "reference": "ChIJIYUl3bdyhlQRm3P9NrjqJoA",
            "scope": "GOOGLE",
            "types": [
                "bar",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 397,
            "vicinity": "5990 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2660355,
                    "lng": -123.2430082
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26730152989271,
                        "lng": -123.2418938701073
                    },
                    "southwest": {
                        "lat": 49.26460187010727,
                        "lng": -123.2445935298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "8dc81c13f8bad8a3ce39f36fe626c79daeb9a925",
            "name": "Freshslice Pizza",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 2832,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114008865198521160007/photos\">Freshslice Pizza</a>"
                    ],
                    "photo_reference": "CmRaAAAAKcsSkUsTYnPePUdwAwDtzxOiBaFJPj4JJM5NpxkfymZnxDF2FQ4JZaIBn0PtaIpdOJaqTffiw-oeHtxr5eXAhS4JjpQ374wmHvKjJRigUTP282snRJLAKLPH4cmN3yU2EhC9oFFKNBp6WTolwYLpEWHnGhQUyciLjpXgASibfZW_TOxYvQ_viw",
                    "width": 4256
                }
            ],
            "place_id": "ChIJW08b_MdyhlQRkJMDvWQ5iko",
            "plus_code": {
                "compound_code": "7Q84+CQ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+CQ"
            },
            "price_level": 1,
            "rating": 4,
            "reference": "ChIJW08b_MdyhlQRkJMDvWQ5iko",
            "scope": "GOOGLE",
            "types": [
                "meal_delivery",
                "meal_takeaway",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 86,
            "vicinity": "2166 Western Pkwy, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2665635,
                    "lng": -123.2427695
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26800287989271,
                        "lng": -123.2414527201073
                    },
                    "southwest": {
                        "lat": 49.26530322010727,
                        "lng": -123.2441523798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "93881d78d4c52108b3c8c70c3c4d448421d0f147",
            "name": "Leona Fast Food",
            "place_id": "ChIJFZxqu8NyhlQRGcL3-rbl0Nk",
            "plus_code": {
                "compound_code": "7Q84+JV University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+JV"
            },
            "rating": 3,
            "reference": "ChIJFZxqu8NyhlQRGcL3-rbl0Nk",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 1,
            "vicinity": "5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2545375,
                    "lng": -123.2355312
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.25591677989272,
                        "lng": -123.2340953701073
                    },
                    "southwest": {
                        "lat": 49.25321712010728,
                        "lng": -123.2367950298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "cbcde05faf5600ba453644e07f4fa50dd6cf54e5",
            "name": "Freshii",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/111269530685560462735/photos\">Vicky Ru-Yun Cheng</a>"
                    ],
                    "photo_reference": "CmRaAAAAX-ofmRUce3ksrVmd94QLuMsmEwX1cHK9Tatvu7Qc_hJXZ4kGQvtSL_kYvgGWCaMlQ0OyI3AzWX3S1JPO7nrZx_AFLCclWrdIuGbPtzIAij_SH1ABTKT-rW5q7VB5hHWZEhC56KFFh65YVkc2Q0148NNbGhQIewthe6bT2YF5zePSKi5Qmfik7Q",
                    "width": 2988
                }
            ],
            "place_id": "ChIJn4M4CdFyhlQRjn9GMZyBYhg",
            "plus_code": {
                "compound_code": "7Q37+RQ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q37+RQ"
            },
            "price_level": 2,
            "rating": 3.1,
            "reference": "ChIJn4M4CdFyhlQRjn9GMZyBYhg",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 38,
            "vicinity": "3351 Wesbrook Mall, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.266591,
                    "lng": -123.2496061
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26756342989272,
                        "lng": -123.2481016201072
                    },
                    "southwest": {
                        "lat": 49.26486377010728,
                        "lng": -123.2508012798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "226bb74dfec20e9abccf34380defd6c96ffaf150",
            "name": "The Delly",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 3024,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103909095130322952150/photos\">Mark Stephenson</a>"
                    ],
                    "photo_reference": "CmRaAAAAJPXdhl69Oj4PlfFRfhhrwl6TrBzSQXdsjBICYM1j7v7aT2LWa4-2lNKhYepBhzEwcnEOA5zlUvivf6bEB2R50sE9FctQ7Y-bsRUCiOVqn0KJVGWu_8m6vznckPbxz4qUEhD6H7fncOD2XtBqDc2kGHDLGhRmq3xy-xzdceo81q_KhXqRDhqX6w",
                    "width": 4032
                }
            ],
            "place_id": "ChIJd1kFq7dyhlQRoiJQkn_VVY8",
            "plus_code": {
                "compound_code": "7Q82+J5 University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q82+J5"
            },
            "rating": 4,
            "reference": "ChIJd1kFq7dyhlQRoiJQkn_VVY8",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 44,
            "vicinity": "6133 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2663794,
                    "lng": -123.2434223
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26785237989272,
                        "lng": -123.2421327701073
                    },
                    "southwest": {
                        "lat": 49.26515272010727,
                        "lng": -123.2448324298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "82a14b085c22d38f01c318d77310cba7d3db9af7",
            "name": "Pizza Garden",
            "opening_hours": {
                "open_now": true
            },
            "photos": [
                {
                    "height": 1936,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100708288132158474906/photos\">A Google User</a>"
                    ],
                    "photo_reference": "CmRaAAAAipqz8SiXYf85Ix1MIADNt2fz5eDAddy3X-NUbayczvv8c9BbFk-8MMP4Ed9qHCk5ITgk2eirImX3bCRZ82tLGB0lSrS_1SFp8UrhX8vpeHbD6NNDweV-P4BqrkDC8zodEhBOz88gdO6EUpEGDhUViG_SGhSD6NRUrlsmMDtjKThuZutFzE2WdA",
                    "width": 2592
                }
            ],
            "place_id": "ChIJ178FBrhyhlQRWLMY43zttrs",
            "plus_code": {
                "compound_code": "7Q84+HJ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+HJ"
            },
            "price_level": 1,
            "rating": 4.2,
            "reference": "ChIJ178FBrhyhlQRWLMY43zttrs",
            "scope": "GOOGLE",
            "types": [
                "meal_delivery",
                "meal_takeaway",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 70,
            "vicinity": "5780 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2646721,
                    "lng": -123.2459365
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26605737989271,
                        "lng": -123.2443186201073
                    },
                    "southwest": {
                        "lat": 49.26335772010727,
                        "lng": -123.2470182798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
            "id": "49ce58db852faa58806c8b52eec2d0dca3befac4",
            "name": "Sodexo UBC Corner Cafe",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102837053549641110364/photos\">A Google User</a>"
                    ],
                    "photo_reference": "CmRaAAAAaHPPOMu1TfDix0TRdNGpgjEmABrrxFccY8hV7C4aDkUvniOWfcijaTnrYOSN8nU4sy1AsYN8ef4KZl8jN-wjunTzSwUM1RmNDE_2XctdCyCQjK0gN_jUT9cHs-51ZuicEhCFdjORxwnInvpKbRfefYGYGhQoGcv-Q8f56N-8jCYJHMftJzi5uw",
                    "width": 3024
                }
            ],
            "place_id": "ChIJvxmfOshyhlQR606Apn_VSHI",
            "plus_code": {
                "compound_code": "7Q73+VJ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q73+VJ"
            },
            "rating": 4,
            "reference": "ChIJvxmfOshyhlQR606Apn_VSHI",
            "scope": "GOOGLE",
            "types": [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 7,
            "vicinity": "2211 Wesbrook Mall, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2660382,
                    "lng": -123.2434287
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26736152989272,
                        "lng": -123.2421531701073
                    },
                    "southwest": {
                        "lat": 49.26466187010728,
                        "lng": -123.2448528298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "76b97c1d9955a8be2dae24f5319b9471a8aaae71",
            "name": "Agra Tandoori Express",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 1200,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110932306153058160857/photos\">Dilraj Preet Sandhu</a>"
                    ],
                    "photo_reference": "CmRaAAAAxKmAfBd3_QTLb-tAJ-daVYj1W5ValTNMJekxp8O7ErJuiIj__POEr6zCl87u5tONcajXhZNjqeCi7KNs1ikvUvUt3p5KC-bibVu-qWvkSnpfGJw8CzEma2O8kiWdL9V4EhCtnVhYjExS8KcyMKeAR8BlGhRqswO5icX1BvUwMoYxkTC9E_3H-A",
                    "width": 1600
                }
            ],
            "place_id": "ChIJE9BN-cdyhlQRrkMjLwNBr0A",
            "plus_code": {
                "compound_code": "7Q84+CJ University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+CJ"
            },
            "rating": 3,
            "reference": "ChIJE9BN-cdyhlQRrkMjLwNBr0A",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 32,
            "vicinity": "2138 Western Pkwy, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.26591430000001,
                    "lng": -123.25453
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26721362989272,
                        "lng": -123.2533338201073
                    },
                    "southwest": {
                        "lat": 49.26451397010727,
                        "lng": -123.2560334798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "8d933aaf2147db8f550adfeced19041cea4fa644",
            "name": "Triple O's",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 1936,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/100802552886907179420/photos\">Carrie G</a>"
                    ],
                    "photo_reference": "CmRaAAAA-49E8owdAL67NozKOCyDmz2S-LD2bCpmsOPjTcbTmOmvdPAqTnEDHoZG1zHQkAXceAZg48cBNCXkYejZIlH9evIMVyafVKJDKI-cyN8RW8vKDQAIQ3v8DRBMR81uHM1oEhAn5q7wTErOnfAqlFOjND7VGhT643SAtB3JGcSkZ2MOAHxTSEQn7g",
                    "width": 2592
                }
            ],
            "place_id": "ChIJv7zyg7ZyhlQRkP6Z9PdQiGg",
            "plus_code": {
                "compound_code": "7P8W+95 University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7P8W+95"
            },
            "rating": 3.4,
            "reference": "ChIJv7zyg7ZyhlQRkP6Z9PdQiGg",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 243,
            "vicinity": "The University of British Columbia, 2015 Main Mall, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2665635,
                    "lng": -123.2427695
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26800287989271,
                        "lng": -123.2414527201073
                    },
                    "southwest": {
                        "lat": 49.26530322010727,
                        "lng": -123.2441523798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "7a591feb0f088e82bab84ccefd238b3e99e8ef0d",
            "name": "Donair Town",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 2340,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/114043279234802671931/photos\">Owen Yin</a>"
                    ],
                    "photo_reference": "CmRaAAAAFW8OeSPVvsrmPWgEry6HDcgqy4jqmN6HFk-AHuYmP0ZF5HN6Qrvoz_bI0N87Fo0wB48889jrVMCfQfwSEsbRkX8n2sZRPnmPl9fMwE7Fc636husyNYEwwhpDf9JW0JLFEhAsyio2rPtd_UnFYF9eiDV_GhQ-vjTTO68mnc3i2qMUXaXlcWc3nQ",
                    "width": 4160
                }
            ],
            "place_id": "ChIJExkZorVyhlQRSUjqWJK575s",
            "plus_code": {
                "compound_code": "7Q84+JV University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+JV"
            },
            "price_level": 1,
            "rating": 4.2,
            "reference": "ChIJExkZorVyhlQRSUjqWJK575s",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 13,
            "vicinity": "5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2666484,
                    "lng": -123.2428461
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26804157989272,
                        "lng": -123.2415143201073
                    },
                    "southwest": {
                        "lat": 49.26534192010728,
                        "lng": -123.2442139798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "f38009f3036996822fd71e600e6165f59302554b",
            "name": "Black Pearl",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 1282,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102528352629046747157/photos\">A Google User</a>"
                    ],
                    "photo_reference": "CmRaAAAA2cjhEtKyc9g7Z-32ZTs9PsnhPX6PmQS24N_4DmBnTlaU8fEY5jrZk4kU24NYg04CCdylbWBY6_wJQVMbM5t3w0fLKdHr3T09gtPed5MnWdJGLtmVJD3C33eTSiieCWuPEhDJRYyzmHtVQhEzYZpyLIDeGhSWUUFvTOVbkKd_Rd3UU-ljGHdE9w",
                    "width": 2048
                }
            ],
            "place_id": "ChIJ7_4H9sdyhlQRILgQg0I2Ul8",
            "plus_code": {
                "compound_code": "7Q84+MV University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+MV"
            },
            "rating": 3.3,
            "reference": "ChIJ7_4H9sdyhlQRILgQg0I2Ul8",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 9,
            "vicinity": "B8 - 5728 University Boulevard, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2636979,
                    "lng": -123.2550182
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26514047989271,
                        "lng": -123.2539960201073
                    },
                    "southwest": {
                        "lat": 49.26244082010727,
                        "lng": -123.2566956798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5c2fe09c45b08d5410c2df62111b5e1a7f74dd18",
            "name": "Mercante",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 4008,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108494506852490752714/photos\">Levi Lopez</a>"
                    ],
                    "photo_reference": "CmRaAAAAx3vpSAavBzgl8_nqZY1Uw_Mdv-2RY3Ardi7TExBlP7QdvPf7n5xC5hzj7WjHSY30X8vM_11pvlPM8PGfeGiVOmTsWSiEQVRz_sVlFC_9BIxZ9dyCSf0lD_Bo7RZ0OAD6EhDkPx3aWUHazm4JjPI5-SDIGhSofRodBzHSdk_OfDJJoJgtSf571Q",
                    "width": 5344
                }
            ],
            "place_id": "ChIJY-VLmLVyhlQR6kLZcjismSE",
            "plus_code": {
                "compound_code": "7P7V+FX University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7P7V+FX"
            },
            "price_level": 2,
            "rating": 4.1,
            "reference": "ChIJY-VLmLVyhlQR6kLZcjismSE",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 379,
            "vicinity": "6488 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2665365,
                    "lng": -123.2426836
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26799502989272,
                        "lng": -123.2413738701073
                    },
                    "southwest": {
                        "lat": 49.26529537010727,
                        "lng": -123.2440735298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "dd6eeb3d4ef1b77b70a3fe8b84fbb81e55b3dcdc",
            "name": "Petracafe",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/102086987352293657855/photos\">hamed valipour</a>"
                    ],
                    "photo_reference": "CmRaAAAAQVTtC_ZizqYyXGLK9hocghoqBuEa8jBqQcWG-ASMk-F3HcKNoskd39SlmbdlxnSDJLVSC3g1CKXVeBTS6gGqJM9g5dxecpmqnQ0K1PNG9oOLm-6MryF03J_dP2sIXuOzEhDKSN7TNzt6cwrnMFtgTXbWGhQKXL19xggg960Vaivm-XP-yNo7LQ",
                    "width": 3024
                }
            ],
            "place_id": "ChIJvdpWCrhyhlQRajPPRDysuUk",
            "plus_code": {
                "compound_code": "7Q84+JW University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+JW"
            },
            "rating": 3.6,
            "reference": "ChIJvdpWCrhyhlQRajPPRDysuUk",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 12,
            "vicinity": "5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2660736,
                    "lng": -123.2426605
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26755057989273,
                        "lng": -123.2409673701073
                    },
                    "southwest": {
                        "lat": 49.26485092010729,
                        "lng": -123.2436670298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "970a268d021291df8d133fa01b1a87a7e6be46c2",
            "name": "One More Sushi",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113602637852442684661/photos\">Peter SK</a>"
                    ],
                    "photo_reference": "CmRaAAAAhzpwOJcHmXGZxPXtPu-YF7gaHp1fzLiex-mUbdi6xGkxRroGbfymFVNLG8qkG4a6BBu4ILlF8bMjhdLkpXPRfHDKVMb1qQ2Wdc3TrLtroFV3DJ7LioXXYsDJ7ZUvDYzzEhDCxF0wYZsZ65gpR7SnOZt7GhT1j9kvn0-Z2yBk3UiKrCvBlMvlZw",
                    "width": 3264
                }
            ],
            "place_id": "ChIJtVPQfeRwhlQRgGigAIjXgcI",
            "plus_code": {
                "compound_code": "7Q84+CW University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+CW"
            },
            "rating": 3.6,
            "reference": "ChIJtVPQfeRwhlQRgGigAIjXgcI",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 81,
            "vicinity": "2155 Allison Rd #222, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2665635,
                    "lng": -123.2427695
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.26800287989271,
                        "lng": -123.2414527201073
                    },
                    "southwest": {
                        "lat": 49.26530322010727,
                        "lng": -123.2441523798927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "6ddd9350f88c1e5db2767269dba3f63df91cd0c0",
            "name": "My Home Cuisine",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 4032,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108190381667670230671/photos\">Roberta Pichini</a>"
                    ],
                    "photo_reference": "CmRaAAAA91RFoCkzrM56DbS0fkpCtUSX1L_BMrWesnBcsK0Qhpnua--hUyGySaKz7hLwYrPfAotKaQ_lqLO9vkzx94H4ENxusmriYASKiTlMuW-t9RHF6JqQIT3xvRFEUNur04qMEhA3OiVAC2ph6bNgsmU-5aQNGhSMMTCGNmVbHVEcA3v-v2yyrfz9Ew",
                    "width": 3024
                }
            ],
            "place_id": "ChIJHXaVCrhyhlQRnNzuFn4zvWk",
            "plus_code": {
                "compound_code": "7Q84+JV University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q84+JV"
            },
            "price_level": 1,
            "rating": 3.4,
            "reference": "ChIJHXaVCrhyhlQRnNzuFn4zvWk",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 23,
            "vicinity": "5728 University Blvd, Vancouver"
        },
        {
            "geometry": {
                "location": {
                    "lat": 49.2539939,
                    "lng": -123.2353903
                },
                "viewport": {
                    "northeast": {
                        "lat": 49.25530147989272,
                        "lng": -123.2341656701072
                    },
                    "southwest": {
                        "lat": 49.25260182010727,
                        "lng": -123.2368653298927
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
            "id": "5708d949ded3b765a2c48b345988cce1ef7aa873",
            "name": "Togo Sushi UBC",
            "opening_hours": {
                "open_now": false
            },
            "photos": [
                {
                    "height": 2448,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/107292677588179386508/photos\">Jeffrey Yu</a>"
                    ],
                    "photo_reference": "CmRaAAAAtR0hcJUn2WV_VJkLY-mxUpPGGL2ccK3bvVOv5NZUzGt4rWX9y7XUMuzwQzNPFeIqetvVQCut0QfsATq8rHstp6FeGy6NCqeuStSdWYSGMkHEbNcI9hAWQStVpKniyNYaEhCXa567nNhDLaQlZfnHaZI3GhT7yaF-iV8lmH9XECNtzmpoCf588g",
                    "width": 3264
                }
            ],
            "place_id": "ChIJU21jMChzhlQRI7sOcRkhqfM",
            "plus_code": {
                "compound_code": "7Q37+HR University Endowment Lands, Greater Vancouver A, BC, Canada",
                "global_code": "84XR7Q37+HR"
            },
            "rating": 3.4,
            "reference": "ChIJU21jMChzhlQRI7sOcRkhqfM",
            "scope": "GOOGLE",
            "types": [
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
            ],
            "user_ratings_total": 73,
            "vicinity": "3380 Shrum Lane, Vancouver"
        }
    ];

    
    function getLocation() {
        if (navigator.geolocation) {
            console.log("sasdfasdf");
            navigator.geolocation.getCurrentPosition(function(loc) {
                latlong = {
                    'lat': loc.coords.latitude,
                    'lon': loc.coords.longitude
                };
                
            });
        }
    }
    var map = null;
    function initMap() {
          // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru}
        );
    }
    initMap();
    getLocation();
    
    let sliderDistance = new mdc.slider.MDCSlider(document.querySelector('.distance-slider'));
    sliderDistance.listen('MDCSlider:change', () => console.log(`Value changed to ${sliderDistance.value}`));
    let sliderRating = new mdc.slider.MDCSlider(document.querySelector('.rating-slider'));
    sliderRating.listen('MDCSlider:change', () => console.log(`Value changed to ${sliderRating.value}`));
    let sliderPrice = new mdc.slider.MDCSlider(document.querySelector('.price-slider'));
    sliderPrice.listen('MDCSlider:change', () => console.log(`Value changed to ${sliderPrice.value}`));
    
    $('.submit-button').click(function() {
        console.log('test');
        let obj = {
            dis: sliderDistance.value,
            rating: sliderRating.value,
            price: sliderPrice.value,
            latlong: latlong
        }
        
        socket.emit('submit', obj);
            
    });
    
    socket.on('placesInfo', function(result) {
        map.setCenter({lat: latlong.lat, lng: latlong.lon});
        map.setZoom(14);
        console.log(result);
        for (let place of result) {
            var marker = new google.maps.Marker({position: place.geometry.location, map: map});
            marker.setOpacity(.5);

            let con = document.createElement('div');

            let titleBar = document.createElement('div');
            let title = document.createElement('p');

            let detail = document.createElement('div');
            let busyness = document.createElement('p');
            let distance = document.createElement('p');
            let rating = document.createElement('p');
            let price = document.createElement('p');

            con.classList.add('con');
            titleBar.classList.add('titleBar');
            title.classList.add('title');
            detail.classList.add('detail');
            busyness.classList.add('busyness');
            distance.classList.add('distance');
            rating.classList.add('rating');
            price.classList.add('price');
            
            detail.appendChild(busyness);
            detail.appendChild(distance);
            detail.appendChild(rating);
            detail.appendChild(price);

            titleBar.appendChild(title);

            con.appendChild(titleBar);
            con.appendChild(detail);

            title.innerText = place.name;
            rating.innerText = place.rating;
            price.innerText = place.price_level;
            
            p1 = {
                lat: latlong.lat,
                lng: latlong.lon
            }
            
            distance.innerText = getDistance(p1, place.geometry.location);

            document.getElementsByClassName('panel-2')[0].appendChild(con);
        }
    });
}

var rad = function(x) {
    return x * Math.PI / 180;
  };
  
var getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};

