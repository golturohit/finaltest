import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import BGShapeFour from "@/svg/bg_shape_4";
import RightArrow from "@/svg/right_arrow";
// choose banner shapes 
import choose_banner from "@/assets/img/banner/choose-2.png";
import choose_shape_1 from "@/assets/img/shape/choose-shape-1.png";
import choose_shape_2 from "@/assets/img/shape/choose-shape-2.png";
import choose_shape_3 from "@/assets/img/shape/choose-shape-3.png";
// choose fetures icon 
import choose_icno_1 from "@/assets/img/icon/choose-icon-1.png";
import choose_icno_2 from "@/assets/img/icon/choose-icon-2.png";
import choose_icno_3 from "@/assets/img/icon/choose-icon-3.png";
// choose data type
interface choose_content_type {
    sub_title: string;
    title: JSX.Element;
    sm_des: string;
    choose_features: {
        id: number;
        title: string;
        des: string;
    }[];
}
// choose content 
const choose_content: choose_content_type = {
    sub_title: "Why Choose us",
    title: <>What makes Us <br /> Different from Others</>,
    sm_des: "Migrating your rank tracking tool is like migrating from Google Analytics to another solution.",
    // choose features data
    choose_features: [
        {
            id: 1,
            des: "Increase in Website Organic Traffic",
            title: "10X"
        },
        {
            id: 2,
            des: "Increase in Quality Conversions",
            title: "5X"
        },
        {
            id: 3,
            des: "Growth on Social Media",
            title: "45%"
        },
        {
            id: 4,
            des: "Quality Conversions Through Social Media",
            title: "33%"
        },
        {
            id: 5,
            des: "Increase in Conversions Through Email",
            title: "18X"
        },
        {
            id: 6,
            des: "Higher Conversion for Local Business",
            title: "50%"
        }
    ],
}
const {sub_title, title, sm_des, choose_features} = choose_content


const ChooseAreaHomeOne = () => {

    return (
        <>
            <section className="choose-area tpchoose-bottom pb-80">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-5">
                        <div className="tpchoose-thumb mt-30 p-relative mb-50">
                            <Image className="tpchoose-border-anim" src={choose_banner} alt="theme-pure" />
                            <div className="tpchoose-shape">
                                <div className="tpchoose-shape-one d-none d-md-block">
                                    <Image src={choose_shape_1} alt="theme-pure" />
                                </div>
                                <div className="tpchoose-shape-two">
                                    <Image src={choose_shape_2} alt="theme-pure" />
                                </div>
                                <div className="tpchoose-shape-three">
                                    <Image src={choose_shape_3} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="tpchoose-wrapper mb-30">
                            <div className="tpsection__content mb-50">
                                <div className="tpbanner__sub-title mb-15">
                                <span>{sub_title}</span>
                                <i> <BGShapeFour /> </i>
                                </div>
                                <h2 className="tpsection__title mb-15">{title}</h2>
                                <p>{sm_des}</p>
                            </div>
                            <div className="row gx-6">
                                {choose_features.map((item, i) => 
                                     <div key={i} className="col-lg-4 col-md-4 col-sm-6">
                                            
                                            <div className="tpchoose-text">
                                                <span className="tpchoose-title">{item.title}</span>    
                                            </div>
                                            <div className="tpchoose-icon mb-25">
                                                <span>{item.des}</span>
                                            </div>
                                        
                                    </div> 
                                )}
                                <div className="tpheader__btn ml-25 d-none d-sm-block">
                                    <Link href="/contact" className="tp-header-btn">
                                    Get free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseAreaHomeOne;