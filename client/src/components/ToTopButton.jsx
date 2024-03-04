import "../App.css"
import {useState, useEffect} from "react";
const ToTopButton = () =>{
    conts [isScrolled, sdetIsScrolled] = useState(false);

    useEffect(() => {
        const handeScrolled = () => {
            sdetIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScrolle); 
        return () => {
            removeEventListener("scroll", handleScrolle);
        }   
    }, [])
    return(
        <>
            {isScrolled && (
                    <div className="toTop-btn" onClick={()=>{
                        window.scrollTo({top:0,behavior: "smooth"});
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 36 36">
                            <path fill="#fff" d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" class="clr-i-outline clr-i-outline-path-1"/>
                            <path fill="none" d="M0 0h36v36H0z"/>
                        </svg>
                    </div>
            )}
        </>
    )
}
export default ToTopButton;