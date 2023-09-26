import Link from "next/link";
import Image from "next/image";
import Logo from "@/svg/logo/logo.png";
import SubscribeForm from "@/components/forms/SubscribeForm";
import SocialLinks, { CopyRight } from "@/components/common/social-links";

// fooert
interface footer_content_type {
  footer_info: JSX.Element;
  newsletter: string;
  footer_links: {
    id: number;
    title: string;
    links: {
      title: string;
      link: string;
    }[];
  }[];
}

const footer_content: footer_content_type = {
  footer_info: <> Jamia Nagar, Okhla<br /> South Delhi, Delhi <br /> Pin-110025 </>,
  newsletter: "Our conversation is just getting started",
  footer_links: [
    {
      id: 1,
      title: "Services",
      links: [
        { title: "Digital Marketing", link: "/" },
        { title: "Web Developement", link: "/about" },
        { title: "SEO Services", link: "/project" },
        { title: "UI/UX Design", link: "/price" },
        { title: "Copywriting", link: "/blog" },
        { title: "Google Aids", link: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Resourses",
      links: [
        { title: "Case Studies", link: "#" },
        { title: "Consulting Services", link: "#" },
        { title: "Testimonials", link: "#" },
        { title: "FAQ", link: "#" },
        { title: "Blog", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Company",
      links: [
        { title: "About Us", link: "#" },
        { title: "Portfolio", link: "#" },
        { title: "Partner with Us", link: "#" },
        { title: "Career", link: "#" },
        { title: "Contact Us", link: "#" },
      ],
    },
  ],
};
const { footer_info, newsletter, footer_links } = footer_content;

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area pt-100">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-col-1 mb-40">
                    <div className="footer-widget-logo mb-20">
                      
                        <Image src={Logo} />
                      
                    </div>
                    <div className="footer-widget-content">
                      <p className="footer-widget-text mb-20">{footer_info}</p>
                      <div className="footer-widget-social">
                        <span>Follow Us On</span>
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
                {footer_links.map((item, i) => (
                  <div key={i} className="col-lg-2 col-md-6">
                    <div className="footer-widget footer-col-2 mb-40">
                      <h4 className="footer-widget-title mb-15">
                        {item.title}
                      </h4>
                      <div className="footer-widget-link">
                        <ul>
                          {item.links?.map((link, index) => (
                            <li key={index}>
                              <Link href={link.link}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-col-4 mb-40">
                    <h4 className="footer-widget-title mb-20">Subcribe.</h4>
                    <div className="footer-widget-newsletter">
                      <p>{newsletter}</p>
                      <SubscribeForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer-widget-copyright text-center">
                    <span> 
                      <CopyRight /> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
