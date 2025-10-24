import styles from "./BlogAdmin.module.css";
import Table from "../table/table";
import { useEffect, useState } from "react";
import {useSendGetRequest, useSendDataRequest} from "../../../hooks/useSendRequest";
import Spinner from "../../spinner/spinner";
import MsgBox from "../../msgBox/MsgBox";
import { toast } from "react-toastify";
import { GrClose } from "react-icons/gr";

export default function BlogAdmin({}) {

    const sender = useSendDataRequest();
    
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(null);

    const deleteFunc = (id) => {
        if(!id) {
            toast.error("Skete en fejl. Prøv igen!");
            return;
        }

        sender.sendJson(`blog/${id}`, JSON.stringify({}), "DELETE").then((val) => {
            if(val.status != "ok") {
                throw new Error(val.message);
            }

            toast.success(`Fjernede: ${id}`);
            result.get("/blogs");
        }).catch((error) => {
            toast.error(error.message);
        })

    }

    const updateFunc = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
         if(!fd.get("title") || !fd.get("author") || !fd.get("content") || !fd.get("teaser") || !fd.get("id")) {
            toast.error("Fejl. Skal skrive ting ind i felterne!");
            return;
        }

        //billedet bliver automatisk taget med. Siden har rigtigt navn.

        
        sender.sendForm("blog", fd, "PUT").then((val) => {
            if(val.status != "ok") {
                throw new Error(val.message);
            }

            toast.success(`${fd.get("id")} blev opdateret!`);
            result.get("/blogs");
        }).catch((error) => {
            toast.error(error.message);
        })


    }

    const addFunc = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);

        if(!fd.get("title") || !fd.get("author") || !fd.get("content") || !fd.get("teaser")) {
            toast.error("Fejl. Skal skrive ting ind i felterne!");
            return;
        }

        //Filen bliver automatisk uploadet, siden en del af formdata fra event.currentTarget, 
        //Og har det rigtige name, som api'en godtager.

        


        sender.sendForm("blog", fd, "POST").then((val) => {
            if(val.status != "ok") {
                throw new Error(val.message);
            }

            toast.success("Oprettet!");
            result.get("/blogs");
        }).catch((error) => {
            toast.error(error.message);
        })
    }

    const result = useSendGetRequest("blogs");

    return <section className={`container ${styles.sec}`}>
        {result.loading && <Spinner centered whiteBackground/>}
        {result.error && <MsgBox centered msg={result.error}/>}
        {result.data && <Table ArrayToDisplay={result.data} updateFunc={setShowUpdate} deleteFunc={setShowDelete}/>}
        <div className={styles.addContainer}>
            <h1>Tilføj blogindlæg</h1>
            <form className={styles.add} onSubmit={addFunc}>
                <input type="text" placeholder="Title" name="title" />
                <input type="text" name="author" placeholder="Author" />
                <textarea name="teaser" placeholder="Teaser"></textarea>
                <textarea name="content" placeholder="Content"></textarea>
                <input type="file" name="image" />
                <input type="submit" value={"Tilføj"} />
            </form>
        </div>

        {showUpdate &&
        <div className={`${styles.updateCon} ${styles.popupCon}`}>
            <div className={`${styles.popupContent}`}>
                        <GrClose className={styles.close} onClick={() => {
                            setShowUpdate(null);
                        }}/>
            

            <h1>Update blogindlæg</h1>
            <form onSubmit={updateFunc}>
                <input type="text" name="id" placeholder="Id" defaultValue={showUpdate?._id} />
                <input type="text" placeholder="Title" name="title" defaultValue={showUpdate?.title} />
                <input type="text" name="author" placeholder="Author" defaultValue={showUpdate?.author}  />
                <textarea name="teaser" placeholder="Teaser" defaultValue={showUpdate?.teaser}></textarea>
                <textarea name="content" placeholder="Content" defaultValue={showUpdate?.content}></textarea>
                <input type="file" name="image" />
                <input type="submit" value={"Tilføj"} />
            </form>
            </div>
        </div>
        }


        {
            showDelete &&
            <div className={`${styles.deleteCon} ${styles.popupCon}`}>
                <div className={`${styles.popupContent}`}>

                    <article>
                        <header>
                            <p>Fjernelse af {showDelete._id}</p>
                            <GrClose onClick={() => {
                        setShowDelete(null);
                        }}/>
                        </header>
                        <p className={styles.mainText}>
                            Er du sikker på, at du ville fjerne <span>
                                
                                {showDelete._id}?
                                </span>
                        </p>
                        <footer>
                            <button onClick={() => {
                                deleteFunc(showDelete._id);
                                setShowDelete(null);
                            }}>Ja</button>
                            <button onClick={() => {
                                setShowDelete(null);
                            }}>Nej</button>
                        </footer>
                    </article>


                </div>
            </div>
        }
    </section>

}