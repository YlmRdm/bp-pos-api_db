const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

const fakeProductData = [
      {
        id: 1,
        name: "Serpme Kahvaltı (+2 Kişi)",
        catId: 1,
        existed: true,
        recipes: [1, 3, 5]
      },
      {
        id: 2,
        name: "Van Serpme Kahvaltı (+3 Kişi)",
        catId: 1,
        existed: true,
        recipes: [1, 5, 7]
      },
      {
        id: 3,
        name: "Kahvaltı Tabağı (1 Kişi)",
        catId: 1,
        existed: true,
        recipes: [1, 5, 10]
      },
      {
        id: 4,
        name: "Günün Çorbası",
        catId: 2,
        existed: true,
        recipes: [3, 6, 9, 12]
      },
      {
        id: 5,
        name: "Mercimek Çorbası",
        catId: 2,
        existed: true,
        recipes: [6, 8, 11, 13, 14]
      },
      {
        id: 6,
        name: "Ezogelin Çorbası",
        catId: 2,
        existed: true,
        recipes: [6, 8, 11, 13, 14]
      },
      {
        id: 7,
        name: "İşkembe Çorbası",
        catId: 2,
        existed: true,
        recipes: [6, 8, 12, 13, 14]
      },
      {
        id: 8,
        name: "Kelle paça Çorbası",
        catId: 2,
        existed: true,
        recipes: [4, 6, 8, 11, 14]
      },
      {
        id: 9,
        name: "Spagetthi Napolitana",
        catId: 3,
        existed: true,
        recipes: [6, 8, 11, 13, 14]
      },
      {
        id: 10,
        name: "Spagetthi Bolognesse",
        catId: 3,
        existed: true,
        recipes: [6, 9, 11, 13, 14]
      },
      {
        id: 11,
        name: "Penne Alfredo",
        catId: 3,
        existed: true,
        recipes: [7, 8, 10, 13, 14]
      },
      {
        id: 12,
        name: "Penne Arabiata",
        catId: 3,
        existed: true,
        recipes: [5, 8, 11, 12, 14]
      },
      {
        id: 13,
        name: "Tortellini",
        catId: 3,
        existed: true,
        recipes: [3, 9, 11, 13, 14]
      },
      {
        id: 14,
        name: "Pizza Margherita",
        catId: 4,
        existed: true,
        recipes: [6, 8, 11, 13, 14]
      },
      {
        id: 15,
        name: "Pizza 4 Quesos",
        catId: 4,
        existed: true,
        recipes: [6, 8, 11, 12, 14]
      },
      {
        id: 16,
        name: "Pizza Vegeteriana",
        catId: 4,
        existed: true,
        recipes: [6, 10, 11, 13, 14]
      },
      {
        id: 17,
        name: "Ali Nazik",
        catId: 5,
        existed: true,
        recipes: [6, 8, 13, 14]
      },
      {
        id: 18,
        name: "Kuzu Kaburga",
        catId: 5,
        existed: true,
        recipes: [6, 8, 11, 13, 15]
      },
      {
        id: 19,
        name: "Çöp Şiş",
        catId: 5,
        existed: true,
        recipes: [6, 8, 10, 13, 14]
      },
      {
        id: 20,
        name: "Kadayıflı Şinitzel",
        catId: 6,
        existed: true,
        recipes: [8, 11, 13, 14]
      },
      {
        id: 21,
        name: "Sosya soslu Tavuk",
        catId: 6,
        existed: true,
        recipes: [2, 8, 11, 13, 14]
      },
      {
        id: 22,
        name: "Köri soslu Tavuk",
        catId: 6,
        existed: false,
        recipes: [6, 8, 11, 13]
      },
      {
        id: 23,
        name: "Peynirli Pide",
        catId: 7,
        existed: true,
        recipes: [6, 8, 13, 14]
      },
      {
        id: 24,
        name: "Kıymalı Pide",
        catId: 7,
        existed: false,
        recipes: [12, 13]
      },
      {
        id: 25,
        name: "Kuşbaşılı Pide",
        catId: 7,
        existed: true,
        recipes: [13, 14]
      },
      {
        id: 26,
        name: "Beğendili Pide",
        catId: 7,
        existed: true,
        recipes: [14, 15]
      },
      {
        id: 27,
        name: "Sebzeli Pide",
        catId: 7,
        existed: true,
        recipes: [6, 11, 13]
      },
      {
        id: 28,
        name: "Yoğurtlu Pide",
        catId: 7,
        existed: true,
        recipes: [6, 7]
      },
    ];

exports.create = (req, res) => {

  res.send({
    isSuccess: true,
    errors: [],
    message: 'Created Successfully',
    data: null
  })
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  let found = fakeProductData.find(product => product.id == id);
  res.send({
    isSuccess: true,
    errors: [],
    message: '',
    data: found
  })
};

exports.update = (req, res) => {
  res.send({
    isSuccess: true,
    errors: [],
    message: 'record updated successfully',
    data: null
  })
};

exports.delete = (req, res) => {
  res.send({
    isSuccess: true,
    errors: [],
    message: 'record removed successfully',
    data: null
  })
};

exports.deleteAll = (req, res) => {
  res.send({
    isSuccess: true,
    errors: [],
    message: 'Table cleared successfully',
    data: null
  })
};
exports.findAllExisted = (req, res) => {
  const found = fakeProductData.find(product => product.existed === true);
  res.send({
    isSuccess: true,
    message: '',
    errors: [],
    data: found
  });
};

exports.findAll = (req, res) => {
  res.send({
    isSuccess: true,
    errors: [],
    message: "",
    data: fakeProductData,
  });
};
