import { slugField } from "./../../fields/slug";
import { MediaContent } from "./../../blocks/MediaContent/index";
import { Archive } from "./../../blocks/ArchiveBlock/index";
import { MediaBlock } from "./../../blocks/MediaBlock/index";
import { Content } from "./../../blocks/Content/index";
import { CallToAction } from "./../../blocks/CallToAction/index";
import { CollectionConfig } from "payload/types";
import { hero } from "../../fields/hero";
import { anyone } from "../../access/anyone";
import { admins } from "../../access/admins";
import { FormBlock } from "../../blocks/Form";
import { cardsContent } from "../../blocks/CardsContent";

export const Pages: CollectionConfig = {
  slug: "pages",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },

  access: {
    read: anyone,
    update: admins,
    create: admins,
    delete: admins,
  },

  versions: {
    drafts: true,
  },

  fields: [
    {
      name: "title",
      localized: true,
      type: "text",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [hero],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: false,
              blocks: [
                cardsContent,
                FormBlock,
                Content,
                MediaBlock,
                Archive,
                CallToAction,
                MediaContent,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
