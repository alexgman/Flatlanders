(function () {
    "use strict";

    var app = angular.module("store", []);

    app.controller("StoreController", function () {
        this.products = gem;
    });

    var gem = [
    {
        name: "Dodecahedron",
        price: 2.95,
        description: ". . .",
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'dodecahedron-01-full.jpg',
                thumb: 'dodecahedron-01-thumb.jpg'
            },
            {
                full: "dodecahedron-02-full.jpg"
            }
        ]
    },
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: ". . .",
        canPurchase: false,
        images:
            [
                {
                    full: 'dodecahedron-01-full.jpg',
                    thumb: 'dodecahedron-01-thumb.jpg'
                },
                {
                    full: "dodecahedron-02-full.jpg"
                }
            ]
    }
    ];
})();