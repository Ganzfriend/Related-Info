// __tests__/Places.test.js
/**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Places from '../src/components/Places';
import { render, fireEvent } from './test-utils';

const server = setupServer(
  rest.get('/homes', (req, res, ctx) => res(ctx.json({ greeting: 'hello there' }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<Places url="/greeting" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await waitFor(() => screen.getByRole('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toHaveAttribute('disabled');
});

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))),
  );

  render(<Places url="/greeting" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await waitFor(() => screen.getByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
});
