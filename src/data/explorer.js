const data = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "usr",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "profile.txt",
              isFolder: false,
            },
            {
              id: 5,
              name: "permission.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "src",
      isFolder: true,
      items: [],
    },
    {
      id: 7,
      name: "logs.txt",
      isFolder: false,
    },
  ],
};

export default data;
