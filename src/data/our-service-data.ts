import { StaticImageData } from "next/image";
import service_icon_1 from "@/assets/img/services/services-1-icon-1.png";
import service_icon_2 from "@/assets/img/services/services-1-icon-2.png";
import service_icon_3 from "@/assets/img/services/services-1-icon-3.png";
import service_icon_4 from "@/assets/img/services/services-1-icon-4.png";
import service_icon_5 from "@/assets/img/services/services-1-icon-5.png";
import service_icon_6 from "@/assets/img/services/services-1-icon-6.png";

interface our_service_data_type {
  id: number;
  img: StaticImageData;
  category: string;
  title: string;
}

const our_service_data: our_service_data_type[] = [
  {
    id: 1,
    img: service_icon_1,
    category: "Social Marketing",
    title: "Social Media Marketing has become an integral part of the social strategy for business across industries. We provide digitally top-notch quality and targeted social media strategy which impact business growth through social media advertising and help you achieve your goals.",
  },
  {
    id: 2,
    img: service_icon_2,
    category: "Email Marketing",
    title: "Email Marketing is all about communicating, building customer loyalty, expand business reach and connect with different audiences. Our expert Email Marketing team promotes sales, builds relationships, and supports a wide range of marketing initiatives.",
  },
  {
    id: 3,
    img: service_icon_3,
    category: "SMM Services",
    title: "Building a social presence is important and necessary but managing, optimising, growing and engaging with audiences is a hectic work our expert social media team are passionate and experienced in optimising and managing.",
  },
  {
    id: 4,
    img: service_icon_4,
    category: "SEM Services",
    title: "SEM is Search Engine Marketing you are paying for ads, our expert PPC team increases your leads, increase your revenue, and help your business get traffic faster and rank your page on the top of a search engine.",
  },
  {
    id: 5,
    img: service_icon_5,
    category: "SEO Services",
    title: "We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our unique and best practices of blend technical and creative expertise in SEO.",
  },
  {
    id: 6,
    img: service_icon_6,
    category: "Web Developement",
    title: "Web development services support the creation of all varieties of web-based software and provide a positive online experience. In order to achieve high conversion and adoption rates, Improve Digitally professionally design, develop and provides continuous support for customer-facing and enterprise web apps.",
  },
];

export default our_service_data;
