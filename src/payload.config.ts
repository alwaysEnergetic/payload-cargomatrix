// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Locations } from './collections/Locations'
import { LocationTypes } from './collections/LocationTypes'
import { Pages } from './collections/Pages'

// Globals
import { Homepage } from './globals/Homepage'
import { Settings } from './globals/Settings'
import { Login } from './globals/Login'
import { Register } from './globals/Register'
import { ResetPassword } from './globals/ResetPassword'
import { ForgotPassword } from './globals/ForgotPassword'
import { Header } from './globals/Header'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseAdapters = {
  mongoose: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://127.0.0.1/payloadtests',
  }),
  postgres: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://127.0.0.1:5432/payloadtests',
    },
  }),
}

type DatabaseType = 'mongoose' | 'postgres'

const selectedDatabase: DatabaseType = (process.env.PAYLOAD_DATABASE as DatabaseType) || 'mongoose'


export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Locations, LocationTypes, Pages],
  globals: [Settings, Homepage, Header, Login, Register, ResetPassword, ForgotPassword],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'French',
        code: 'fr',
      },
      {
        label: 'Spanish',
        code: 'es',
      },
    ],
    defaultLocale: 'en',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI,
    },
  }),
  // db: databaseAdapters[selectedDatabase],
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
