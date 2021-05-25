import React from 'react';
import propTypes from 'prop-types';
import { ContextProvider } from './Provider';

interface ResponsiveImageProps {
  src: string;
  children: React.ReactElement<HTMLImageElement>;
}

const ResponsiveImage = ({ src, children }: ResponsiveImageProps) => {
  const ctx = React.useContext(ContextProvider);

  if (!ctx) {
    throw new Error('react-responsive-image: Provider is missing!');
  }

  const variants = React.useMemo(() => {
    const keys = Object.keys(ctx.resolver);
    const key = keys.find(k => {
      return src.match(new RegExp(k));
    });

    if (key) {
      return ctx.resolver[key](src);
    }

    return [];
  }, [src, ctx.resolver]);

  const _smallest = variants.find(v => v.width === 320 || v.width < 480);

  return (
    <picture>
      {variants.map((v, i) => (
        <source key={i} srcSet={v.srcSet} media={`(min-width: ${v.width}px)`} />
      ))}
      {React.cloneElement(children, { src: _smallest?.src ?? src })}
    </picture>
  );
};

ResponsiveImage.propTypes = {
  src: propTypes.string.isRequired,
};

export default ResponsiveImage;
