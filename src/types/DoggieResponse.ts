export type DoggieResponse = {
  name: string;
  image_url: string;
  iframe_url: string;
  external_url: string;
  description: string;
  attributes: Traits[];
  animation_url: string;
};

export type Traits = {
  trait_type: string;
  value: string;
};
