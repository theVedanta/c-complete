const DownloadForm = ({ setForm }) => {
    return (
        <main
            className="w-screen h-screen fixed top-0 left-0 z-40 flex justify-center items-center"
            style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
            <form
                className="z-50 bg-white w-1/3 px-12 py-8 rounded-xl text-black shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault();
                    setForm(false);
                }}
            >
                <h3 className="text-2xl font-medium mb-10 text-center mt-6">
                    Download Report
                </h3>

                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="name" className="mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="name"
                        placeholder="eg. John Doe"
                        className="text-lg w-full rounded-lg px-5 py-3 border-blue border-2"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="org-name" className="mb-1">
                        Organization Name
                    </label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="org-name"
                        placeholder="eg. Infosys"
                        className="text-lg w-full rounded-lg px-5 py-3 border-blue border-2"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="name" className="mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="name"
                        placeholder="eg. John Doe"
                        className="text-lg w-full rounded-lg px-5 py-3 border-blue border-2"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="name" className="mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="name"
                        placeholder="eg. John Doe"
                        className="text-lg w-full rounded-lg px-5 py-3 border-blue border-2"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-10">
                    Send Report
                </button>
            </form>
        </main>
    );
};

export default DownloadForm;
