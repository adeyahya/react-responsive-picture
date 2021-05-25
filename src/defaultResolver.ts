import { Resolver } from './types';

const sizes = [320, 768, 1024];

const resolver: Record<string, Resolver> = {
  'res.cloudinary.com': uri => {
    return sizes
      .map(s => {
        return {
          width: s,
          src: uri.replace(/\/upload\//, `/upload/c_scale,w_${s}/`),
          srcSet: uri
            .replace(/\/upload\//, `/upload/c_scale,w_${s}/`)
            .concat(` ${s}w, `)
            .concat(
              uri
                .replace(/\/upload\//, `/upload/c_scale,w_${s * 1.5}/`)
                .concat(' 1.5x')
            ),
        };
      })
      .sort((a, b) => b.width - a.width);
  },
};

export default resolver;
