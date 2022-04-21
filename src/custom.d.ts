declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.jpg" {
  export default "" as string;
}

declare module "*.webp" {
  export default "" as string;
}
