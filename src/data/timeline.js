import banner3 from "/assets/images/banner/3.jpg";
import horseAudio from "/assets/audio/horse.ogg";
import banner1 from "/assets/images/banner/1.jpg";


export const CarouselTimelineData = [
  { id: 1, image: "2.jpg" },
  { id: 2, image: "1.jpg" },
  { id: 3, image: "3.jpg" },
];

export const VerticalTimelineData = [
  {
    iconClass: "icon-pencil-alt",
    color: "primary",
    title: "Miami, FL",
    description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    date: "2022 - present",
  },
  {
    iconClass: "icon-youtube",
    color: "info",
    title: "San Francisco, CA",
    video: "https://www.youtube.com/embed/sqRk0Ly66Ps",
    date: "2018 - 2022",
  },
  {
    iconClass: "icon-image",
    color: "success",
    title: "Los Angeles, CA",
    image: banner1,
    date: "2017 - 2019",
  },
  {
    iconClass: "icon-pulse",
    color: "info",
    title: "San Francisco, CA",
    audio: horseAudio,
    date: "2017 - 2019",
  },
  {
    iconClass: "icon-image",
    color: "warning",
    title: "Online Course",
    image: banner3,
    date: "November 04 2024",
  },
  {
    iconClass: "icon-agenda",
    color: "danger",
    title: "Certification",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident
            rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
            veritatis qui ut.`,
    date: "December 31 2024",
  },
];
