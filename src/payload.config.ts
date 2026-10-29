import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { Block, buildConfig, CollectionConfig, GlobalConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { migrations } from "./migrations";

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { ProductBannerBlock } from './blocks/ProductBannerBlock';
import { HeroBannerBlock } from './blocks/HeroBannerBlock';
import { SalesPage } from './globals/SalesPage';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);



/**
 * Collections
 * Legg innholdssamlinger inn i dette arrayet for å inkludere dem.
 */

const collections: CollectionConfig[] = [
  Users,
  Media
];

/**
 * Blokker
 * Legg blokker inn i dette arrayet for å inkludere dem.
 */
const blocks: Block[] = [
  ProductBannerBlock,
  HeroBannerBlock
];

/**
 * Globals
 * Legg globals inn i dette arrayet for å inkludere dem.
 */

const globals: GlobalConfig[] = [
  SalesPage
];


/**
 * Payload-konfigurasjon
 * Endre her for å legge til plugins, justere på databaseinnstillinger
 * eller andre ting du trenger. Vær varsom - endringer du gjør her kan
 * gjøre at prosjektet ditt ikke kjører!
 */
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  blocks,
  collections,
  globals,
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    prodMigrations: migrations
  }),
  sharp,
  plugins: [],
});
