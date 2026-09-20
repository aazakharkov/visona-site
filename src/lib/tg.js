import site from '../data/site.json';
// Ссылка на Telegram с заготовкой сообщения: человеку остается дописать детали и нажать "Отправить".
export const tg = (text) => (text ? `${site.telegram}?text=${encodeURIComponent(text)}` : site.telegram);
export const TG_DEFAULT = 'Здравствуйте! Хочу оформить визу.\nСтрана: \nДаты поездки: ';
