import React from 'react';
import {
  render, queries, queryHelpers, buildQueries,
} from '@testing-library/react';
import { ThemeProvider } from 'my-ui-lib';
import { TranslationProvider } from 'my-i18n-lib';
import defaultStrings from 'i18n/en-x-default';
import * as customQueries from './custom-queries';

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme="light">
    <TranslationProvider messages={defaultStrings}>
      {children}
    </TranslationProvider>
  </ThemeProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

/// ///////////////////////////////////////////////
// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy = (...args) => queryHelpers.queryAllByAttribute('data-cy', ...args);

const getMultipleError = (c, dataCyValue) => `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
const getMissingError = (c, dataCyValue) => `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export {
  queryByDataCy,
  queryAllByDataCy,
  getByDataCy,
  getAllByDataCy,
  findAllByDataCy,
  findByDataCy,
};

// const { getByDataCy } = render(<Component />)

// expect(getByDataCy('my-component')).toHaveTextContent('Hello')
/// ////////////////////////////////////////

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
