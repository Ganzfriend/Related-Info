import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Places from '../src/components/Places';

const sampleHome = [{
  _id: 0,
  image: 'https://related-info-images.s3-us-west-2.amazonaws.com/andrea-davis-FHWCM78j66g-unsplash.jpg',
  reviews: 8,
  type: 'Private room',
  beds: 2,
  description: 'Cozy and quaint, but also haunted (by Elon Musk\'s time-travelling ghost)',
  price: 65,
  superhost: true,
  liked: false,
  city: 'Seattle, WA',
  url: 'https://www.google.com',
}];

describe('App', () => {
  test('Places renders a DOM', () => {
    const { queryAllByRole } = render(
      <Places homeInfo={sampleHome} />,
    );
    expect(queryAllByRole('div')).toBeTruthy();
  });
});

// test('can find this dummy data', () => {
//   render(
//     <div>
//       <label htmlFor="example">Example</label>
//       <input id="example" />
//     </div>,
//   );

//   const exampleInput = screen.getByLabelText('Example');
//   expect(exampleInput).toBeTruthy();
// });
