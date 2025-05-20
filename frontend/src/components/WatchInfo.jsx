import React, {useState} from "react";
import watches from "../../public/Watches";
import DescriptionInfo from "./DescriptionInfo";
import FeatureInfo from "./FeaturesInfo";
import ImgInfo from "./ImgInfo";

export default function WatchInfo(props){
    const filteredWatch = watches.filter(x => x.id === Number(props.id));
    const featureInfo = filteredWatch[0].features;

    const [InfoStyle, setInfoStyle] = useState(false);

    return (<>
        <section id="watch-detail"> 
            <div className="detail-container">

                <ImgInfo />

                <div className="more-info">
                    <h1>{filteredWatch[0].name}</h1>
                    <p className="price">{filteredWatch[0].price}</p>
                    <button>Buy now</button>
                    <div className="line"></div>
                    <div className="which-detail">
                        <button 
                            className={!InfoStyle ? 'chosen-detail' : null} 
                            onClick={() => setInfoStyle(false)}
                        >Features</button>
                        <button 
                            className={InfoStyle ? 'chosen-detail' : null} 
                            onClick={() => setInfoStyle(true)}
                        >Description</button>
                    </div>

                    {InfoStyle 
                        ? <DescriptionInfo description={filteredWatch[0].description} /> 
                        : <FeatureInfo 
                            madeIn={featureInfo.madeIn} 
                            displayType={featureInfo.displayType}
                            powerSource={featureInfo.powerSource}
                            waterResistance={featureInfo.waterResistance}
                            material={featureInfo.material}
                        />}
                </div>
            </div>
        </section>
    </>)
}