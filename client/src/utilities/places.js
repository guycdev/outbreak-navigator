const places = [
    {
        id: "ChIJfw4FGDPL1IkRc6lNGM4lx44",
        name: "Patient Networks Family Medicine Walk In Clinic",
        position: {
            lat: 43.65196230000001,
            lng: -79.3785371,
        },
        address: "157 Yonge St, Toronto, ON M5C 1X7, Canada",
        type: ["hospital", "health", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEgI4RyfOv4bCCXSTiqBFcE8EfDiVnSAGJwQDoSV4q9v2UdyFEOWtu_WDqiM6LhwXgqgAwQU3uOu24VP8ftshTnrU7e1ElYflfOkl8M2pGlMjg7XQThhKPJ218uC-F2KzUJERqbKAr6q7Cy2O-5LC_H_fJxzmpP2SWwQgB0ETgsTXeZ&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hospital",
        icon: "http://localhost:3000/hospital-building.png",
    },
    {
        id: "ChIJT5Xni800K4gRKhn9k2_e_e8",
        name: "Medcan",
        position: {
            lat: 43.64943049999999,
            lng: -79.3847535,
        },
        address: "150 York St #1500, Toronto, ON M5H 3S5, Canada",
        type: ["hospital", "health", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEH1yQHecebUAql05qvEVqcuq9Ha0wQ6IXwgwofyJO5hTwX9M5G0_lzMWXpvekPYPhEJ6tBezXPXknY5m87BF87_UK7UGQc1cNkkaRCG8NFNjW4pAWm3Pmqk_rPytHEldMC1iatqEJgBNNV5xmgXJjsG91SirAqK5gOp6-PKhBq3M-K&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hospital",
        icon: "http://localhost:3000/hospital-building.png",
    },
    {
        id: "ChIJR3cCgbY0K4gRA-O9CDAr79I",
        name: "Women's College Hospital",
        position: {
            lat: 43.6617722,
            lng: -79.38729119999999,
        },
        address: "76 Grenville St, Toronto, ON M5S 1B2, Canada",
        type: ["hospital", "health", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuELRqku9WZMsOoxL0azAWZrehuBJvPpmcWbfhAj2UcuDSEhLAMcmlUSLAa5uctzIDDkvjIDcjKvQWzzSoOGT396ZwnRCEf3uHf65EBz3s7xNdK6eS2GEd-IrrJKUH9YujyoOYWNkw8sXUzBEz9Wp5UC0XtnEcorxsVr8ih0Qoq2Kyke&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hospital",
        icon: "http://localhost:3000/hospital-building.png",
    },
    {
        id: "ChIJk0jAsNM0K4gRimTzD6kM5io",
        name: "Emkiro Health Services | Toronto's Landmark for Healthcare®",
        position: {
            lat: 43.6466508,
            lng: -79.3847546,
        },
        address:
            "70 University Avenue #120 Main Floor, Toronto, ON M5J 2M4, Canada",
        type: [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEi1fBeGiEazV2eDp0yOLXK1XGcA01xcQ1nvsO1vpL6aYQ0vbxmpZ-pLCm-FceMTuFDiwfJ6RiQrqbObFGQcZaa3KWhPNfLjhetrAJzsu8xBQuynfMuRK_PyZp5sfbszxt2yb6xt04D5kDETSut-0KNaCCML7Z2-6JBSBlV_2S89uF1&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hospital",
        icon: "http://localhost:3000/hospital-building.png",
    },
    {
        id: "ChIJq-W618k0K4gRRJXspdvJ9ck",
        name: "Toronto General Hospital",
        position: {
            lat: 43.6590384,
            lng: -79.38835859999999,
        },
        address: "200 Elizabeth St, Toronto, ON M5G 2C4, Canada",
        type: ["hospital", "health", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFMPSdBjM0EzSxdO90ZLAlxgmFQ6xCGrqUtY9oHNIUBCLjniLtwmBsrCYRf0_prgJk96ipttIIoYdutFhJG2Q-UmaibiwHnOSBFCJz90M4R6ohKbOz8dDa1Hw6_XLSJa43qKAuGXbwJdAqanWrrXJ31F4LwFPTbYlSy31b9gfchQ31_&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hospital",
        icon: "http://localhost:3000/hospital-building.png",
    },
    {
        id: "ChIJjatbyTHL1IkR_CmCMhdOklY",
        name: "Metro",
        position: {
            lat: 43.64920339999999,
            lng: -79.37273449999999,
        },
        address: "80 Front St E, Toronto, ON M5E 1C4, Canada",
        type: [
            "supermarket",
            "pharmacy",
            "grocery_or_supermarket",
            "store",
            "health",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuE340x7kPUvRPjI2mfweG8xG7V0dpLscC4QlLmJ3FA_6wybEbb6_Qf46LcZnsa-4mcikx_pfS3k25BSaCWqB78JGdntFgglqfknx3UzID_Dq08JeSTF87DkYYrp5eazdfl0t46qHtbbcbm4DSnGRizUVcJSz93mIr2s7_XGwIyoFUNY&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "pharmacy",
        icon: "http://localhost:3000/drugstore.png",
    },
    {
        id: "ChIJByZAgTLL1IkRgcbyATRQHEU",
        name: "Shoppers Drug Mart",
        position: {
            lat: 43.649001,
            lng: -79.37764,
        },
        address: "69 Yonge St, Toronto, ON M5E 1K3, Canada",
        type: [
            "pharmacy",
            "store",
            "health",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEQlK3-oYrRipGddmIY0ZRLW6CoDEOYkyFS2SN01Cg2T6uDD5mTFLFWK4p8uV5B-6MGdmqJL8s1EmsUyu-4z8qqnJ2UvBjd_6gcXPvR7L9PBXwJpGm8POmAFvfUM9ZFdBO23OaBqA-EC9D1FiIpWpxhfz2TvI4EZC0y3swwj4usQ0iI&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "pharmacy",
        icon: "http://localhost:3000/drugstore.png",
    },
    {
        id: "ChIJcxsyylPL1IkRA45C293Dw3U",
        name: "Shoppers Drug Mart",
        position: {
            lat: 43.670158,
            lng: -79.375637,
        },
        address: "565 Sherbourne St Unit 40, Toronto, ON M4X 1W7, Canada",
        type: [
            "pharmacy",
            "store",
            "health",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGZGK1OC3AV1CzNj0JEbF3tadFgMroL9A7W0zrFOYsfjhN2LAKnr4mGZlhSG-YyeXfFgpPzqjdDhmwg7vHbKrCquadWK1YHBeTdf_9tcRC3qPMMj6vv75aeT8mGLbfsix41bCGdsQSGEG4WgK-ioK1foEr0g8dH71xvPmfcKZew2m38&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "pharmacy",
        icon: "http://localhost:3000/drugstore.png",
    },
    {
        id: "ChIJi3ZRr8s0K4gRVRvRrmALocg",
        name: "Rexall",
        position: {
            lat: 43.656219,
            lng: -79.38329,
        },
        address: "595 Bay St., Toronto, ON M5G 2C2, Canada",
        type: [
            "drugstore",
            "convenience_store",
            "pharmacy",
            "store",
            "health",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFwmmIo9I5QE5TXgrhDpIDALGacmOGKsQU--GxNwvu_yTy-YuMi7L-fcdSEdAJWvC7YX5QTYkygXvbFY-ljPi4ADQTAuCjZTnhZqmFQRtjvMshkXUktAVvp8fMzk5-pt79Z4h0XAyGeRaUJF7zoJi5JhDbcwzRXwxEAD-WwMc6dZzJM&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "pharmacy",
        icon: "http://localhost:3000/drugstore.png",
    },
    {
        id: "ChIJFSePkt00K4gRIoNbVyZlHY4",
        name: "Shoppers Drug Mart",
        position: {
            lat: 43.647818,
            lng: -79.402303,
        },
        address: "524 Queen St W, Toronto, ON M5V 2B5, Canada",
        type: [
            "pharmacy",
            "store",
            "health",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFEGzuZ4QnWWSrHntvHgHhafi-8eVaoKqe2eoyBFP_VUkalkdCgivuVYmJqdVS1DPQp4cQv17XTqQzRgLceYFWo86EMXraMLDWH2jPEoprigamBV1Udyrq7KrYBZg9vYRV384q5SCA-GcYh8WFBoRqlPY9ktjB_0k0BjOLoR7sr85EX&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "pharmacy",
        icon: "http://localhost:3000/drugstore.png",
    },
    {
        id: "ChIJ-Zyf_7Q0K4gREQ0zMaEyFGA",
        name: "Metro",
        position: {
            lat: 43.66070089999999,
            lng: -79.3835539,
        },
        address: "444 Yonge St, Toronto, ON M5G 2B3, Canada",
        type: [
            "supermarket",
            "grocery_or_supermarket",
            "store",
            "point_of_interest",
            "food",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHr51hrwc7NO3S5QX9hBOEUPDAOG7hPiUMFC31GK5EomNTjCmxIF0UHXVMgLo93-4cqdXLCLxmH_dRLp0drPqDB-81V3oDE-R7TQa4d1vW2-GMGjPoOFX6DvGaL45K9jvmgq1c8OBmzSeFaS-xdSzRmUqIBPe5z8MhXP6tgb3DUk9NC&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "supermarket",
        icon: "http://localhost:3000/grocery.png",
    },
    {
        id: "ChIJ1WDEXqQ0K4gRJM29vvRuTsU",
        name: "Whole Foods Market",
        position: {
            lat: 43.6719412,
            lng: -79.3943666,
        },
        address: "87 Avenue Rd, Toronto, ON M5R 3R9, Canada",
        type: [
            "grocery_or_supermarket",
            "liquor_store",
            "supermarket",
            "store",
            "health",
            "point_of_interest",
            "food",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFFX-5AIt9b_YNuGcNAe9OFLk7RR8kNfMD5cE8NNJlvwNtXjLLOu91E7WH4dUcybbol0wv_4E6tolTUdRyddaEySWNZoJaRWiX5xW6bMrbsf1RqlkQHffRfqPNRvS6s5BtPfqA0H2MwjhqmHoMbYxzPjBRssqNO4UzvvUjoDTMwMr6M&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "supermarket",
        icon: "http://localhost:3000/grocery.png",
    },
    {
        id: "ChIJYRp1OlDL1IkRuObq834hQ2o",
        name: "Food Basics",
        position: {
            lat: 43.66814389999999,
            lng: -79.37175959999999,
        },
        address: "238 Wellesley St E, Toronto, ON M4X 1G2, Canada",
        type: [
            "supermarket",
            "grocery_or_supermarket",
            "store",
            "point_of_interest",
            "food",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGyTmWwysq51R-ViGeW5vRHKFa3XzGTgSPCIDPaoM_zOUjT7TrYkYXJNzoCCFFaT-HryXS5wI3pp5cTR-O1BjPG_UtUiHc7cnA5kGf3T3WTczTXJ07Wq2h-JNLUFcqIajwpDa7F94AhMuKo1gIYhZBXWrNhzdPSyod5HhWeCAdmT_3T&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "supermarket",
        icon: "http://localhost:3000/grocery.png",
    },
    {
        id: "ChIJjatbyTHL1IkR_CmCMhdOklY",
        name: "Metro",
        position: {
            lat: 43.64920339999999,
            lng: -79.37273449999999,
        },
        address: "80 Front St E, Toronto, ON M5E 1C4, Canada",
        type: [
            "supermarket",
            "grocery_or_supermarket",
            "pharmacy",
            "store",
            "health",
            "point_of_interest",
            "food",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEqKSBhDxgpIlv-hOIgScFU3dpLpANG6o4-DzyeeII63MirANfpEyZDRoOfyd28Re4xelfDGPwzI2neZKSZt6GPSY2--LUkBeEs8QH5TaEbQIv8HkZymM0EGmqxYFTmnTrS0p3Tjav5jEzWyM-sReo7MwJqirn22aaDCO5tWeYv_pR-&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "supermarket",
        icon: "http://localhost:3000/grocery.png",
    },
    {
        id: "ChIJpxPaeUrL1IkRr_Ai8t0-Sng",
        name: "Metro",
        position: {
            lat: 43.6581455,
            lng: -79.3766586,
        },
        address: "89 Gould St, Toronto, ON M5B 2R2, Canada",
        type: [
            "supermarket",
            "grocery_or_supermarket",
            "store",
            "point_of_interest",
            "food",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHqpfqmUBYGapBKOfNTRzVeKRPH4GmGetwn-Qf7rNxq_tyuOKalCDbgMI1k-EkIhW9FigaYk6F0bp7hmvYyBQOFTGWuA9QE4OqIdKfC7l4y_bjZMVuuBCsDwU-XmWdKwWlrZlcG0wcdwnnegKr8eQlYTYHUQR08hTlzlmpNcoJdxla4&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "supermarket",
        icon: "http://localhost:3000/grocery.png",
    },
    {
        id: "ChIJi3ZRr8s0K4gRVRvRrmALocg",
        name: "Rexall",
        position: {
            lat: 43.656219,
            lng: -79.38329,
        },
        address: "595 Bay St., Toronto, ON M5G 2C2, Canada",
        type: [
            "drugstore",
            "convenience_store",
            "pharmacy",
            "health",
            "store",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGlnxgNgiYcmhNB135dWOwUR1pDDeI2JtqCkt4MmdSmEx7vqoEk-3l2MHdqwPaw0HWUWKfzE5Kdhm5HZSi1hYa2kmdvVcvUv0QZzyAs1F6wYFpfoREdrLg1kZWNC7KyL-h8rWpPtGmGYe_J59205U8wcO7Z_iayPPoUkcXDAAc8bbsF&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "convenience_store",
        icon: "http://localhost:3000/candy.png",
    },
    {
        id: "ChIJfczpedI0K4gRKBB6qeQzYXE",
        name: "Rexall",
        position: {
            lat: 43.64997199999999,
            lng: -79.383223,
        },
        address: "120 Adelaide St W Unit # R28, Toronto, ON M5H 1T1, Canada",
        type: [
            "drugstore",
            "convenience_store",
            "pharmacy",
            "health",
            "store",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHA0MOjjSX2k9HyrScMjo2WBhJe1hYgLNUZmv3nk_av_7YwbCT3I6KwwGlzxnzcnpZd2zBQbE8SfykZbwC1xzhnY0vnfTkX2DD41oNDlWRFAnk1-sBBI2ckUk_w1aaMQ6535_Eya4UBIjNef9V3Scr5X7WaxB4VoFGStLqroYP9xz_j&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "convenience_store",
        icon: "http://localhost:3000/candy.png",
    },
    {
        id: "ChIJqw5m_tk0K4gRhlmUuvtg84c",
        name: "JC Foodlane",
        position: {
            lat: 43.644972,
            lng: -79.39132699999999,
        },
        address: "270 Wellington St W, Toronto, ON M5V 3P5, Canada",
        type: [
            "convenience_store",
            "store",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHgLJQEfuyj0QJIbIIpTUJj3ncm909rF7bWoGELxFirrsX6j_9-66T-9B87ylNVtQNizep4mDfIXZ5cXijVoYkbrfW-c3-RFW9UJClXZkoU0BolJvUITsM-AE0Vpb8xDq3pgahhcRdtUrDG8lLIPYBmXUjj8N467GnoceSz-g9A-JE3&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "convenience_store",
        icon: "http://localhost:3000/candy.png",
    },
    {
        id: "ChIJp1CiZ8g0K4gR2dSnV2CnzZE",
        name: "Rexall",
        position: {
            lat: 43.657522,
            lng: -79.38999199999999,
        },
        address: "600 University Ave, Toronto, ON M5G 1X5, Canada",
        type: [
            "drugstore",
            "convenience_store",
            "pharmacy",
            "health",
            "store",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEKkQBMkl80cv4kRcG_LAnU0YSC0SMzMtv6Xkmi52QBo2usGTJKFaIbhdJNWU_YnufTeC80FW5tcSu74ZfcAvJ5JRCTimcbs3JYMoNemvCgxXlRdMbpf6jXrtCaUI4I_wir9qN9Ff-oDExiph9tkWvf1Co7e1PK5YPsMYzZ3h1f6eLd&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "convenience_store",
        icon: "http://localhost:3000/candy.png",
    },
    {
        id: "ChIJabfse8M0K4gR-UxJVFqyziQ",
        name: "7-Eleven",
        position: {
            lat: 43.6581718,
            lng: -79.3998443,
        },
        address: "260 College St, Toronto, ON M5T 1R7, Canada",
        type: [
            "convenience_store",
            "store",
            "food",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHW68xsNOE4pT_JF_78jJ6QvQt_ojR5G1Tdn25DW81i3K5upjbpP1sdZdmd1Vahm48KvsYgg1r161NMaGvQ7sIzDODXdUROvKMjmmMPZxymM41bE3v2HMjQyZftcFDRDkiTGekuiExYfK0ey5IWhPVr_T7WQENqllw9Y3M8HLQlne4-&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "convenience_store",
        icon: "http://localhost:3000/candy.png",
    },
    {
        id: "ChIJmY_gODPL1IkRh54ohF5PpDo",
        name: "Hudson's Bay",
        position: {
            lat: 43.6516651,
            lng: -79.380136,
        },
        address:
            "176 Yonge Street, for CURBSIDE PICKUP, 37 Richmond St W, Toronto, ON M5C 2L7, Canada",
        type: [
            "department_store",
            "shoe_store",
            "clothing_store",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHrDR--VC5GggidWkiBt9sB2lbYx5pBn1LrZeLZqekMqJ9TJCApxOJsdUeZfwHEVMZJvRdWYTwDwTf9lfIRuBgS3gWruocorE26K-GB1StJPkI7CG15Lda4X4u6bTy8ZikKuw2aJkftpgjvBbjCjjnerUJVAakUHkKNMfEhl51MMozw&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "clothing_store",
        icon: "http://localhost:3000/clothes.png",
    },
    {
        id: "ChIJgfSHsTTL1IkR_y_UkI7r2kI",
        name: "Urban Outfitters",
        position: {
            lat: 43.6544667,
            lng: -79.3799583,
        },
        address: "235 Yonge St, Toronto, ON M5B 1N8, Canada",
        type: [
            "clothing_store",
            "shoe_store",
            "electronics_store",
            "furniture_store",
            "home_goods_store",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFx6_SZx3oTQ0FCmk-vWfnpcMZ412Ig3JdGawAT4hUyiE5pDVv7TTravRotrfu51CXX6oidkzIv7YeCr8K98V2SiG5ah0ejPzyps-eiP3YN0C_fMRVrvBJN7-DfjX6lcfzM0qMJw47YfejMq_RGvagFtqZrZAUpbYyioShyhRuNNakn&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "clothing_store",
        icon: "http://localhost:3000/clothes.png",
    },
    {
        id: "ChIJ49rxszTL1IkRbWnTV7JyP9s",
        name: "Stag Shop - Adult Sex Store",
        position: {
            lat: 43.65465639999999,
            lng: -79.3800041,
        },
        address: "239 Yonge St, Toronto, ON M5B 1N8, Canada",
        type: ["clothing_store", "store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuG2Yy11GO20W0sTomroB28gB3XzEeNYniw3ADFC-vcgxPufjfePCvVgYC8_-A4xj_fJli3YUiuMpNqtx6CuQyAzGFibB531-4qj9YdM6-wVhcdhAk8Rt47q7DlQKK6VhIUSglJdNsTPHL_SBzoqc_oZxFhwoWCoiAYspyiRR-t49dOn&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "clothing_store",
        icon: "http://localhost:3000/clothes.png",
    },
    {
        id: "ChIJqyNdS6U0K4gRLiAkM9SGmxo",
        name: "Gucci",
        position: {
            lat: 43.66921869999999,
            lng: -79.3927898,
        },
        address: "130 Bloor St W Suite 102, Toronto, ON M5S 1N5, Canada",
        type: ["clothing_store", "store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEP_yh5HprA74bv_AFWAC_ElYnquYhrG-Ffz4tK0til5NZkIggH1l6zmYd5sRKpxBZ4uE1fJPJAmiGMG_EKqcqsAssJVDRQEUwzVcadlUpQS2m_-gLJ_a8Aqs5vu10mZ6j9OyC_W01hDVh6YiWaTPteM4Afu4xgF2658bU-QZ9Buuxe&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "clothing_store",
        icon: "http://localhost:3000/clothes.png",
    },
    {
        id: "ChIJXUz2HzPL1IkRTzjAGtccHwY",
        name: "Walking On A Cloud",
        position: {
            lat: 43.64877,
            lng: -79.3775086,
        },
        address: "67 Yonge St, Toronto, ON M5E 1J8, Canada",
        type: [
            "shoe_store",
            "clothing_store",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGhsAQHoYTMm5ZJTF-MaeJeuk-jw5BiN9DX2piFt0rnDVp0YWS_67GvzTLnCpU9ipmv4dWS68hUKXOlP7XtXKeyLbOLMgJ_e4QDyPmxR3XX9Kl0Ht9dG_u-5nTtXPCbbb4r6z2myBADbgQv34-QcdktwVhc7Sdib_4rRgszfXTkgKA&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "clothing_store",
        icon: "http://localhost:3000/clothes.png",
    },
    {
        id: "ChIJqwUdzLU0K4gR_motVEoD4iw",
        name: "Toronto Police Headquarters",
        position: {
            lat: 43.6615374,
            lng: -79.3854838,
        },
        address: "40 College St, Toronto, ON M5G 2J3, Canada",
        type: ["police", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGsdnxkuHrqwRwzlnA34bm8nfixIC9jmjlE3sMX9w3MbiU1X3dmRioV_r8ou53pgaKdaUB5Wz98vruH1ViC2iwEDyeWNk_kpqDM-I2Pk3z1gpTQ8Bu1vy_5I9xdpB1QBLzEfhGp1OlieNzPlG-7oAyvdp3K3nPJVLfHDkuHUrdhEM__&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "police",
        icon: "http://localhost:3000/police2.png",
    },
    {
        id: "ChIJc7ywMc80K4gROrBf17VW0XE",
        name: "Toronto Police Service 52 Division",
        position: {
            lat: 43.6543656,
            lng: -79.3893851,
        },
        address: "255 Dundas St W, Toronto, ON M5T 2W5, Canada",
        type: ["police", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFqjSgIIyxOQf_52cD5cmqD6JXvy-a56KdnEXiuUfbckC8TxSbOY8ov8CLkwmWft5ddwOW5ZrZBH9wg5XfvkFMbvWtei9jpkw0YaiDMlEWBSGxKYvDYEc5lkd1qDCs_5OYAqob_UJVg0f1VnZG3GLFMsbCMxlUx-AATCjWnmSY73kpB&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "police",
        icon: "http://localhost:3000/police2.png",
    },
    {
        id: "ChIJr0lpyM40K4gRj_iMsBTJFa4",
        name: "Children's Lawyer (Public Guardian)",
        position: {
            lat: 43.6538787,
            lng: -79.3873722,
        },
        address: "393 University Ave, Toronto, ON M5G 1E6, Canada",
        type: ["police", "point_of_interest", "establishment"],
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-unavailable%2F&psig=AOvVaw00UlNYXNhNv1cggnl3UBKQ&ust=1700416942795000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCh9PCQzoIDFQAAAAAdAAAAABAb",
        primary_type: "police",
        icon: "http://localhost:3000/police2.png",
    },
    {
        id: "ChIJyQPnzbU0K4gR90twy2LT1WE",
        name: "Tor PS Scu Viclas",
        position: {
            lat: 43.6611382,
            lng: -79.3850191,
        },
        address: "40 College St, Toronto, ON M5G 2J3, Canada",
        type: ["police", "point_of_interest", "establishment"],
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fimage-unavailable%2F&psig=AOvVaw00UlNYXNhNv1cggnl3UBKQ&ust=1700416942795000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCh9PCQzoIDFQAAAAAdAAAAABAb",
        primary_type: "police",
        icon: "http://localhost:3000/police2.png",
    },
    {
        id: "ChIJVVWFma00K4gRLXtUIT8oy0I",
        name: "Toronto Crime Stoppers",
        position: {
            lat: 43.66119799999999,
            lng: -79.3852651,
        },
        address: "40 College St, Toronto, ON M5G 2J3, Canada",
        type: ["police", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuH7Qgivx-gduXR_tRwyaevnhwyUXdkP2ATrIQaFWe9JHOwHMyb3O5T_DnVZv2mokOxNW0IXMA11Pv599f3lOIbVvyyrCb8TnyAmreBgIHQFtLTWYdSd_aXFQK2OiRRo07VRvR0aLkGBShoFsSRSj2woxDZZNeqvO8QAHIttlsuBMxPr&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "police",
        icon: "http://localhost:3000/police2.png",
    },
    {
        id: "ChIJHyPCRdA0K4gRM1Bn3dR4RCY",
        name: "Toronto Fire Station 332",
        position: {
            lat: 43.6482813,
            lng: -79.3895422,
        },
        address: "260 Adelaide St W, Toronto, ON M5H 1X6, Canada",
        type: ["fire_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGHwFH5NOlsSzANyheOWRTMHyVSfIpbGDujnAfAE08a9DO-QtcEjElLhHT7fU-YOgQOkEDyHAUVzog8ZzdIRmrMdugG89fDH9cwnghbXDtbtSHOI73kKpxSp9rc50-T1n4uhdFA81M4YJPHdrprLdPLiXnRzVDUxgTurV_wdVrbg40V&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "fire_station",
        icon: "http://localhost:3000/firemen.png",
    },
    {
        id: "ChIJV1e45Mw0K4gR9FP2sYeO3XA",
        name: "Toronto Fire Dept",
        position: {
            lat: 43.6534841,
            lng: -79.384093,
        },
        address: "100 Queen St W, Toronto, ON M5H 2N2, Canada",
        type: ["fire_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGSYnoQ2kr2RoHRF_zug2-gxUYJ8OktWAATo4hM7fekaJyz8mf6nzCQoUUZC6Dhzr3RYGQPq2P-ahvQUZ0VisOO421BlqVApVy1rB325VcqyLNZwSVwMbfVqiRSrNY17A9ykXGFgB6H--lWJGaZlZRw4XB4X8nRTXigHtDjgEEIK8nm&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "fire_station",
        icon: "http://localhost:3000/firemen.png",
    },
    {
        id: "ChIJr_0SG680K4gRWiIeSjnWeuk",
        name: "Toronto Fire Station 312",
        position: {
            lat: 43.6718236,
            lng: -79.38894909999999,
        },
        address: "34 Yorkville Ave, Toronto, ON M4W 1L5, Canada",
        type: ["fire_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGOU_9xHrLlz1KWlwgCZMLrBinKT438YVa04Ytl2EZbl22tU4vZK7ViE6ZKO5zmuzOgGbK-WVeEt5cfnQZ868qxEfYrfbDAmQlhU7-vgc9bS5wUeGCTM6rnwf64v0B0fANe82TdlG2Ej1pJ1JxB2YAujxA0D7tb3ZkmpzoBXdYZQLNl&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "fire_station",
        icon: "http://localhost:3000/firemen.png",
    },
    {
        id: "ChIJvU2tO-o0K4gRzqRYHtx19nc",
        name: "Toronto Fire Station 315",
        position: {
            lat: 43.6567458,
            lng: -79.404686,
        },
        address: "132 Bellevue Ave, Toronto, ON M5T 2N9, Canada",
        type: ["fire_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFJpLWfMiWZeFASgAoj59MzlUR3gRwqCILVYVzniVi4txWbmE51FzHKxSQW5dj6TwuBWMPfbcEGJh6d-qzicN6mRe7kAm6Z2k_K1YK2kTTE4ba4Rx_dB2LtEv645-9po4-Pj1L8xItWrUPgmxASXt6mUUB_3SPuwcvlqKooB3fKDCmI&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "fire_station",
        icon: "http://localhost:3000/firemen.png",
    },
    {
        id: "ChIJA8w9DrQ0K4gR6Lm3-rVjQu4",
        name: "Toronto Fire Station 314",
        position: {
            lat: 43.6629931,
            lng: -79.3846169,
        },
        address: "12 Grosvenor St, Toronto, ON M4Y 1A8, Canada",
        type: ["fire_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEwF6hJFH5JwEFZe0kk9leoudltppxGiM_oWdvwtRlmVJ5H5myZSTw172B3GssZ7VyfTGLBOxkGsUN8m3LBALsCcmGf8iNXWiu8eQEMEn7FKJ7IUxHm0oWOXuLUVxWnJTMY3gRC2U_TsSSs1kh_7Gztx0d7X24ebmrURWttZepYZLOo&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "fire_station",
        icon: "http://localhost:3000/firemen.png",
    },
    {
        id: "ChIJoUteqlrL1IkRU6mfUFHI4rk",
        name: "Esso",
        position: {
            lat: 43.6670148,
            lng: -79.36866549999999,
        },
        address: "581 Parliament St, Toronto, ON M4X 1P7, Canada",
        type: ["gas_station", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEn-tfOtGTgEld8DXNZSxVyKCA5wJRsheVDSb9VNQLm7fbzE-AuX-dGhsoNcBWeeFjHKMJo8IyHetdT_Ehk3Mj5JF2MdscASIwjzLRfYXBsENV8c8c1qLu4t2FoEoWGVfsqveaIPd4u-dHa7qlOP-ULb2YumcrAGj38VlP8wXCa3Ydp&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "gas_station",
        icon: "http://localhost:3000/fillingstation.png",
    },
    {
        id: "ChIJJ-0NzK40K4gR3vk5iKIowrQ",
        name: "Canadian Tire Gas+",
        position: {
            lat: 43.6731387,
            lng: -79.38755979999999,
        },
        address: "835 Yonge St, Toronto, ON M4W 2H2, Canada",
        type: ["gas_station", "car_wash", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHfq7_UuLN3TNn_lJocKzC32T-aQCtl2FWD765hcm4uD7gjU3ymCJkwKDpxLz-Px1E0JoD_BeUm64TbDnZIMRjtm5f_Q_XPcS0HkahqjVuK54Tsfc9SyYgW1hVOCewLuex_DKDF9O7_nOmn7yJnnhnbW5dfCKWX2elyzD5JAV9qmN9P&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "gas_station",
        icon: "http://localhost:3000/fillingstation.png",
    },
    {
        id: "ChIJa0JJnOU0K4gRoKcK3FQ7ybA",
        name: "7-Eleven",
        position: {
            lat: 43.6510392,
            lng: -79.41112369999999,
        },
        address: "883 Dundas St W, Toronto, ON M6J 1V8, Canada",
        type: [
            "convenience_store",
            "gas_station",
            "food",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuG_guM0GQuLojNzDL6Ui-BbAl7geBGbfHwTj9Q0rXJOsDmi2Wkuq1N0cDG_oixFc1bfas2XcxPphXMlDYfpFS5pz_KcTuZFWmUNCbd5zpL03TYGaedeHbUdTZ3lV1cT_nd-fkbkBdDcxYDDLRpyvMlDD4nUwZ7Nb26huVqs4IvR7w18&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "gas_station",
        icon: "http://localhost:3000/fillingstation.png",
    },
    {
        id: "ChIJyW-V1DjL1IkRW95AEyyfwM4",
        name: "Shell",
        position: {
            lat: 43.6548586,
            lng: -79.3636434,
        },
        address: "548 Richmond St E, Toronto, ON M5A 1R5, Canada",
        type: [
            "gas_station",
            "atm",
            "convenience_store",
            "finance",
            "meal_delivery",
            "food",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHatpMPCiihQCTAu_PH1JPJckbLVISYKFhctahMkYdD-SUAhmT4YnK_28v6jM1gAD7eeuYlBjvOOVZOo9dROMl5KqqWd6B6zXBTn7uGYnZJ27gdeCz2mWmxT5zoP0J09kjyQMPD9DG5Sz_4TcRwBVs_cGMHDm6dYjBOCA607XOwY5Qz&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "gas_station",
        icon: "http://localhost:3000/fillingstation.png",
    },
    {
        id: "ChIJv1nLC9k0K4gRbxJTCUZ16aE",
        name: "Shell",
        position: {
            lat: 43.64426589999999,
            lng: -79.3949277,
        },
        address: "38 Spadina Ave., Toronto, ON M5V 2H8, Canada",
        type: [
            "gas_station",
            "atm",
            "convenience_store",
            "finance",
            "meal_delivery",
            "food",
            "store",
            "point_of_interest",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuG859-pD8ARFkeBtkFYauUWZkon7BqrXIThHk1aJbtV2gqSfHlgf-wge3F2zfkQd6emHivJMkc6KFOBJpGHlei7sCfyBjgEz_FbzSL0dwJFxYwmVOfmm4p-t-3qhAFXGl1ux8mcmF-TvmMTiBDxs2d1lBeEbVyWnQ1yBnRb7BPp56M7&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "gas_station",
        icon: "http://localhost:3000/fillingstation.png",
    },
    {
        id: "ChIJo-eGINw0K4gREoQfqNL71g0",
        name: "Rotblott's Discount Warehouse",
        position: {
            lat: 43.64584980000001,
            lng: -79.3988007,
        },
        address: "443 Adelaide St W, Toronto, ON M5V 1S9, Canada",
        type: ["hardware_store", "point_of_interest", "store", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuE2Wwn9j2dDdoJE6WmPAH7smjvKaw523Bfx1iguih4xv3NGVFvVlBlvGx4j8HYMrhbW4pODqAZZ9NfXD7ktbltV8STYQckIx2g12xhqgaRfyUDXua04ufL4PTZlDgIOZsyjsAo2JSMAFGXPBqK5UV6fg0rluiP-97yu0ANvErOdsTNd&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hardware_store",
        icon: "http://localhost:3000/tools.png",
    },
    {
        id: "ChIJ80xc8zrL1IkRTIESI9XWmTU",
        name: "St. Lawrence Pro Hardware",
        position: {
            lat: 43.64978809999999,
            lng: -79.3677781,
        },
        address: "130 Lower Sherbourne St, Toronto, ON M5A 4J4, Canada",
        type: ["hardware_store", "point_of_interest", "store", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuGcAymBqGcA-JDZdyiLCXDaDYIUZ7NnOz3t0ta9hv1OGUDTIMhREqw0Ee6pNt-hF2g-t5oPoSSf1vhrrAtj-WvgW3xV2TcewRTYzdjv72aQZElDo6mCFWqQndycWv3fWEcwpckONwX_QSHqyTtUHJwL8f71tEqo3Fj9RzUEwi5SMqr1&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hardware_store",
        icon: "http://localhost:3000/tools.png",
    },
    {
        id: "ChIJOdUSvzXL1IkRyO-bMlrR7Fg",
        name: "Polytechnic Hardware Store",
        position: {
            lat: 43.65656509999999,
            lng: -79.37607779999999,
        },
        address: "131 Dundas St E, Toronto, ON M5B 2N6, Canada",
        type: ["hardware_store", "point_of_interest", "store", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEjgRhaTirspQNqfktPwSPUPwjPODa0CbrvY3Trs_WkIm7pcc1FVxqohN19a72ukErlXNkfsZgvq9DTMbSXlfwcMQ_jmsOwH3SKRV9kb1yf5GurJ7lcf3WsyIKjxr9w34fCrQZORvXlKkWbqoDMmeno_0TRXAk_PuyxEIDMfgKNWcsK&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hardware_store",
        icon: "http://localhost:3000/tools.png",
    },
    {
        id: "ChIJj-SYisI0K4gRah2oujX8YPY",
        name: "CAAM United Hardware",
        position: {
            lat: 43.6529215,
            lng: -79.4017019,
        },
        address: "160 Augusta Ave, Toronto, ON M5T 2L5, Canada",
        type: [
            "hardware_store",
            "furniture_store",
            "home_goods_store",
            "locksmith",
            "point_of_interest",
            "store",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFthNNLvVkq6fYjIcT2lek5epfe6gmgwzkjtZhRHsCER0O2ygorPhDS2U8bku3w0Qg-NRow88Pfk5knaVYI-QE0jU3zGOnNBnlwYiOTGXdyo80-WFF8fDGlH-KuyDbNZvxJJI4PzkDVpFowoTOhQuulKbfu8x3Wnue00N82Lz75YSZR&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hardware_store",
        icon: "http://localhost:3000/tools.png",
    },
    {
        id: "ChIJYcb92bI0K4gRK0vCpja3p_8",
        name: "Dudley's Hardware",
        position: {
            lat: 43.6661799,
            lng: -79.3809811,
        },
        address: "511 Church St, Toronto, ON M4Y 2C9, Canada",
        type: [
            "hardware_store",
            "home_goods_store",
            "general_contractor",
            "point_of_interest",
            "store",
            "establishment",
        ],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEMsm_heRxfhgjGQQjRByDfSvY8LuRhdaG-nv9NAeMICIwnFIWqJK8JXDIR1tIzWKHnId_I7tt13dJVif0BtaH82YHtJwvIavrS_ZdkE7r91alkAFJ-1JwS-7ZEWA8rW3vYQY9wIoOwbtD6m9AwACqkzsKYMSRZHLfJSU4UAzbiAJUR&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hardware_store",
        icon: "http://localhost:3000/tools.png",
    },
    {
        id: "ChIJkVGApxQzK4gRS_mzjRuChpo",
        name: "Al Flaherty's Outdoor Store",
        address: "2066 Dufferin St, York, ON M6E 3R6, Canada",
        position: {
            lat: 43.6870544,
            lng: -79.4470008,
        },
        type: ["clothing_store", "store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuHCf5_KwvQaV3LPr5yOZoBZo7yKpT38UaKo9vMMx-mAAs34WTSTUfrzuFvxcrtBrn050cVE_Wucn9QZKkFIOxoA6tbsdyx87jX7N-Usxlfv09Tec5xA-UrmAeSp0k8ZCYB8hra01lfQJ2CmQba9lX1leg17TzkRe2k06yMAkLHihYM&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hunting_store",
        icon: "http://localhost:3000/hunting.png",
    },
    {
        id: "ChIJG_wmperU1IkRNQ5rMCYJB6k",
        name: "﻿Solely Outdoors",
        address: "44 Riviera Dr, Markham, ON L3R 5M1, Canada",
        position: {
            lat: 43.832544,
            lng: -79.3447077,
        },
        type: ["store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFs_CZedBYvUdRME80LzdvqQliA0Y5a0ujXivZvhe1IBKsbQQmYfqSWqNOcoTh7TmuuJW05AJa46U8_uIGYes-_l-gtPswpkkV373dcZqhmSXAXxsJTp_4bh-EM40XaWnND2qi7rUR5xSfWKUclJX7l80jDcMpe3AaNLAgyBMge83N7&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hunting_store",
        icon: "http://localhost:3000/hunting.png",
    },
    {
        id: "ChIJ-2hzFjfL1IkRAQyeYM5T1BI",
        name: "Drift Outfitters & Fly Shop",
        address: "199 Queen St E, Toronto, ON M5A 1S2, Canada",
        position: {
            lat: 43.6540841,
            lng: -79.37084089999999,
        },
        type: ["clothing_store", "store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFg3maOzt0JdbvIQVQkYYrPiPcZd8BPrD07hwCBSt0maxVBVQulTwUVGPVI2N7IAwiCC7kt6UCqwHv420Q_m8L3Kg3qb77pEW5zvApq4yOsPag8xOHrMW9lC17O0MxJ1MhgBhoaz5egVyS_Kgdt5kPwfTwfuqPNODbATN21l2_OPpY8&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hunting_store",
        icon: "http://localhost:3000/hunting.png",
    },
    {
        id: "ChIJeRSFLj4vK4gRWdk772BkAaY",
        name: "Bass Pro Shops",
        address: "1 Bass Pro Mills Dr, Vaughan, ON L4K 5W4, Canada",
        position: {
            lat: 43.8250211,
            lng: -79.54277840000002,
        },
        type: ["clothing_store", "store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuFhrqVWUxvGZvPc6M_LxZhQpe1-nwh8TxcoX-X3cD1Pm6c-TC8NmUb7pxJQvp5psQKvajZ9346Z49Qb64UfgoYPKrT5jFoYJRnLFDEi8wU5gHTmB3kCRh2V4NUWTxr-YiM60LlmqdYPQF1_2DDaAwb2jN9qcoVboajlkDmuKTjPE2jI&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hunting_store",
        icon: "http://localhost:3000/hunting.png",
    },
    {
        id: "ChIJ8UKfITorK4gREtQGMybDz9Y",
        name: "Tenda Canada Inc",
        address:
            "250 West Beaver Creek Rd #10, Richmond Hill, ON L4B 1C7, Canada",
        position: {
            lat: 43.8450312,
            lng: -79.3883189,
        },
        type: ["store", "point_of_interest", "establishment"],
        photo: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=AcJnMuEEnTl_fSYbzqaxRxw7x6sqsWlNETsyGheNT2gaOlsbHleSPpDj1586EgSIEkzIm1dQrb7mYbOzdEjhHMU8yet50tflUsDjWJieO-y1JsVIc3x3XddAcdQuR7k0Ib2xmkcf-ILIRd8eHJt3m0OVICuIEHWF_1RjFKh09ZYu6-DPX_Kf&key=AIzaSyCYbNVTuBnquZpuLXBzfyBxWvSvz2sGGRo",
        primary_type: "hunting_store",
        icon: "http://localhost:3000/hunting.png",
    },
];

export default places;