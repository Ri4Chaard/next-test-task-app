export const TASK_STATUS = {
  TODO: "to-do",
  IN_PROGRESS: "in-progress",
  REVIEW: "review",
  COMPLETED: "completed",
} as const;

export const mockData = [
  {
    createdAt: "2025-05-28T19:55:05.786Z",
    title: "corporis convoco vir",
    description: "Accedo terga succedo.",
    status: "to-do",
    id: "1",
  },
  {
    createdAt: "2025-05-29T05:56:12.771Z",
    title: "eligendi cernuus pel",
    description:
      "Aedificium quisquam toties tonsor desino dolorem veritas toties cogito.",
    status: "to-do",
    id: "2",
  },
  {
    createdAt: "2025-05-28T20:08:01.502Z",
    title: "saepe turbo eos",
    description: "Ventus comitatus vesper facilis.",
    status: "to-do",
    id: "3",
  },
  {
    createdAt: "2025-05-29T12:21:02.324Z",
    title: "aestivus viscus colligo",
    description: "Ratione cado nesciunt minima cimentarius vomito tamen ultra.",
    status: "in-progress",
    id: "4",
  },
  {
    createdAt: "2025-05-28T20:57:24.396Z",
    title: "autem debitis cimentarius",
    description: "Tunc combibo decimus.",
    status: "in-progress",
    id: "5",
  },
  {
    createdAt: "2025-05-29T06:15:03.653Z",
    title: "accommodo bardus corrigo",
    description: "Laboriosam deputo adhuc collum deinde.",
    status: "review",
    id: "6",
  },
  {
    createdAt: "2025-05-29T02:46:17.268Z",
    title: "voluntarius cura cum",
    description: "Amo ullus territo pel quia dens suggero approbo.",
    status: "review",
    id: "7",
  },
  {
    createdAt: "2025-05-29T12:41:24.387Z",
    title: "ipsum culpo contabesco",
    description: "Strenuus adhaero ter statua campana attonbitus tui.",
    status: "review",
    id: "8",
  },
  {
    createdAt: "2025-05-28T22:47:43.293Z",
    title: "desino tremo desino",
    description: "Capio ustulo contigo.",
    status: "completed",
    id: "9",
  },
];
