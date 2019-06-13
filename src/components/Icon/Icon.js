// @flow

import React from 'react';

import { IconWrapperTag, IconFontTag, IconSvgTag } from './Icon.theme';
import { IconsConsumer } from './IconsProvider';
import { COLORS } from '../../theme';
import * as glyphs from './glyphs';

export type IconProps = {
  /** icon name */
  name: string,
  /** icon color */
  color?: $Keys<typeof COLORS>,
  /** icon size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch',
  /** custom icon class */
  className?: string,
  /** title attribute for the icon */
  title?: string,
  /** possible types of the css cursor property */
  cursor?: 'pointer' | 'default' | 'auto',
};

const Icon = ({ name, className, ...rest }: IconProps) => {

  return (
    <IconsConsumer>
      { ({ icons = {}}) => {
        const Glyph: any = icons[name] || glyphs[name];

        return (
          <IconWrapperTag tagName="span" { ...rest }>
            <Choose>
              <When condition={ !!className && !Glyph }>
                <IconFontTag
                  tagName="i"
                  title={ rest.title }
                  modifiers={ rest }
                />
              </When>
              <When condition={ !!Glyph }>
                <IconSvgTag
                  tagName="i"
                  title={ rest.title }
                  modifiers={ rest }
                  className={ className }
                >
                  <Glyph width="100%" height="100%" />
                </IconSvgTag>
              </When>
            </Choose>
          </IconWrapperTag>
        ); } }
    </IconsConsumer>
  );
};

Icon.defaultProps = {
  size: 'md',
};

export { Icon };
