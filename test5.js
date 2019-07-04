const Immutable = require('immutable');

// transform the Map of items and attributes, into a list of objects where the 'name' is the attribute name,
// values is a list of attribute values containing that name, and items under that being the original item that had the attribute
// example:
//
// fromShape:
//
// {
//   itemKey: {
//     name: 'itemName',
//     attributes: [
//       {
//         name: 'attributeName',
//         value: 'attributeValue',
//       },
//     ],
//   },
// }
//
// toShape:
//
// [
//   {
//     name: 'attributeName',
//     values: [
//       {
//         value: 'attributeValue',
//         items: [
//           {
//             name: 'itemName',
//             value: 'itemKey'
//           }
//         ],
//       }
//     ],
//   },
// ]

const transform = (fromShape) => {
  const itemKeys = fromShape.keySeq();

  // constructes the data needed;
  // Map of key value pair, where key is the all the unique attributeNames
  // and value is the List of attributeValues associated with it
  const attributes = Immutable.Map().withMutations(mutable => {
    itemKeys.forEach(itemKey => {
      fromShape.getIn([itemKey, 'attributes']).forEach(attribute => {
        const attributeName = attribute.get('name');
        const attributeValue = attribute.get('value');
  
        if (!mutable.has(attributeName)) {
          mutable.set(
            attributeName,
            Immutable.List()
          );
        }

        if (!mutable.get(attributeName).includes(attributeValue)) {
          mutable.setIn(
            [attributeName, mutable.get(attributeName).size],
            attributeValue
          );
        }
      });
    });
  });

  return Immutable.List().withMutations(mutation => {
    attributes.keySeq().forEach((attributeName, nameIndex) => {
      mutation.set(nameIndex, Immutable.Map());
      mutation.setIn(
        [nameIndex, 'name'],
        attributeName
      ).setIn(
        [nameIndex, 'values'],
        Immutable.List()
      );

      attributes.get(attributeName).forEach((attributeValue, valueIndex) => {
        mutation.setIn(
          [nameIndex, 'values', valueIndex],
          Immutable.Map()
        ).setIn(
          [nameIndex, 'values', valueIndex, 'value'],
          attributeValue
        ).setIn(
          [nameIndex, 'values', valueIndex, 'items'],
          Immutable.List()
        );

        itemKeys.forEach((key) => {
          const has = fromShape.getIn([key, 'attributes']).some(attribute => {
            return attribute.get('name') === attributeName && attribute.get('value') === attributeValue;
          });

          if (has) {
            mutation.setIn(
              [nameIndex, 'values', valueIndex, 'items', mutation.getIn([nameIndex, 'values', valueIndex, 'items']).size],
              Immutable.Map()
            ).setIn(
              [nameIndex, 'values', valueIndex, 'items', mutation.getIn([nameIndex, 'values', valueIndex, 'items']).size - 1, 'name'],
              fromShape.getIn([key, 'name'])
            ).setIn(
              [nameIndex, 'values', valueIndex, 'items', mutation.getIn([nameIndex, 'values', valueIndex, 'items']).size - 1, 'value'],
              key
            );
          }
        });
      });
    });
  });
};

const fromShape = Immutable.fromJS({
  item1: {
    name: 'item 1',
    attributes: [
      {
        name: 'colour',
        value: 'gold',
      },
      {
        name: 'colour',
        value: 'silver',
      },
      {
        name: 'colour',
        value: 'bronze',
      },
      {
        name: 'height',
        value: 2,
      },
      {
        name: 'height',
        value: 3,
      }
    ]
  },
  item2: {
    name: 'item 2',
    attributes: [
      {
        name: 'colour',
        value: 'red',
      },
      {
        name: 'colour',
        value: 'blue',
      },
      {
        name: 'colour',
        value: 'green',
      },
      {
        name: 'height',
        value: 5,
      },
      {
        name: 'width',
        value: 6,
      }
    ]
  },
  item3: {
    name: 'item 3',
    attributes: [
      {
        name: 'colour',
        value: 'red',
      },
      {
        name: 'colour',
        value: 'black',
      },
      {
        name: 'colour',
        value: 'gold',
      },
      {
        name: 'height',
        value: 3,
      },
      {
        name: 'width',
        value: 6,
      }
    ]
  }
});

const toShape = Immutable.fromJS([
  {
    name: 'colour',
    values: [
      {
        value: 'gold',
        items: [
          {
            name: 'item 1',
            value: 'item1',
          },
          {
            name: 'item 3',
            value: 'item3',
          },
        ],
      },
      {
        value: 'silver',
        items: [
          {
            name: 'item 1',
            value: 'item1',
          },
        ],
      },
      {
        value: 'bronze',
        items: [
          {
            name: 'item 1',
            value: 'item1',
          },
        ]
      },
      {
        value: 'red',
        items: [
          {
            name: 'item 2',
            value: 'item2',
          },
          {
            name: 'item 3',
            value: 'item3',
          },
        ]
      },
      {
        value: 'green',
        items: [
          {
            name: 'item 2',
            value: 'item2',
          },
        ]
      },
      {
        value: 'blue',
        items: [
          {
            name: 'item 2',
            value: 'item2',
          },
        ],
      },
      {
        value: 'black',
        items: [
          {
            name: 'item 3',
            value: 'item3',
          },
        ],
      },
    ], 
  },
  {
    name: 'height',
    values: [
      {
        value: 2,
        items: [
          {
            name: 'item 1',
            value: 'item1',
          },
        ],
      },
      {
        value: 3,
        items: [
          {
            name: 'item 1',
            value: 'item1',
          },
          {
            name: 'item 3',
            value: 'item3',
          },
        ],
      },
      {
        value: 5,
        items: [
          {
            name: 'item 2',
            value: 'item2',
          },
        ]
      },
    ], 
  },
  {
    name: 'width',
    values: [
      {
        value: 6,
        items: [
          {
            name: 'item 2',
            value: 'item2',
          },
          {
            name: 'item 3',
            value: 'item3',
          },
        ],
      },
    ], 
  },
]);

module.exports = {
  transform,
  toShape,
  fromShape,
};