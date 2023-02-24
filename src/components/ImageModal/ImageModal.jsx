import React from "react";
import { useRef } from "react";
import cl from "./ImageModal.module.css"

function ImageModal({modalVisible, modalClose, modalTitle, url}) {

    const rootClasses = [cl.imagemodal];
    if (modalVisible) {
        rootClasses.push(cl.active)
    }

    const webIconDiv = useRef();
    function titleFocus() {
        webIconDiv.current.style.color = "#1a92c7"
        webIconDiv.current.style.textDecoration = "underline"
    }
    function titleUnfocus() {
        webIconDiv.current.style.color = "rgba(0, 0, 0, 0.8)"
        webIconDiv.current.style.textDecoration = "none"
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => modalClose()}>
            <div className={cl.modalheader}>
                <div className={cl.closebtn}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </div>
            </div>
            <div className={cl.modalcontent} onClick={e => e.stopPropagation()}>
                <img className={cl.modalimg} src={url} alt={'modalimage'} />
                <div className={cl.modaltitle}>
                    <div className={cl.modaltitletext}>
                        <a className={cl.titlelink}
                            ref={webIconDiv}
                            href={url}
                            onMouseOver={() => titleFocus()}
                            onMouseLeave={() => titleUnfocus()}
                        >
                            {modalTitle}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageModal;