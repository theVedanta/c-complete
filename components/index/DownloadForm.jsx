import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const DownloadForm = ({ setForm }) => {
    const notyf = new Notyf();

    return (
        <main className="w-screen h-screen fixed top-0 left-0 z-40 flex justify-center items-center ph:px-5">
            <div
                className="overlay w-screen h-screen fixed top-0 left-0 z-40"
                style={{ background: "rgba(0, 0, 0, 0.6)" }}
                onClick={() => setForm(false)}
            ></div>
            <form
                className="z-50 bg-white w-1/3 px-12 py-8 rounded-xl text-black shadow-lg lap:w-1/2 lap:py-4 tab:w-2/3 ph:w-full ph:px-8"
                onSubmit={(e) => {
                    e.preventDefault();
                    setForm(false);
                    notyf.success("Request sent!");
                }}
            >
                <h3 className="text-3xl font-semibold mb-8 text-center mt-6">
                    Download Report
                </h3>

                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="name"
                        placeholder="John Doe"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="org-name">Organization Name</label>
                    <input
                        type="text"
                        required
                        maxLength="50"
                        name="org-name"
                        placeholder="Infosys"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        required
                        maxLength="50"
                        name="email"
                        placeholder="johndoe@service.com"
                    />
                </div>
                <div className="form-field mb-6 flex flex-col">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="number"
                        required
                        maxLength="50"
                        name="phone"
                        placeholder="1234567890"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-10 mb-6 lap:text-lg lap:py-3 lap:mt-6 ph:mt-4 ph:text-base"
                >
                    Send Report
                </button>
            </form>
        </main>
    );
};

export default DownloadForm;
