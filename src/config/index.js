const config = {
    backendpath: process.env.REACT_APP_ENVIRONMENT === 'production' ? process.env.REACT_APP_PBEPATH : process.env.REACT_APP_DBEPATH
}

export default config;