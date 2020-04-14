import { StepTimer } from "../types/Timer";

export const timers: Record<string, StepTimer> = {
  "aeropress-steel-filter": {
    id: "aeropress-steel-filter",
    duration: 130,
    description: `
      The DISK Coffee Filter is a reusable filter designed to be used with the AeroPress® Coffee Maker. This allows more oils and a fuller bodied cup of coffee when used with the AeroPress®. Eliminates the need for paper filters, which is especially convenient when traveling.
    `,
    title: "Make coffee with Aeropress steel filter",
    steps: [
      {
        title: `
          Place disk in filter cap w/ text up and set press 
          in standing position on top of cup
        `
      },
      {
        title: `
          Put in 18g of fresh coffee (medium grind)
        `
      },
      {
        title: `
          Pour in 220ml of 200°F water slowly for 30 seconds
        `,
        duration: 30
      },
      {
        title: `
          Wait 50 seconds
        `,
        duration: 50
      },
      {
        title: `
          Stir gently for 10 seconds
        `,
        duration: 10
      },
      {
        title: `
          Plunge slowly for 40 seconds and enjoy your coffee
        `,
        description: `
          Recipe submitted by Kanji Ino.
        `,
        duration: 40
      }
    ]
  }
};
