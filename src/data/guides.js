// Бесплатные гайды. Чтобы опубликовать гайд, положите текст в src/content/guides/<slug>.md,
// и страница /gaydy/<slug>/ сама его покажет. Пока файла нет, там заглушка с подпиской через Telegram.
export const guides = [
  { slug: 'zapis-france', title: 'Как записаться в визовый центр Франции', desc: 'Когда появляются новые даты, как успеть записаться и что делать, если мест нет.', country: 'france', service: '/bot/' },
  { slug: 'anketa-france-visas', title: 'Анкета France-Visas: что писать в каждом поле', desc: 'Разбор анкеты по полям с примерами и типичными ошибками.', country: 'france', service: '/visa/france/' },
  { slug: 'zapis-bls-spain', title: 'Как самому записаться в визовый центр Испании', desc: 'Регистрация, проверка лица и выбор даты по шагам.', country: 'spain', service: '/visa/spain/' },
  { slug: 'dokumenty-shengen', title: 'Документы на шенген в 2026 году', desc: 'Базовый список и что добавить, если вы ИП, самозанятый, студент или пенсионер.', country: null, service: '/visa/' },
  { slug: 'finansy-dlya-vizy', title: 'Выписки и справки: как показать финансы', desc: 'Сколько денег нужно, какие выписки подходят и как оформить спонсорство.', country: null, service: '/visa/' },
  { slug: 'anketa-uk', title: 'Британская анкета на gov.uk по шагам', desc: 'Все экраны анкеты Standard Visitor с подсказками, что отвечать.', country: 'uk', service: '/visa/uk/' },
  { slug: 'posle-otkaza', title: 'Что делать после отказа в визе', desc: 'Как понять причину отказа и подготовить новую подачу.', country: null, service: '/tseny/' },
];
