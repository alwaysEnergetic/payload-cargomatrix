/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    locations: Location;
    locationTypes: LocationType;
    pages: Page;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Setting;
    homepage: Homepage;
    header: Header;
    login: Login;
    register: Register;
    resetPassword: ResetPassword;
    forgotPassword: ForgotPassword;
  };
  locale: 'en' | 'fr' | 'es';
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  locations?: (number | Location)[] | null;
  roles?: ('admin' | 'staff')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "locations".
 */
export interface Location {
  id: number;
  name: string;
  type?: (number | null) | LocationType;
  page: number | Page;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "locationTypes".
 */
export interface LocationType {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  publishedOn?: string | null;
  layout: (
    | {
        layoutType:
          | 'simple-centered'
          | 'split-screenshot'
          | 'split-code-example'
          | 'simple-centered-bg'
          | 'app-screenshot'
          | 'app-screenshot-dark'
          | 'phone-mockup'
          | 'split-image'
          | 'angled-image-right'
          | 'image-tiles'
          | 'offset-image'
          | 'split-screenshot-dark';
        title: string;
        description?: string | null;
        announcement?: boolean | null;
        announcementText?: string | null;
        announcementUrl?: string | null;
        logo?: boolean | null;
        logoImage?: number | Media | null;
        backgroundImage?: number | Media | null;
        imageUrl?: number | Media | null;
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: number | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?:
                  | ('default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link')
                  | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'hero';
      }
    | {
        layoutType:
          | 'product-screenshot'
          | 'centered-2x2'
          | 'large-screenshot-dark'
          | 'large-screenshot'
          | 'three-column-small-icons-dark'
          | 'three-column-small-icons'
          | 'product-screenshot-left'
          | 'product-screenshot-dark'
          | 'three-column-large-icons-dark'
          | 'three-column-large-icons'
          | 'contained-panel'
          | 'product-screenshot-panel'
          | 'testimonial'
          | 'offset-2x2'
          | 'code-example-panel'
          | 'offset-feature-list'
          | 'simple'
          | 'two-column-small-icons-dark';
        title: string;
        subtitle?: string | null;
        description?: string | null;
        productScreenshot?: number | Media | null;
        largeScreenshot?: number | Media | null;
        codeExampleImage?: number | Media | null;
        icons?:
          | {
              icon: number | Media;
              title: string;
              description?: string | null;
              id?: string | null;
            }[]
          | null;
        testimonial?: string | null;
        featureList?:
          | {
              title: string;
              description?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'featureSection';
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: number;
  logo: number | Media;
  mode: 'light' | 'dark';
  radius?: ('0' | '0.3' | '0.5' | '0.75' | '1') | null;
  color: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: number;
  background: number | Media;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        subNavItems?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: number | Page;
                } | null;
                url?: string | null;
                label: string;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "login".
 */
export interface Login {
  id: number;
  background: number | Media;
  title?: string | null;
  description?: string | null;
  logo?: number | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "register".
 */
export interface Register {
  id: number;
  background: number | Media;
  title?: string | null;
  description?: string | null;
  logo?: number | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "resetPassword".
 */
export interface ResetPassword {
  id: number;
  background: number | Media;
  title?: string | null;
  description?: string | null;
  logo?: number | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forgotPassword".
 */
export interface ForgotPassword {
  id: number;
  background: number | Media;
  title?: string | null;
  description?: string | null;
  logo?: number | Media | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}