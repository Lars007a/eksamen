import styles from "./exercises.module.css";
import 'swiper/css';
import "swiper/css/navigation";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSendGetRequest } from "../../hooks/useSendRequest";
import Spinner from "../spinner/spinner";
import MsgBox from "../msgBox/MsgBox";

export default function Exercises({}) {

    const result = useSendGetRequest("exercises");



    return <section className={styles.sec}>
        <header className={`container`}>
            <h2 className="smallTitle">Dette tilbyder vi</h2>
            <h1>Vi tilbyder eksklusive øvelser</h1>
        </header>

        <div className={`${styles.content} container`}>

            {result.loading && <Spinner centered margin whiteBackground/>}
            {result.error ? <MsgBox centered margin msg={result.error}/>
            
        :(<>
            <Swiper slidesPerView={1} className={styles.slide} spaceBetween={50} modules={[Navigation]} /* slideClass={`${styles.slider}`} */ navigation={{
                clickable: true,
                nextEl: `.${styles.nextEl}`,
                prevEl: `.${styles.prevEl}`,
            }}  breakpoints={{
                800: {
                    slidesPerView: 3,
                },
            }} >
                
                {result.data &&
                
                result.data.map((element) => {
                    return <SwiperSlide key={element._id}>
                        <article className={styles.card}>
                            <header>
                                <img src={element.image} alt={`Billed for ${element.title}`} />
                                <h2>{element.title}</h2>
                            </header>

                            <p>{element.teaser}</p>
                        </article>
                    </SwiperSlide>
                })
                
                }



            </Swiper>


            <nav className={styles.navigation}>
                <div className={styles.prevEl}><MdNavigateBefore/></div>
                <div className={styles.nextEl}><MdNavigateNext/></div>
            </nav>
            </>
            )}
        </div>
    </section>
}