// __tests__/Places.test.js
/**
 * @test-environment jsdom
 */
import 'jsdom-global/register';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from './test-utils';
import Places from '../src/components/Places';

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

////////////////////////////////////////////////////////////

const server = setupServer(
  rest.post('/login', (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `Login` component.
    return res(ctx.json({ token: 'mocked_user_token' }))
  }),
)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test('allows the user to log in', async () => {
  render(<Login />)
  userEvent.type(
    screen.getByRole('textbox', { name: /username/i }),
    'john.maverick',
  )
  userEvent.type(
    screen.getByRole('textbox', { name: /password/i }),
    'super-secret',
  )
  userEvent.click(screen.getByText(/submit/i))
  const alert = await screen.findByRole('alert')

  // Assert successful login state
  expect(alert).toHaveTextContent(/welcome/i)
  expect(window.sessionStorage.getItem('token')).toEqual(fakeUserResponse.token)
})

test('handles login exception', () => {
  server.use(
    rest.post('/login', (req, res, ctx) => {
      // Respond with "500 Internal Server Error" status for this test.
      return res(
        ctx.status(500),
        ctx.json({ message: 'Internal Server Error' }),
      )
    }),
  )

  render(<Login />)
  userEvent.type(
    screen.getByRole('textbox', { name: /username/i }),
    'john.maverick',
  )
  userEvent.type(
    screen.getByRole('textbox', { name: /password/i }),
    'super-secret',
  )
  userEvent.click(screen.getByText(/submit/i))

  // Assert meaningful error message shown to the user
  expect(alert).toHaveTextContent(/sorry, something went wrong/i)
  expect(window.sessionStorage.getItem('token')).toBeNull()
})