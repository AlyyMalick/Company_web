import snaityClient, { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new SanityClient({
  //   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: "lms0ouhc",
  dataset: "production",
  apiVersion: "2023-10-19",
  seCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
