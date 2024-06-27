const data = {
  id: Date.now(),
  title: "root",
  isFolder: true,
  items: [
    {
      id: Date.now(),
      title: "public",
      isFolder: true,
      items: [
        {
          id: Date.now(),
          title: "usr",
          isFolder: true,
          items: [
            {
              id: Date.now(),
              title: "profile.txt",
              isFolder: false,
            },
            {
              id: Date.now(),
              title: "permission.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: Date.now(),
      title: "src",
      isFolder: true,
      items: [],
    },
    {
      id: Date.now(),
      title: "logs.txt",
      isFolder: false,
    },
  ],
};

export default data;
