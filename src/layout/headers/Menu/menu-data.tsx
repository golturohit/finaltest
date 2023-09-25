import { StaticImageData } from "next/image";
import RightArrowMenu from "@/svg/home-1/RightArrowMenu";
// home demo
import home_demo_1 from "@/assets/img/menu/home-1.jpg";
import home_demo_2 from "@/assets/img/menu/home-2.jpg";
import home_demo_3 from "@/assets/img/menu/home-3.jpg";
import home_demo_4 from "@/assets/img/menu/home-4.jpg";
import home_demo_5 from "@/assets/img/menu/home-5.jpg";
// service deme 
import service_demo_1 from "@/assets/img/header-icon/keyword.png";
import service_demo_2 from "@/assets/img/header-icon/audit.png";
import service_demo_3 from "@/assets/img/header-icon/building.png";
import service_demo_4 from "@/assets/img/header-icon/media.png";
import service_demo_5 from "@/assets/img/header-icon/analysis.png";

import menu_banner from "@/assets/img/header-icon/header-banner/header-banner-1.png";
 
// type MenuData =  
interface menu_data_type  {
  id: number;
  title: string;
  link: string;
  has_dropdown?: boolean;
  has_megamenu?: boolean;  
  img_dropdown?: boolean;  
  service_dropdown?: boolean;  
  blog_dropdown?: boolean;  
  sub_menus?: {
      link?: string | any;
      title?: string;
      demo_img?: StaticImageData | any ; 
      layout?: {
        link: string;
        title: string;
      }[];
  }[];
  banner_sub_title?: string;
  banner_title?: JSX.Element;
  inner_title?: string;
  icon?: JSX.Element;
  m_banner?: StaticImageData;
}

// menu data 
const menu_data: menu_data_type[] = [
  {
    id: 1,
    title: "Organic Growth",
    link: "#",
    has_dropdown: true,
    has_megamenu: true,
    sub_menus: [
      {  
      layout: [
          { link: "/#",                 title: "SEO Services" }, 
          { link: "/service",               title: "SEO Audit" }, 
          { link: "/team",                  title: "Local SEO" }, 
          { link: "/team-details",          title: "National SEO" }, 
          { link: "/sign-in",               title: "International SEO" }, 
          { link: "/sign-out",              title: "Technical SEO" }, 
          { link: "/sign-out",              title: "E-Commerce SEO" },
          { link: "/sign-out",              title: "Enterprise SEO" },
        ],
      },
      {  
        layout: [
            { link: "/pricing",            title: "WordPress SEO" },  
            { link: "/portfolio",          title: "Squarespace SEO" },  
            { link: "/portfolio-2",        title: "Wix SEO" },  
          ],
      },
      {  
        layout: [
            { link: "/blog-list",          title: "Social Media Optimization" },  
            { link: "/blog-details",       title: "Facebook Management" },  
            { link: "/blog-details-2",     title: "Instagram Management" },  
            { link: "/faq",                title: "Twitter Management" },  
            { link: "/contact",            title: "LinkedIn Management" },
            { link: "/contact",            title: "Pinterest Management" },    
          ],
      }, 
      {  
        layout: [
            { link: "/blog-list",          title: "YouTube SEO" },  
            { link: "/blog-details",       title: "YouTube Management" },  
            
          ],
      }, 
    ],
  },
  
  {
    id: 2,
    title: "Website Advertising",
    link: "#",
    has_dropdown: true,
    has_megamenu: true,
    sub_menus: [
      {  
      layout: [
          { link: "/about",                 title: "Search Engine Marketing" }, 
          { link: "/service",               title: "PPC Advertising" }, 
          { link: "/team",                  title: "Google Ads" }, 
          { link: "/team-details",          title: "Amazon Ads" }, 
          { link: "/sign-in",               title: "Shoping Ads" }, 
          { link: "/sign-out",              title: "Video Ads" }, 
          { link: "/sign-out",              title: "Remarketing Advertising" },
        ],
      },
      {  
        layout: [
            { link: "/pricing",            title: "Social Media Marketing" },  
            { link: "/portfolio",          title: "Facebook Ads" },  
            { link: "/portfolio-2",        title: "Instagram Ads" },  
            { link: "/portfolio-details",  title: "Twitter Ads" },  
            { link: "/blog-grid",          title: "LinkedIn Ads" },  
            { link: "/blog-masonry",       title: "Pinterest Ads" },
            { link: "/blog-masonry",       title: "YouTube Ads" },  
          ],
      },
      {  
        layout: [
            { link: "/blog-list",          title: "Email Marketing Services" },  
            { link: "/blog-details",       title: "Mailchimp Email Marketing" },  
            { link: "/blog-details-2",     title: "HubSpot Email Marketing" },  
            { link: "/faq",                title: "AWeber Email Marketing" },  
            { link: "/contact",            title: "ConvertKit Email Marketing" },
            { link: "/contact",            title: "Sendinblue Email Marketing" },
            { link: "/contact",            title: "ActiveCampaign Email Marketing" },  
          ],
      }, 
      {  
        layout: [
            { link: "/blog-list",          title: "Content Writing" },  
            { link: "/blog-details",       title: "Copywriting" },  
          ],
      }, 
    ],
  },
  {
    id: 3,
    title: "Website Development",
    link: "#",
    has_dropdown: true,
    has_megamenu: true,
    sub_menus: [
      {  
      layout: [
          { link: "/about",                 title: "About Us" }, 
          { link: "/service",               title: "Services" }, 
          { link: "/team",                  title: "Team Member" }, 
          { link: "/team-details",          title: "Team Details" }, 
          { link: "/sign-in",               title: "Sign In" }, 
          { link: "/sign-out",              title: "Sign Up" }, 
        ],
      },
      {  
        layout: [
            { link: "/pricing",            title: "Pricing" },  
            { link: "/portfolio",          title: "Case Studies 2 Columns" },  
            { link: "/portfolio-2",        title: "Case Studies 3 Columns" },  
            { link: "/portfolio-details",  title: "Case Studies Details" },  
            { link: "/blog-grid",          title: "Blog Grid" },  
            { link: "/blog-masonry",       title: "Blog Masonry" },  
          ],
      },
      {  
        layout: [
            { link: "/blog-list",          title: "Blog List" },  
            { link: "/blog-details",       title: "Blog Details" },  
            { link: "/blog-details-2",     title: "Blog Details Full Width" },  
            { link: "/faq",                title: "FAQ" },  
            { link: "/contact",            title: "Contact" },  
          ],
      }, 
      {  
        layout: [
            { link: "/blog-list",          title: "Blog List" },  
            { link: "/blog-details",       title: "Blog Details" },  
            { link: "/blog-details-2",     title: "Blog Details Full Width" },  
            { link: "/faq",                title: "FAQ" },  
            { link: "/contact",            title: "Contact" },  
          ],
      }, 
    ],
  },

  {
    id: 4,
    title: "Company",
    link: "#",
    has_dropdown: true,
    has_megamenu: true,
    sub_menus: [
      {  
      layout: [
          { link: "/about",                 title: "About Us" }, 
          { link: "/service",               title: "Services" }, 
          { link: "/team",                  title: "Team Member" }, 
          { link: "/team-details",          title: "Team Details" }, 
          { link: "/sign-in",               title: "Sign In" }, 
          { link: "/sign-out",              title: "Sign Up" }, 
        ],
      },
      {  
        layout: [
            { link: "/pricing",            title: "Pricing" },  
            { link: "/portfolio",          title: "Case Studies 2 Columns" },  
            { link: "/portfolio-2",        title: "Case Studies 3 Columns" },  
            { link: "/portfolio-details",  title: "Case Studies Details" },  
            { link: "/blog-grid",          title: "Blog Grid" },  
            { link: "/blog-masonry",       title: "Blog Masonry" },  
          ],
      },
      {  
        layout: [
            { link: "/blog-list",          title: "Blog List" },  
            { link: "/blog-details",       title: "Blog Details" },  
            { link: "/blog-details-2",     title: "Blog Details Full Width" },  
            { link: "/faq",                title: "FAQ" },  
            { link: "/contact",            title: "Contact" },  
          ],
      }, 
      {  
        layout: [
            { link: "/blog-list",          title: "Blog List" },  
            { link: "/blog-details",       title: "Blog Details" },  
            { link: "/blog-details-2",     title: "Blog Details Full Width" },  
            { link: "/faq",                title: "FAQ" },  
            { link: "/contact",            title: "Contact" },  
          ],
      }, 
    ],
  },

  ];
export default menu_data;
