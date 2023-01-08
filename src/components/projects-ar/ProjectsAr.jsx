import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Helmet } from 'react-helmet-async';
import one from '../../videos/one.webm'
import two from '../../videos/two.webm'
import three from '../../videos/three.webm'
import four from '../../videos/four.webm'
import five from '../../videos/six.webm'
import six from '../../videos/five.webm'
import seven from '../../videos/seven.webm'
import eight from '../../videos/eight.webm'
import './style/projects-ar.css'
import HeaderAr from '../headerAr/HeaderAr';
import FooterAr from '../footerAr/FooterAr';

const ProjectsAr = () => {
  return (
    <>
    <Helmet>
        <title>مشاريعى</title>
    </Helmet>
    <HeaderAr/>
    <section className="projects-ar-page">
        <div className="projects">
            <div className="project-1">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={one} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>شركة للعلامات التجارية ، نقدم إستراتيجية العلامة التجارية ، وتصميم الجرافيك ، وتصميم الشعار ، والهوية ، والتعبئة ، والكتيبات ، والرسومات المتحركة ، وتصميم مواقع الويب ، وتطوير الويب</p>
                        <div className="buttons">
                            <a href="https://www.exceptiondesigns.com/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-2">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>من المتوقع أن يؤدي تغير المناخ إلى تفاقم الظواهر المتطرفة المرتبطة بالحرارة والتي تؤثر على صحة الإنسان والنظم البيئية والإيكولوجية. إن تأثيرات تغير المناخ واضحة بالفعل في مصر والعالم</p>
                        <div className="buttons">
                            <a href="https://green-army.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={two} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-3">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={three} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>نضع القوة بين يديك من خلال واجهات برمجة التطبيقات سهلة الاستخدام التي يمكنك استخدامها لإبهار المستخدمين بتجارب تشفير بسيطة وآمنة</p>
                        <div className="buttons">
                            <a href="https://wyre-ten.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-4">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>الموقع يتحدث عن الذهب و صناعته و كل شىء عنه</p>
                        <div className="buttons">
                            <a href="https://argor.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={four} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-5">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={five} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>تأسس من قبل طلاب علوم الكمبيوتر فى معاهد العبور لمساعدة الطلاب
و سوف تتم تلك المساعدة عن طريق الأحداث و ورش العمل و الجلسات و الأنشطة الطلابية</p>
                        <div className="buttons">
                            <a href="https://ieee-community.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-6">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>بجودة فائقة من خلال فريق عمل من المهندسين والفنيين الذين تزيد خبرتهم عن ثلاثين عامًا في المجالات السابقة من بداية عام 1996 حتى الآن ، ويسعدنا خدمتك بالعمل الممتد إلى جميع محافظات مصر والدول العربية ، ونحن أيضًا لدينا القدرة على تصنيع جميع أعمال الأساسات بأحدث التقنيات</p>
                        <div className="buttons">
                            <a href="https://final-touch-seven.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={six} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="project-7">
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={seven} type="video/webm" />
                    </video>
                </div>
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>مدمنو الأحذية الرياضية ليسوا مجرد علامة تجارية. إنها ليست مجرد مجموعة. ولد من فكر علي داود - نحن نصنع أكبر مجتمع للأحذية الرياضية على الويب
                        </p>
                        <div className="buttons">
                            <a href="https://sneakers-mauve-beta.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="project-8">
                <Parallax translateY={["-200px","200px"]}>
                    <div className="right">
                        <p>موقع سيارات يخدم الأشخاص الذين يمكنك حجز سيارتك والذهاب إلى أي مكان تريده</p>
                        <div className="buttons">
                            <a href="https://carr-go.vercel.app/" target="_blank">
                                <button className="cssbuttons-io-button"> لزيارة الموقع
                                    <div className="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </Parallax>
                <div className="left">
                    <video muted loop autoPlay>
                        <source src={eight} type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    </section>
    <FooterAr/>
    </>
  )
}

export default ProjectsAr