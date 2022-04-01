import ReactGA from 'react-ga';

ReactGA.initialize('UA-124613742-1');

export const logPageview = (title: string) => {
  if (process.env.NODE_ENV !== 'development') {
    const path = window.location.pathname + window.location.search
    ReactGA.pageview(path, undefined, title)
  }
}

export const logEvent = (event: ReactGA.EventArgs) => {
  const withEnv = Object.assign({}, event, {env: process.env.NODE_ENV})
  ReactGA.event(withEnv)
}
