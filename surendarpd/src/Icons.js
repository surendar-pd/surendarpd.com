import {React,useEffect,useState} from 'react';
import FadeIn from 'react-fade-in';


function Camera() {
    return (
        <lord-icon
            src="https://cdn.lordicon.com/vixtkkbk.json"
            trigger="loop"
            colors="primary:#CCD6F5,secondary:#30DFA3"
            stroke="27"
            scale="70"
            style={{width:'30px',height:'30px'}}>
        </lord-icon>
    )
}

function Code() {
    return (
        <lord-icon
            src="https://cdn.lordicon.com/dtgezzsi.json"
            trigger="loop"
            colors="primary:#30DFA3,secondary:#CCD6F5"
            stroke="27"
            scale="70"
            style={{width:'30px',height:'30px'}}>
        </lord-icon>
    )
}
function ArrowRight() {
    const [bottom, setBottom] = useState(false);
    const handleScroll = () => {
        var bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        setBottom(bottom)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
        passive: true
        });
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if(!bottom){
        return (
            <lord-icon
            onScroll={handleScroll}
                src="https://cdn.lordicon.com/qvzrpodt.json"
                trigger="loop"
                colors="primary:transparent,secondary:#30DFA3"
                stroke="27"
                scale="70"
                style={{width:'40px',height:'40px',position:'fixed',inset:'auto 50px 30px auto',transform:'rotate(90deg)'}}>
            </lord-icon>
        )
    }else{
        return (
            <lord-icon
                onScroll={handleScroll}
                src="https://cdn.lordicon.com/qvzrpodt.json"
                trigger="loop"
                colors="primary:transparent,secondary:#30DFA3"
                stroke="27"
                scale="70"
                style={{display:"none"}}>
            </lord-icon>
        )
    }
}
function ArrowLeft() {
    return (
        <lord-icon
            src="https://cdn.lordicon.com/qvzrpodt.json"
            trigger="loop"
            colors="primary:#30DFA3,secondary:transparent"
            stroke="27"
            scale="70"
            style={{width:'50px',height:'50px'}}>
        </lord-icon>
    )
}


export {
    Camera,
    Code,
    ArrowRight,
    ArrowLeft,
}
