/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation1200832254",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "realisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation4264581662",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "scenariste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation1200832254",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "realisateur",
    "presentable": true,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteur",
    "presentable": true,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation4264581662",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "scenariste",
    "presentable": true,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
