/// <reference types="vite/client" />

declare module "*.mpeg" {
  const src: string;
  export default src;
}

declare module "*.wav" {
  const src: string;
  export default src;
}