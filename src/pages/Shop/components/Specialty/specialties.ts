import specialtyOne from "src/assets/specialties/1-specialty.jpg";
import specialtyTwo from "src/assets/specialties/2-specialty.jpg";
import specialtyThree from "src/assets/specialties/3-specialty.jpg";

// eslint-disable-next-line import/prefer-default-export
export const specialtiesArray: Array<{
  id: number;
  type: string;
  imageSrc: string;
  specialtyTitle: string;
  specialtyBody: string;
}> = [
  {
    id: 1,
    type: "pizza",
    imageSrc: String(specialtyOne),
    specialtyTitle: "Pizza",
    specialtyBody:
      "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis.",
  },
  {
    id: 2,
    type: "burger",
    imageSrc: String(specialtyTwo),
    specialtyTitle: "Burger",
    specialtyBody:
      "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis.",
  },
  {
    id: 3,
    type: "kebab",
    imageSrc: String(specialtyThree),
    specialtyTitle: "Kebab",
    specialtyBody:
      "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis.",
  },
];
