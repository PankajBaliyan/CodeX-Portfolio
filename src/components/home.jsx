import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/react';
import brandLeetcode from '@iconify/icons-tabler/brand-leetcode';
import geeksforgeeksIcon from '@iconify/icons-simple-icons/geeksforgeeks';

export default function Home(props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className="about-area">
            <div className="container">
                <div
                    data-elementor-type="wp-page"
                    data-elementor-id="13"
                    className="elementor elementor-13"
                >
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-5ed44d6 row elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="5ed44d6"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-no">
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-54cd859 col-md-6"
                                data-id="54cd859"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-c4f5752 elementor-widget elementor-widget-gridxdaaboutme"
                                        data-id="c4f5752"
                                        data-element_type="widget"
                                        data-widget_type="gridxdaaboutme.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div
                                                data-aos="zoom-in"
                                                className="about-me-box-wrap"
                                            >
                                                <div className="about-me-box shadow-box">
                                                    <Link
                                                        className="overlay-link"
                                                        to="/about"
                                                    ></Link>

                                                    <div className="img-box">
                                                        <img
                                                            decoding="async"
                                                            src="/assets/images/me1.jpg"
                                                            alt="About Me"
                                                        />
                                                    </div>
                                                    <div className="infos">
                                                        <h4>
                                                            A MERN STACK
                                                            DEVELOPER
                                                        </h4>
                                                        <h1>Pankaj Kumar</h1>
                                                        I'm a web developer who
                                                        loves coding and pixels.
                                                        As a web developer, I
                                                        create amazing web pages
                                                        and utilize web
                                                        technologies.{' '}
                                                        <Link
                                                            to="/about"
                                                            className="about-btn"
                                                        >
                                                            <img
                                                                decoding="async"
                                                                src="/assets/images/icon-2.svg"
                                                                alt="Button"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8c406e0 col-md-6"
                                data-id="8c406e0"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-79a19dc elementor-widget elementor-widget-gridxdafeaturedbox"
                                        data-id="79a19dc"
                                        data-element_type="widget"
                                        data-widget_type="gridxdafeaturedbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="about-credentials-wrap">
                                                <div data-aos="zoom-in">
                                                    <div className="banner shadow-box">
                                                        <div className="marquee">
                                                            <div>
                                                                <span>
                                                                    - 🚀{' '}
                                                                    <b>
                                                                        MERN
                                                                        stack
                                                                        developer
                                                                    </b>
                                                                    &nbsp; with
                                                                    3 years'
                                                                    experience.
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/star1.svg"
                                                                        alt="Star"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    👥 &nbsp;
                                                                    <b>
                                                                        Collaborate
                                                                    </b>
                                                                    &nbsp; with
                                                                    diverse
                                                                    companies
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/star1.svg"
                                                                        alt="Star"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    🛠️{' '}
                                                                    <b>
                                                                        Utilize
                                                                    </b>
                                                                    &nbsp;
                                                                    technologies
                                                                    like NodeJS,
                                                                    ReactJS, and
                                                                    Svelte.
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/star1.svg"
                                                                        alt="Star"
                                                                    />
                                                                </span>
                                                                <span>
                                                                    📚&nbsp;
                                                                    <b>
                                                                        Passionate
                                                                    </b>
                                                                    &nbsp; about
                                                                    staying
                                                                    updated with
                                                                    the latest
                                                                    industry
                                                                    trends.
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/star1.svg"
                                                                        alt="Star"
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <section
                                        className="elementor-section elementor-inner-section elementor-element elementor-element-1130d0e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                        data-id="1130d0e"
                                        data-element_type="section"
                                    >
                                        <div className="elementor-container elementor-column-gap-no">
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cd3cb20"
                                                data-id="cd3cb20"
                                                data-element_type="column"
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-bdc73c3 elementor-widget elementor-widget-gridxdacredentialbox"
                                                        data-id="bdc73c3"
                                                        data-element_type="widget"
                                                        data-widget_type="gridxdacredentialbox.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div
                                                                data-aos="zoom-in"
                                                                className="about-crenditials-box"
                                                            >
                                                                <div className="info-box shadow-box h-full">
                                                                    <Link
                                                                        className="overlay-link"
                                                                        to="/credentials"
                                                                    ></Link>

                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/sign.png"
                                                                        alt="Sign"
                                                                        className="imgauto"
                                                                    />
                                                                    <div className="d-flex mt-53 align-items-center justify-content-between mt-26">
                                                                        <div className="infos infos1">
                                                                            <h4>
                                                                                MORE
                                                                                ABOUT
                                                                                ME
                                                                            </h4>
                                                                            <h1>
                                                                                Credentials
                                                                            </h1>
                                                                        </div>

                                                                        <Link
                                                                            to="/credentials"
                                                                            className="about-btn"
                                                                        >
                                                                            <img
                                                                                decoding="async"
                                                                                src="/assets/images/icon-2.svg"
                                                                                alt="Button"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d1ad012"
                                                data-id="d1ad012"
                                                data-element_type="column"
                                            >
                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div
                                                        className="elementor-element elementor-element-505fe86 elementor-widget elementor-widget-gridxdaprojectbox"
                                                        data-id="505fe86"
                                                        data-element_type="widget"
                                                        data-widget_type="gridxdaprojectbox.default"
                                                    >
                                                        <div className="elementor-widget-container">
                                                            <div
                                                                data-aos="zoom-in"
                                                                className="about-project-box"
                                                            >
                                                                <div className="info-box shadow-box h-full">
                                                                    <Link
                                                                        className="overlay-link"
                                                                        to="/project"
                                                                    ></Link>

                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/uploads/2023/04/my-works.png"
                                                                        alt="My Works"
                                                                        className="imgauto"
                                                                    />
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="infos">
                                                                            <h4>
                                                                                SHOWCASE
                                                                            </h4>
                                                                            <h1>
                                                                                Projects
                                                                            </h1>
                                                                        </div>

                                                                        <Link
                                                                            to="/project"
                                                                            className="about-btn"
                                                                        >
                                                                            <img
                                                                                decoding="async"
                                                                                src="/assets/images/icon-2.svg"
                                                                                alt="Button"
                                                                            />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-033fafe row mt-24  elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="033fafe"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-no">
                            <div
                                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-dc60a93"
                                data-id="dc60a93"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-6ab9773 elementor-widget elementor-widget-gridxdablogbox"
                                        data-id="6ab9773"
                                        data-element_type="widget"
                                        data-widget_type="gridxdablogbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="col-md-12">
                                                <div className="blog-service-profile-wrap">
                                                    <div
                                                        data-aos="zoom-in"
                                                        className="about-profile-box-wrap"
                                                    >
                                                        <div className="about-profile-box info-box shadow-box h-full">
                                                            <div className="inner-profile-icons shadow-box">
                                                                <Link to="https://leetcode.com/pankajkumar90/">
                                                                    <Icon
                                                                        icon={
                                                                            brandLeetcode
                                                                        }
                                                                        color="#5b78f6"
                                                                        width="32"
                                                                    />
                                                                </Link>

                                                                <Link to="https://auth.geeksforgeeks.org/user/im_pankaj/practice/">
                                                                    <Icon
                                                                        icon={
                                                                            geeksforgeeksIcon
                                                                        }
                                                                        color="#5b78f6"
                                                                        width="32"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="infos">
                                                                    <h4>
                                                                        Coding
                                                                    </h4>
                                                                    <h1>
                                                                        Profiles
                                                                    </h1>
                                                                </div>

                                                                <Link
                                                                    to="/contact"
                                                                    className="about-btn"
                                                                >
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/icon-2.svg"
                                                                        alt="Button"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-524805c"
                                data-id="524805c"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-39b9567 elementor-widget elementor-widget-gridxdaservicesbox"
                                        data-id="39b9567"
                                        data-element_type="widget"
                                        data-widget_type="gridxdaservicesbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="col-md-12">
                                                <div className="blog-service-profile-wrap d-flex gap-24">
                                                    <div
                                                        data-aos="zoom-in"
                                                        className="flex-1 about-services-box-wrap"
                                                    >
                                                        <div className="about-services-box info-box shadow-box h-full">
                                                            <Link
                                                                to="/service"
                                                                className="overlay-link"
                                                            ></Link>
                                                            <div className="icon-boxes">
                                                                <i className="iconoir-code"></i>

                                                                <i className="iconoir-search"></i>

                                                                <i className="iconoir-accessibility"></i>

                                                                <i className="iconoir-computer"></i>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="infos">
                                                                    <h4>
                                                                        SPECIALIZATION
                                                                    </h4>
                                                                    <h1>
                                                                        Services
                                                                        Offering
                                                                    </h1>
                                                                </div>

                                                                <Link
                                                                    to="/service"
                                                                    className="about-btn"
                                                                >
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/icon-2.svg"
                                                                        alt="Button"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-386b9dc"
                                data-id="386b9dc"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-d02c9cb elementor-widget elementor-widget-gridxdaprofilesbox"
                                        data-id="d02c9cb"
                                        data-element_type="widget"
                                        data-widget_type="gridxdaprofilesbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="col-md-12">
                                                <div className="blog-service-profile-wrap">
                                                    <div
                                                        data-aos="zoom-in"
                                                        className="about-profile-box-wrap"
                                                    >
                                                        <div className="about-profile-box info-box shadow-box h-full">
                                                            <div className="inner-profile-icons shadow-box">
                                                                <Link
                                                                    to="https://www.linkedin.com/in/pankaj-kumar-90"
                                                                    target="_blank"
                                                                >
                                                                    <i className="iconoir-linkedin"></i>
                                                                </Link>

                                                                <Link
                                                                    to="https://github.com/pankajbaliyan"
                                                                    target="_blank"
                                                                >
                                                                    <i className="iconoir-github"></i>
                                                                </Link>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="infos">
                                                                    <h4>
                                                                        Social
                                                                    </h4>
                                                                    <h1>
                                                                        Profiles
                                                                    </h1>
                                                                </div>

                                                                <Link
                                                                    to="/contact"
                                                                    className="about-btn"
                                                                >
                                                                    <img
                                                                        decoding="async"
                                                                        src="/assets/images/icon-2.svg"
                                                                        alt="Button"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-1588901 row mt-24  elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="1588901"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-no">
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1616496 col-md-6"
                                data-id="1616496"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-b27321e elementor-widget elementor-widget-gridxdaclientbox"
                                        data-id="b27321e"
                                        data-element_type="widget"
                                        data-widget_type="gridxdaclientbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div
                                                data-aos="zoom-in"
                                                className="about-client-box-wrap"
                                            >
                                                <div className="about-client-box info-box shadow-box">
                                                    <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                                        <div className="client-item">
                                                            <h1>03</h1>
                                                            <p>
                                                                Years <br />
                                                                Experience
                                                            </p>
                                                        </div>
                                                        <div className="client-item">
                                                            <h1>45+</h1>
                                                            <p>
                                                                Github <br />
                                                                Repositories
                                                            </p>
                                                        </div>
                                                        <div className="client-item">
                                                            <h1>20+</h1>
                                                            <p>
                                                                Total <br />
                                                                Projects
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e314706 col-md-6"
                                data-id="e314706"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-b0e85ec elementor-widget elementor-widget-gridxdacontactbox"
                                        data-id="b0e85ec"
                                        data-element_type="widget"
                                        data-widget_type="gridxdacontactbox.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div
                                                data-aos="zoom-in"
                                                className="about-contact-box-wrap"
                                            >
                                                <div className="about-contact-box info-box shadow-box">
                                                    <Link
                                                        to="/contact"
                                                        className="overlay-link"
                                                    ></Link>

                                                    <img
                                                        decoding="async"
                                                        src="/assets/images/icon2-2.png"
                                                        alt="Icon"
                                                        className="star-icon"
                                                    />

                                                    <h1>
                                                        Let's <br />
                                                        work{' '}
                                                        <span>together.</span>
                                                    </h1>
                                                    <Link
                                                        className="about-btn"
                                                        to="/contact"
                                                    >
                                                        <img
                                                            decoding="async"
                                                            src="/assets/images/icon-2.svg"
                                                            alt="Button"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
