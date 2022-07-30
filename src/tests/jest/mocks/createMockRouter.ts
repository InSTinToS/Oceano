import { NextRouter } from 'next/router'

const createMockRouter = (router: Partial<NextRouter>): NextRouter => ({
  query: {},
  route: '/',
  asPath: '/',
  basePath: '',
  pathname: '/',
  isReady: true,
  back: jest.fn(),
  push: jest.fn(),
  isPreview: false,
  reload: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  domainLocales: [],
  isFallback: false,
  defaultLocale: 'en',
  isLocaleDomain: false,
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  ...router
})

export { createMockRouter }
