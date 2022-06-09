export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62a1cfe3651494633ed00dd3",
                  title: "Sanity Studio",
                  name: "sanity-starter-test-studio",
                  apiId: "278bfaf5-fe0a-4cf3-97bd-96fbd745e4c4",
                },
                {
                  buildHookId: "62a1cfe3293a1a61e25d3bfa",
                  title: "Blog Website",
                  name: "sanity-starter-test",
                  apiId: "e3c27a1d-ab85-490a-8aef-fec141725b19",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tfursdon/sanity-starter-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-starter-test.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
