export const inputs = [
  {
    label: 'name',
    type: 'text',
    required: true,
    message: 'Please enter your name',
  },
  {
    label: 'type',
    type: 'select',
    required: true,
    message: 'Please select the donation type',
    options: ['money', 'food', 'clothing'],
  },
  {
    label: 'date',
    type: 'date',
    required: true,
    message: 'Please select the date',
  },
  {
    label: 'amount',
    type: 'number',
    required: true,
    message: 'Please enter the amount',
  },
];
