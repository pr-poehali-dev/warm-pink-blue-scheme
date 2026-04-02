import Icon from "@/components/ui/icon";

const PHOTO_YULIA =
  "https://cdn.poehali.dev/projects/527397da-c75d-4633-8088-e4d4a78a57ac/bucket/c3536bbb-128a-4f93-9bd0-f7cfdcc8263f.jpeg";
const HERO_BG =
  "https://cdn.poehali.dev/projects/527397da-c75d-4633-8088-e4d4a78a57ac/files/7e232215-4d34-479e-89e8-10c70c83b1a8.jpg";

const WHO_LIST = [
  "Не можете забеременеть — физиологически здоровы, но стоит диагноз «бесплодие»",
  "Поставлен диагноз «вторичное бесплодие» — ранее беременности были",
  "Беременности наступали, но, к сожалению, заканчивались самопроизвольно",
  "Делали попытки ЭКО, которые были неудачными или беременность замерла",
  "Готовитесь к ЭКО и хотите подготовить себя психологически",
];

const WHY_LIST = [
  {
    icon: "Users",
    title: "Поле группы",
    text: "С момента решения прийти вокруг вас начинает работать психологическое поле. Все мы — отражение друг друга.",
  },
  {
    icon: "Eye",
    title: "Осознание",
    text: "Вы сможете распаковать свои процессы на примерах других участниц и понять, что запустило ваше состояние.",
  },
  {
    icon: "Heart",
    title: "Исцеление",
    text: "Перепрожить блокирующие эмоции, запустить процесс восстановления и новое ресурсное состояние.",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(180deg, hsl(345,60%,97%) 0%, hsl(270,40%,97%) 25%, hsl(205,60%,96%) 50%, hsl(270,40%,97%) 75%, hsl(345,60%,97%) 100%)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: "hsl(340,50%,92%)" }}>
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="font-cormorant text-xl font-semibold" style={{ color: "hsl(340,40%,55%)" }}>
            Хочу ребёнка
          </span>
          <a
            href="tel:+79137465908"
            className="flex items-center gap-2 text-sm font-golos transition-colors"
            style={{ color: "hsl(340,15%,45%)" }}
          >
            <Icon name="Phone" size={15} />
            +7 913 746 59 08
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{ background: "transparent" }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto pt-24 pb-16">
          <p className="animate-fade-up font-golos text-sm tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(340,40%,65%)" }}>
            Терапевтическая группа
          </p>
          <h1 className="animate-fade-up-delay-1 font-cormorant text-6xl md:text-7xl font-light leading-tight mb-6" style={{ color: "hsl(340,15%,20%)" }}>
            «Хочу ребёнка»
          </h1>
          <p className="animate-fade-up-delay-2 font-golos text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "hsl(340,10%,45%)" }}>
            Безопасное пространство, в котором можно встретиться с собой,
            обнаружить убеждения и бессознательные мотивы, мешающие испытать
            радость материнства.
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79137465908"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-golos font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl text-white"
              style={{ background: "hsl(340,40%,65%)" }}
            >
              <Icon name="Phone" size={18} />
              Записаться
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: "hsl(340,40%,65%)", color: "hsl(340,40%,55%)" }}
            >
              Узнать подробнее
            </a>
          </div>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm font-golos" style={{ color: "hsl(340,10%,60%)" }}>
            <span className="flex items-center gap-1.5 justify-center">
              <Icon name="Wifi" size={14} /> Онлайн
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <Icon name="MapPin" size={14} /> Очно в Новосибирске
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <Icon name="Lock" size={14} /> Закрытая группа
            </span>
          </div>
        </div>
      </section>

      {/* О ГРУППЕ */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(200,50%,60%)" }}>О группе</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "hsl(340,15%,20%)" }}>
              Почему это работает?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_LIST.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 border transition-all hover:shadow-md"
                style={{ background: "hsl(345,60%,97%)", borderColor: "hsl(340,50%,92%)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "hsl(340,40%,65%)" }}
                >
                  <Icon name={item.icon as "Users" | "Eye" | "Heart"} size={18} className="text-white" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "hsl(340,15%,20%)" }}>
                  {item.title}
                </h3>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(340,10%,50%)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ДЛЯ КОГО */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(340,40%,65%)" }}>Для кого</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "hsl(340,15%,20%)" }}>
              Группа для вас, если…
            </h2>
          </div>
          <div className="space-y-4">
            {WHO_LIST.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-5 border bg-white/80 hover:bg-white transition-all hover:shadow-sm"
                style={{ borderColor: "hsl(200,50%,88%)" }}
              >
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "hsl(200,50%,70%)" }}
                >
                  <Icon name="Check" size={14} className="text-white" />
                </div>
                <p className="font-golos text-sm leading-relaxed" style={{ color: "hsl(340,10%,45%)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ВЕДУЩАЯ */}
      <section id="leader" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(200,50%,60%)" }}>Ведущая</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "hsl(340,15%,20%)" }}>
              Юлия Воропаева
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <div
                className="w-56 h-56 rounded-full overflow-hidden border-4 shadow-xl"
                style={{ borderColor: "hsl(340,50%,88%)" }}
              >
                <img
                  src={PHOTO_YULIA}
                  alt="Юлия Воропаева"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 text-center md:text-left">
              {[
                "Клинический психолог",
                "Аккредитованный гештальт-терапевт",
                "Супервизор",
                "Психолог по психосоматике и репродуктивным запросам",
                "Семейный системный терапевт",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="font-golos text-base" style={{ color: "hsl(340,10%,45%)" }}>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* РАСПИСАНИЕ И СТОИМОСТЬ */}
      <section id="schedule" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(340,40%,65%)" }}>Расписание и стоимость</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "hsl(340,15%,20%)" }}>
              Встречаемся дважды в месяц
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div
              className="rounded-2xl p-8 border bg-white hover:shadow-md transition-all"
              style={{ borderColor: "hsl(200,50%,88%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(200,50%,70%)" }}
                >
                  <Icon name="Monitor" size={18} className="text-white" />
                </div>
                <span className="font-cormorant text-2xl font-semibold" style={{ color: "hsl(340,15%,20%)" }}>Онлайн</span>
              </div>
              <div className="space-y-2 font-golos text-sm" style={{ color: "hsl(340,10%,50%)" }}>
                <div className="flex items-center gap-2"><Icon name="Calendar" size={14} /> По средам</div>
                <div className="flex items-center gap-2"><Icon name="Clock" size={14} /> 11:00 – 13:00 (МСК)</div>
                <div className="flex items-center gap-2"><Icon name="RefreshCw" size={14} /> 2 раза в месяц</div>
              </div>
            </div>

            <div
              className="rounded-2xl p-8 border bg-white hover:shadow-md transition-all"
              style={{ borderColor: "hsl(340,50%,88%)" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "hsl(340,40%,65%)" }}
                >
                  <Icon name="MapPin" size={18} className="text-white" />
                </div>
                <span className="font-cormorant text-2xl font-semibold" style={{ color: "hsl(340,15%,20%)" }}>Очно</span>
              </div>
              <div className="space-y-2 font-golos text-sm" style={{ color: "hsl(340,10%,50%)" }}>
                <div className="flex items-center gap-2"><Icon name="Calendar" size={14} /> По вторникам</div>
                <div className="flex items-center gap-2"><Icon name="MapPin" size={14} /> Новосибирск</div>
                <div className="flex items-center gap-2"><Icon name="RefreshCw" size={14} /> 2 раза в месяц</div>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 text-center border bg-white"
            style={{ borderColor: "hsl(340,50%,88%)" }}
          >
            <p className="font-golos text-sm mb-2" style={{ color: "hsl(340,10%,55%)" }}>Стоимость одной встречи</p>
            <p className="font-cormorant text-5xl font-light mb-1" style={{ color: "hsl(340,15%,20%)" }}>3 500 ₽</p>
            <p className="font-golos text-xs" style={{ color: "hsl(340,10%,65%)" }}>Группа закрытая — запись по предварительному согласованию</p>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(200,50%,60%)" }}>Контакты</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6" style={{ color: "hsl(340,15%,20%)" }}>
            Готовы сделать первый шаг?
          </h2>
          <p className="font-golos text-base leading-relaxed mb-10" style={{ color: "hsl(340,10%,50%)" }}>
            Запись — через Юлию. Напишите или позвоните — она ответит на все
            вопросы и расскажет о ближайшем старте группы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79137465908"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-golos font-medium transition-all hover:scale-105 shadow-lg text-white"
              style={{ background: "hsl(340,40%,65%)" }}
            >
              <Icon name="Phone" size={18} />
              +7 913 746 59 08
            </a>
            <a
              href="https://t.me/+79137465908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: "hsl(200,50%,70%)", color: "hsl(200,45%,45%)" }}
            >
              <Icon name="Send" size={18} />
              Telegram
            </a>
            <a
              href="tel:+79137465908"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-golos font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: "hsl(340,40%,75%)", color: "hsl(340,40%,55%)" }}
            >
              <Icon name="Maximize2" size={18} />
              Макс
            </a>
          </div>
          <p className="font-golos text-sm mt-8" style={{ color: "hsl(340,10%,65%)" }}>
            Юлия Воропаева — ВЦ
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center bg-white/30">
        <p className="font-cormorant text-xl font-light mb-1" style={{ color: "hsl(340,40%,60%)" }}>«Хочу ребёнка»</p>
        <p className="font-golos text-xs" style={{ color: "hsl(340,10%,65%)" }}>
          Терапевтическая группа · Онлайн и Новосибирск
        </p>
      </footer>
    </div>
  );
}