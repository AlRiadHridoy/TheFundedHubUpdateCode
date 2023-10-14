export default function ContactForm({ clr, header }) {
  return (
    <form
      className={`grid gap-6 sm:gap-8 md:gap-10 px-4 py-6 sm:p-8 relative z-10 rounded-3xl border-primary backdrop-blur-3xl global-shadow  ${
        clr === "dash-bar-clr" ? "contact-clr" : "bg-main-bg/30"
      }`}
    >
      <div className="head">
        <h3 className="text-xl">{header ? header : "Have questions?"}</h3>
      </div>
      <div className="inputs grid sm:grid-cols-2 gap-6">
        {/* name */}
        <div className="name">
          <input
            name="name"
            className="name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
            type="text"
            placeholder="Name"
          />
        </div>
        {/* surname */}
        <div className="surname">
          <input
            name="surname"
            className="name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
            type="text"
            placeholder="Surname"
          />
        </div>
        {/* email */}
        <div className="email">
          <input
            name="email"
            className="name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
            type="email"
            placeholder="Email"
          />
        </div>

        {/* subject */}
        <div className="subject">
          <input
            name="subject"
            className="name w-full focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 py-2 md:py-2.5 px-6 rounded-3xl transition-all duration-200"
            type="text"
            placeholder="Subject"
          />
        </div>
      </div>
      {/* textarea */}
      <div className="textarea">
        <textarea
          className="focus:outline-primary/70 bg-transparent backdrop-blur-3xl border-none outline outline-2 outline-primary/30 p-4 rounded-xl transition-all duration-200 w-full min-h-[10rem] sm:min-h-[12rem] md:min-h-[15rem]"
          name="comment"
          id="comment"
          placeholder="Comment"
        ></textarea>
      </div>

      {/* Login button */}
      <div className="login-btn flex justify-center items-center">
        <button className="py-2.5 px-16 transition-all duration-300 rounded-3xl font-Montserrat font-semibold glowing-btn max-w-[12rem]">
          Send
        </button>
      </div>
    </form>
  );
}
