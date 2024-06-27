const data = {
  id: Date.now(),
  name: "root",
  isFolder: true,
  items: [
    {
      id: Date.now(),
      name: "public",
      isFolder: true,
      items: [
        {
          id: Date.now(),
          name: "usr",
          isFolder: true,
          items: [
            {
              id: Date.now(),
              name: "profile.txt",
              isFolder: false,
            },
            {
              id: Date.now(),
              name: "permission.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: Date.now(),
      name: "src",
      isFolder: true,
      items: [],
    },
    {
      id: Date.now(),
      name: "logs.txt",
      isFolder: false,
    },
  ],
};

export default data;
