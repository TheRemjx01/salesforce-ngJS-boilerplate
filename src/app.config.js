export const getBaseHref = () => {
    return process.env.NODE_ENV === 'production' ? '/' : '/dev';
};