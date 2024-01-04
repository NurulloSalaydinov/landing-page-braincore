import CountUp from "react-countup";

import VisibilitySensor from "react-visibility-sensor";

import Section1 from "@/assets/section1.png";
import Section2 from "@/assets/section2.png";
import Section3 from "@/assets/section3.png";

const Advantages = () => {
  return (
    <section className="container mx-auto px-5 py-12">
      <h1 className="text-center text-5xl py-8">Bizdagi afzalliklar</h1>

      <div className="gap-5 my-8 flex flex-wrap justify-center items-center p-0">
        <div className="cursor-pointer card p-3 bg-white text-center">
          <figure className="flex items-center justify-center">
            <img src={Section1} alt="" width={300} height={300} />
          </figure>

          <h2 className="text-xl font-bold mt-3">Qulay foydalanish</h2>

          <p>
            Istalgan joyda telefon planshet yoki kampuyuter orqali kirsangiz
            boladi
          </p>
        </div>

        <div className="col-span-6 md:col-span-4cursor-pointer card p-3 bg-white text-center">
          <figure className="flex items-center justify-center">
            <img src={Section2} alt="" width={300} height={300} />
          </figure>
          <h2 className="text-xl font-bold mt-3">Xavsizlik</h2>

          <p>
            Ma’lumotlar havsizligi hamda hech qachon uchinchi shaxslarda
            ma’lumotlarni sotmaslik
          </p>
        </div>

        <div className="cursor-pointer card p-3 bg-white text-center">
          <figure className="flex items-center justify-center">
            <img src={Section3} alt="" width={300} height={300} />
          </figure>

          <h2 className="text-xl font-bold mt-3">Hisoboti</h2>

          <p>
            har oy o’z o’quv markazingiz haqida ma’lumotlarni oson hisob kitob
            qila olasiz
          </p>
        </div>
      </div>

      <div className="w-full py-12 px-6 rounded-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#0D1117CC] text-white gap-10">
        <h3 className="text-2xl text-center">
          Foydalanuvchilarimiz biz haqimizda ko'proq ma'lumot berishadi
        </h3>

        <div className="text-2xl flex flex-col text-center font-bold">
          <span className="text-[var(--main)] text-3xl">
            <CountUp end={3} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span className="font-bold">Bizdagi oquv markazlar soni</span>
        </div>

        <div className="text-xl flex flex-col text-center font-bold">
          <span className="text-[var(--main)] text-3xl">
            <CountUp end={7} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          <span className="font-bold">o’quv markazlarning filiallar soni</span>
        </div>

        <div className="text-xl flex flex-col text-center font-bold">
          <span className="text-[var(--main)] text-3xl">
            <CountUp end={2500} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </span>
          <span className="font-bold">Tizimdagi jami o’quvchilar soni</span>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
