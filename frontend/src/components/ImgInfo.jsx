import React, {useState} from "react";

export default function ImgInfo(){
    const [selectedSrc, setSelectedSrc] = useState("https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?uid=R179931391&ga=GA1.1.101214978.1730494257&semt=ais_hybrid&w=740");

    function handleClick(e){
        setSelectedSrc(e.currentTarget.src);
    }

    return(<>
        <div className="detail-image-container">
            <div className="image">
                <img src={selectedSrc} alt="NEwatch" />
            </div>
            <div class="carousel">
                <div><img 
                    src='https://pngimg.com/d/watches_PNG9868.png' 
                    alt="NEwatch" 
                    onClick={handleClick}
                /></div>
                <div><img 
                    src='https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?uid=R179931391&ga=GA1.1.101214978.1730494257&semt=ais_hybrid&w=740' 
                    alt="NEwatch" 
                    onClick={handleClick}
                /></div>
                <div><img 
                    src='https://pngimg.com/d/watches_PNG9885.png' 
                    alt="NEwatch"  
                    onClick={handleClick}
                /></div>
                <div><img 
                    src='https://www.transparentpng.com/download/watch/yBzv8m-classic-watch-hd-images-.png' 
                    alt="NEwatch"  
                    onClick={handleClick}
                /></div>
            </div>
        </div>
    </>)
}