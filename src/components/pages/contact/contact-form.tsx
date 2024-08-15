export const ContactFormSection = () => {
  return (
    <section>
      <div className="side-gutter py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[480px] relative">
          <div></div>

          <div className="p-6">
            <div className="text-center md:text-start">
              <h1 className="text-[2rem] font-semibold uppercase underline underline-offset-4">
                Say Hi
              </h1>
              <p className="text-dark/70 text-sm my-2">
                We have the answer. Drop us a line below, we’d love to talk.
              </p>
            </div>

            <div className="grid grid-cols-1 text-center md:text-start gap-4 md:grid-cols-2 mt-10 ">
              <div className="space-y-1">
                <p className="font-medium text-[22px] uppercase">Address</p>
                <p className="font-medium capitalize">Office</p>
                <p className=" font-medium text-dark/80">
                  119 2/5 Prince Street, 11
                </p>
                <p className=" font-medium text-dark/80">Colombo 05</p>
              </div>
              <div>
                <p className="font-medium text-[22px] uppercase">Call us Now</p>
                <p className=" font-medium text-dark/80">+94 77 777 7777</p>
                <p className=" font-medium text-dark/80">+94 70 777 7777</p>
                <p className=" font-medium text-dark/80">+94 71 777 7777</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
