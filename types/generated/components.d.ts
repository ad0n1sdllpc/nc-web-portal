import type { Schema, Struct } from '@strapi/strapi';

export interface ReusableSeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_reusable_seo_metadata';
  info: {
    displayName: 'SEO Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'reusable.seo-metadata': ReusableSeoMetadata;
    }
  }
}
