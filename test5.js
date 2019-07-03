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
  return fromShape;
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