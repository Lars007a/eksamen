import styles from "./statementsSec.module.css";
import bg from "../../assets/images/testimonial.png";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import quoteImg from "../../assets/icons/testimonials_apostrophy.png";
import 'swiper/css';
import "swiper/css/navigation";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import {useSendGetRequest} from "../../hooks/useSendRequest";
import Spinner from "../../comps/spinner/spinner.jsx";
import MsgBox from "../../comps/msgBox/MsgBox.jsx";
import StatementCard from "../StatementCard/StatementCard.jsx";


export default function StatementsSec({}) {

    const result = useSendGetRequest("reviews");


    return <section className={styles.sec} style={{"--pic": `url(${bg})`}}>
        <div className={`container`}>
            <div className={styles.content}>


                <header className={styles.intro}>
                    <h2 className={`smallTitle ${styles.subtitle}`}>Udtalelser</h2>
                    <h1>DET SIGER VORES KUNDER OM OS</h1>
                </header>


                {result.loading == true ? <Spinner margin centered={false}/> :
                result.error != null ? <MsgBox msg={result.error} margin centered={false}/> :


                
                
                <div className={styles.quoteSec}>
                    <img src={quoteImg} alt="" />



                    <div>
                    <Swiper slidesPerView={1} spaceBetween={50} modules={[Navigation]} navigation={{
                        clickable: true,
                        nextEl: `.${styles.nextEl}`,
                        prevEl: `.${styles.prevEl}`,
                    }}  breakpoints={{
                        800: {
                            slidesPerView: 1,
                        },
                    }} >
                        {
                            result.data && result.data.map((element) => {
                                return <SwiperSlide>
                                    <StatementCard obj={element} key={element._id}/>
                                    </SwiperSlide>
                            })
                        }

                    </Swiper>
                        <nav className={styles.navigation}>
                            <div><MdNavigateBefore/></div>
                            <div><MdNavigateNext/></div>
                        </nav>
                    </div>

                </div>
                }

            </div>

         </div>

    </section>
}