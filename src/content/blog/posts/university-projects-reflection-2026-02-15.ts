import type { BlogPost } from "../types";

export const universityProjectsReflection20260215Post: BlogPost = {
  slug: "university-projects-reflection-2026-02-15",
  title: "What My University Projects Still Teach Me Today",
  date: "2026-02-15",
  readTime: "5 min read",
  summary:
    "A readable reflection on three university repositories that still influence how I build software: BigNumbers, Proximity Messenger, and PB161 C++ assignments.",
  tags: ["University", "Engineering", "Reflection", "Cryptography", "Android"],
  blocks: [
    {
      type: "paragraph",
      text: "A lot of old student repositories are just nostalgia. These three are different for me because they still represent real engineering habits I use today: think carefully about data, separate concerns early, and validate assumptions at the edges.",
    },
    { type: "heading", text: "Three repositories that aged well" },
    {
      type: "list",
      items: [
        "BigNumbers (C, April 2021, collaborative) — https://github.com/xmoravec/BigNumbers",
        "MICS2-50-Super-Proximity-Messenger (Java, May 2021) — https://github.com/xmoravec/MICS2-50-Super-Proximity-Messenger",
        "PB161_Cplusplus (C++, July 2023) — https://github.com/xmoravec/PB161_Cplusplus",
      ],
    },
    {
      type: "paragraph",
      text: "BigNumbers was a final project for Algorithms for Numbers and Public-Key Cryptography. The most interesting part was seeing how abstract crypto ideas become very concrete once you are manually dealing with arrays, carry propagation, modular arithmetic, primality checks, and RSA flows.",
    },
    {
      type: "paragraph",
      text: "Proximity Messenger was a very different kind of challenge: building communication that works without traditional internet assumptions. Nearby advertising/discovery and endpoint lifecycle handling taught me that connection state management is a product feature, not only a technical detail.",
    },
    {
      type: "paragraph",
      text: "The PB161 C++ assignments (reservation CLI, custom robot language interpreter, and Bomberman) reinforced parser discipline and object design. Writing strict checks for undefined references and invalid instruction forms had a direct influence on how I now approach input validation and error messages in production code.",
    },
    {
      type: "quote",
      text: "University projects are most valuable when they stop being assignments and start becoming reusable engineering instincts.",
    },
    { type: "heading", text: "A tiny code fragment that captures the point" },
    {
      type: "code",
      language: "c",
      code: `bignum *bignum_fromstring(char *str) {
  bignum* num = bignum_new();
  bignum_enlarge(num, strlen(str));
  for (unsigned int i = 0; i < strlen(str); i++) {
    num->tab[i] = str[i] - '0';
  }
  return num;
}`,
    },
    {
      type: "paragraph",
      text: "This conversion helper is simple, but it reflects the broader theme: understand representation first, then everything else (operations, tests, performance, correctness) becomes easier to reason about.",
    },
    { type: "heading", text: "Other repositories worth mentioning" },
    {
      type: "list",
      items: [
        "CosmosDB-Flask-Mongo-Sample (fork, April 2023) — https://github.com/xmoravec/CosmosDB-Flask-Mongo-Sample",
        "2019-pb162-seminar-project (Java I/O and serialization) — https://github.com/xmoravec/2019-pb162-seminar-project",
      ],
    },
    {
      type: "paragraph",
      text: "I do not treat these as polished products today, but as a useful record of how my engineering thinking was formed. They still influence how I design APIs, structure modules, and choose what to validate early versus later.",
    },
  ],
};
