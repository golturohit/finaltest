import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/improvedigitally",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "https://twitter.com/improvedigi",
    target: "_blank",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.linkedin.com/company/improvedigitally/",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "https://pinterest.com/improvedigitally/",
    target: "_blank",
    icon: "fab fa-pinterest", 
  },
  {
    link: "https://www.instagram.com/improvedigitally/",
    target: "_blank",
    icon: "fab fa-instagram", 
  },
  {
    link: "https://www.youtube.com/channel/UCzyiIoSgeEwb_hd1MeXQj4g",
    target: "_blank",
    icon: "fab fa-youtube", 
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}


const social_links_2: social_links_type_2[] = [
  {
    link: "http://facebook.com",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f", 
  },
  {
    link: "http://twitter.com",
    color: "",
    icon: "fa-brands fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in", 
  }, 
  {
    link: "https://www.instagram.com",
    color: "footer-insta",
    icon: "fa-brands fa-instagram", 
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};


 

// team social links
interface team_social_links_type {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: team_social_links_type[] = [
  {
    id: 1, 
    link:"http://facebook.com",
    icon: "fa-brands fa-facebook-f",
  },
  {
    id: 2, 
    link:"http://twitter.com",
    icon: "fa-brands fa-twitter",
  },
  {
    id: 3, 
    link:"http://linkedin.com",
    icon: "fa-brands fa-linkedin-in",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link} 
          target="_blank">
          <i className={t_item.icon}></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type =  {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>  Copyright © 2022 Improve Digitally
                  <Link target="_blank" href="https://themeforest.net/user/theme_pure/portfolio"> Improve Digitally. </Link> 
              </>,
}

const {copy_right}  = copy_right_text
export const CopyRight = ()  => {
  return (
    <> {copy_right}</>
  )
}


