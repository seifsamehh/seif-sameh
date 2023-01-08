import React from "react";
import { Helmet } from "react-helmet-async";
import me2 from "../../images/mee.webp";
import FooterAr from "../footerAr/FooterAr";
import HeaderAr from "../headerAr/HeaderAr";
import "./style/about-ar.css";

const AboutAr = () => {
  return (
    <>
      <Helmet>
        <title>عنى</title>
      </Helmet>
      <HeaderAr />
      <section className="about-ar-page">
        <div className="container">
          <div className="image">
            <img src={me2} alt="me" loading="lazy" />
          </div>
          <div className="about-content">
            <h1>من أنا &#x1F60A;؟</h1>
            <p>
              {" "}
              أهلاً! اسمي سيف الدين سامح. أنا مطور ويب. شغفي هو إنشاء مواقع ويب
              إبداعية تستجيب بشكل كامل لجميع الأجهزة. أعمل على تحقيق أعلى مستوى
              من التفاعل والإبداع مع المستخدمين
            </p>
          </div>
        </div>
      </section>
      <FooterAr />
    </>
  );
};

export default AboutAr;
