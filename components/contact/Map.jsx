import React from "react";

const Map = () => {
    return (
        <div className="contact-map w-5/12 h-full bg-blue">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        // width="600"
                        // height="500"
                        className="w-full h-full"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
