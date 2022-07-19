const Map = () => {
    return (
        <div
            data-aos="fade-left"
            data-aos-delay="1000"
            className="contact-map w-5/12 h-full bg-blue ph:w-full"
        >
            <div className="mapouter pt-14 lap:pt-12 ph:pt-0 ph:h-96">
                <div className="gmap_canvas">
                    <iframe
                        // width="600"
                        // height="500"
                        className="w-full h-full"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Unitol,%20Gayathri%20Arcade%20Vikrampuri%20Colony,%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder={0}
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        style={{
                            display: "hidden",
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;
