const Form = () => {
    return (
        <form className="contact-form w-7/12 h-full flex flex-col justify-center pr-64">
            <h3 className="text-darkBlue font-semibold text-3xl mb-10">
                Get in touch with us
            </h3>

            <div className="fields w-full flex items-center justify-between text-black mb-6">
                <div className="input">
                    <label htmlFor="name" className="mb-2 font-medium">
                        Name / Business name
                    </label>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        id="contact-name"
                        placeholder="Jane Doe Enterprises"
                        required
                        maxLength={100}
                    />
                </div>

                <div className="input">
                    <label htmlFor="name" className="mb-2 font-medium">
                        Email
                    </label>
                    <input
                        className="input-field"
                        type="email"
                        name="email"
                        id="contact-email"
                        placeholder="janedoe@gmail.com"
                        required
                        maxLength={100}
                    />
                </div>
            </div>

            <label htmlFor="msg" className="text-black mb-2 font-medium">
                Message
            </label>
            <textarea
                className="input-field input-textarea mb-10 h-2/6 text-black"
                name="msg"
                id="msg"
                placeholder="United States"
            ></textarea>

            <button type="submit" className="btn btn-primary self-start">
                Send Message
            </button>
        </form>
    );
};

export default Form;
