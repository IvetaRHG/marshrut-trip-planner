// Демо-данные приложения "Маршрут"
function toIsoDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// Держим демонстрационную поездку в будущем: 12–18 сентября
// текущего года, а если эта дата уже прошла — следующего.
function buildTripDates() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let year = today.getFullYear();
    let start = new Date(year, 8, 12);
    let end = new Date(year, 8, 18);

    if (end < today) {
        year += 1;
        start = new Date(year, 8, 12);
        end = new Date(year, 8, 18);
    }

    return { start, end };
}

const TRIP_DATES = buildTripDates();

const TRIP = {
    name: "Лиссабон и океан",
    startDate: toIsoDate(TRIP_DATES.start),
    endDate: toIsoDate(TRIP_DATES.end),
    start: TRIP_DATES.start,
    end: TRIP_DATES.end,
    daysCount: 7,
    routeText: "Лиссабон → Кашкайш → Синтра → Эрисейра → океан → Лиссабон",
    totalBudget: 180000
};

const DAYS = [
    {
        index: 0,
        dateLabel: "12 сентября",
        city: "Лиссабон",
        events: {
            calm: [
                { id: "d0-c1", time: "10:00", title: "Приезд и заселение", category: "Логистика", cost: 0, bookingRef: null },
                { id: "d0-c2", time: "15:00", title: "Прогулка по центру", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d0-c3", time: "18:00", title: "Ужин в Байрру Алту", category: "Еда", cost: 3500, bookingRef: null }
            ],
            intense: [
                { id: "d0-i1", time: "09:30", title: "Заселение и ориентация", category: "Логистика", cost: 0, bookingRef: null },
                { id: "d0-i2", time: "11:00", title: "Экскурсия по старому городу", category: "Экскурсия", cost: 2500, bookingRef: null },
                { id: "d0-i3", time: "14:00", title: "Обед в традиционном ресторане", category: "Еда", cost: 2000, bookingRef: null },
                { id: "d0-i4", time: "16:00", title: "Прогулка по набережной", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d0-i5", time: "19:00", title: "Фаду-вечер", category: "Еда", cost: 4500, bookingRef: null }
            ]
        }
    },
    {
        index: 1,
        dateLabel: "13 сентября",
        city: "Лиссабон",
        events: {
            calm: [
                { id: "d1-c1", time: "11:00", title: "Посещение замка Сан-Жорже", category: "Экскурсия", cost: 1200, bookingRef: null },
                { id: "d1-c2", time: "16:00", title: "Отдых в кафэ", category: "Еда", cost: 1500, bookingRef: null },
                { id: "d1-c3", time: "18:00", title: "Спокойный вечер", category: "Отдых", cost: 0, bookingRef: null }
            ],
            intense: [
                { id: "d1-i1", time: "09:00", title: "Замок Сан-Жорже", category: "Экскурсия", cost: 1500, bookingRef: null },
                { id: "d1-i2", time: "11:30", title: "Монастырь Жеронимуш", category: "Экскурсия", cost: 1000, bookingRef: null },
                { id: "d1-i3", time: "14:00", title: "Обед в Бейру", category: "Еда", cost: 1800, bookingRef: null },
                { id: "d1-i4", time: "16:00", title: "Трамвай 28Е", category: "Транспорт", cost: 200, bookingRef: null },
                { id: "d1-i5", time: "19:00", title: "Фаду-ужин", category: "Еда", cost: 5000, bookingRef: null }
            ]
        }
    },
    {
        index: 2,
        dateLabel: "14 сентября",
        city: "Кашкайш",
        events: {
            calm: [
                { id: "d2-c1", time: "11:00", title: "Поездка в Кашкайш", category: "Транспорт", cost: 600, bookingRef: "train" },
                { id: "d2-c2", time: "14:00", title: "Пляжный отдых", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d2-c3", time: "17:00", title: "Ужин у океана", category: "Еда", cost: 3000, bookingRef: null }
            ],
            intense: [
                { id: "d2-i1", time: "10:00", title: "Поездка в Кашкайш", category: "Транспорт", cost: 800, bookingRef: "train" },
                { id: "d2-i2", time: "12:00", title: "Сёрфинг-урок", category: "Экскурсия", cost: 4500, bookingRef: null },
                { id: "d2-i3", time: "14:00", title: "Обед у побережья", category: "Еда", cost: 2000, bookingRef: null },
                { id: "d2-i4", time: "16:00", title: "Прогулка по мысу Рока", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d2-i5", time: "19:00", title: "Ужин у океана", category: "Еда", cost: 3500, bookingRef: null }
            ]
        }
    },
    {
        index: 3,
        dateLabel: "15 сентября",
        city: "Синтра",
        events: {
            calm: [
                { id: "d3-c1", time: "12:00", title: "Экскурсия по Синтре", category: "Экскурсия", cost: 2500, bookingRef: "excursion" },
                { id: "d3-c2", time: "16:00", title: "Чай с пастель-де-ната", category: "Еда", cost: 800, bookingRef: null },
                { id: "d3-c3", time: "18:00", title: "Возвращение", category: "Транспорт", cost: 500, bookingRef: null }
            ],
            intense: [
                { id: "d3-i1", time: "10:00", title: "Экскурсия по Синтре", category: "Экскурсия", cost: 3000, bookingRef: "excursion" },
                { id: "d3-i2", time: "12:00", title: "Дворец Пена", category: "Экскурсия", cost: 2000, bookingRef: null },
                { id: "d3-i3", time: "14:00", title: "Обед в Синтре", category: "Еда", cost: 1500, bookingRef: null },
                { id: "d3-i4", time: "16:00", title: "Кинта да Регалейра", category: "Экскурсия", cost: 1200, bookingRef: null },
                { id: "d3-i5", time: "19:00", title: "Возвращение в Лиссабон", category: "Транспорт", cost: 600, bookingRef: null }
            ]
        }
    },
    {
        index: 4,
        dateLabel: "16 сентября",
        city: "Эрисейра",
        events: {
            calm: [
                { id: "d4-c1", time: "12:00", title: "Поездка в Эрисейру", category: "Транспорт", cost: 600, bookingRef: "train" },
                { id: "d4-c2", time: "15:00", title: "Прогулка по старому городу", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d4-c3", time: "18:00", title: "Ужин с видом на океан", category: "Еда", cost: 3500, bookingRef: null }
            ],
            intense: [
                { id: "d4-i1", time: "10:00", title: "Поездка в Эрисейру", category: "Транспорт", cost: 700, bookingRef: "train" },
                { id: "d4-i2", time: "13:00", title: "Сёрфинг-урок", category: "Экскурсия", cost: 4500, bookingRef: null },
                { id: "d4-i3", time: "15:00", title: "Обед у океана", category: "Еда", cost: 2000, bookingRef: null },
                { id: "d4-i4", time: "17:00", title: "Прогулка по скалам", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d4-i5", time: "19:00", title: "Ужин с видом на океан", category: "Еда", cost: 4000, bookingRef: null }
            ]
        }
    },
    {
        index: 5,
        dateLabel: "17 сентября",
        city: "Океан",
        events: {
            calm: [
                { id: "d5-c1", time: "11:00", title: "Прогулка по побережью", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d5-c2", time: "15:00", title: "Обед у рыбного рынка", category: "Еда", cost: 2000, bookingRef: null },
                { id: "d5-c3", time: "18:00", title: "Закат на скалах", category: "Отдых", cost: 0, bookingRef: null }
            ],
            intense: [
                { id: "d5-i1", time: "09:00", title: "Ранний забег по побережью", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d5-i2", time: "11:00", title: "Экскурсия к маяку", category: "Экскурсия", cost: 1500, bookingRef: null },
                { id: "d5-i3", time: "14:00", title: "Обед у рыбного рынка", category: "Еда", cost: 2500, bookingRef: null },
                { id: "d5-i4", time: "16:00", title: "Снорклинг", category: "Экскурсия", cost: 3000, bookingRef: null },
                { id: "d5-i5", time: "19:00", title: "Закатный ужин", category: "Еда", cost: 3500, bookingRef: null }
            ]
        }
    },
    {
        index: 6,
        dateLabel: "18 сентября",
        city: "Лиссабон",
        events: {
            calm: [
                { id: "d6-c1", time: "12:00", title: "Последние покупки", category: "Шоппинг", cost: 1500, bookingRef: null },
                { id: "d6-c2", time: "16:00", title: "Прощальный кофе", category: "Еда", cost: 800, bookingRef: null },
                { id: "d6-c3", time: "18:00", title: "Отъезд", category: "Логистика", cost: 0, bookingRef: "flight" }
            ],
            intense: [
                { id: "d6-i1", time: "10:00", title: "Последние покупки", category: "Шоппинг", cost: 2000, bookingRef: null },
                { id: "d6-i2", time: "13:00", title: "Обед в любимом месте", category: "Еда", cost: 2000, bookingRef: null },
                { id: "d6-i3", time: "15:00", title: "Прогулка по набережной", category: "Отдых", cost: 0, bookingRef: null },
                { id: "d6-i4", time: "17:00", title: "Сборы", category: "Логистика", cost: 0, bookingRef: null },
                { id: "d6-i5", time: "19:00", title: "Вылет домой", category: "Логистика", cost: 0, bookingRef: "flight" }
            ]
        }
    }
];

const PACE_CONFIG = {
    calm: {
        label: "Спокойно",
        hint: "Больше времени на отдых, меньше точек в программе.",
        eventMultiplier: 0.7,
        dayCostMultiplier: 0.8,
        budgetForecastMultiplier: 0.85
    },
    intense: {
        label: "Насыщенно",
        hint: "Максимум впечатлений, плотный график.",
        eventMultiplier: 1.0,
        dayCostMultiplier: 1.0,
        budgetForecastMultiplier: 1.0
    }
};

const BOOKINGS_INITIAL = [
    { id: "flight", type: "Перелёт", title: "Рейс туда-обратно", details: "Демо: LIS-XXX / XXX-LIS", status: "unconfirmed" },
    { id: "hotel", type: "Отель", title: "Отель в Лиссабоне", details: "Демо: центральный район", status: "confirmed" },
    { id: "train", type: "Поезд", title: "Поездка по окрестностям", details: "Демо: Лиссабон-Синтра", status: "unconfirmed" },
    { id: "excursion", type: "Экскурсия", title: "Экскурсия у океана", details: "Демо: групповая", status: "unconfirmed" }
];

const CHECKLIST_INITIAL = {
    documents: [
        { id: "doc1", text: "Паспорт", done: false },
        { id: "doc2", text: "Билеты", done: false },
        { id: "doc3", text: "Страховка", done: false }
    ],
    money: [
        { id: "mon1", text: "Карта", done: false },
        { id: "mon2", text: "Наличные", done: false }
    ],
    things: [
        { id: "th1", text: "Одежда", done: false },
        { id: "th2", text: "Гаджеты", done: false },
        { id: "th3", text: "Аптечка", done: false }
    ],
    health: [
        { id: "he1", text: "Средства от солнца", done: false },
        { id: "he2", text: "Индивидуальные препараты", done: false }
    ]
};

const BUDGET_CATEGORIES = [
    { key: "transport", label: "Транспорт", planned: 45000 },
    { key: "hotel", label: "Отель", planned: 80000 },
    { key: "food", label: "Питание", planned: 30000 },
    { key: "excursions", label: "Экскурсии", planned: 15000 },
    { key: "other", label: "Прочее", planned: 10000 }
];

const CHECKLIST_CATEGORY_LABELS = {
    documents: "Документы",
    money: "Деньги",
    things: "Вещи",
    health: "Здоровье"
};

// Состояние приложения
const state = {
    pace: "calm",
    selectedDayIndex: 0,
    appState: "success", // 'loading' | 'error' | 'empty' | 'success'
    // Локальные состояния блоков нужны для точечной кнопки «Повторить».
    sectionState: {
        route: null,
        bookings: null,
        checklist: null,
        budget: null
    },
    bookings: JSON.parse(JSON.stringify(BOOKINGS_INITIAL)),
    checklist: JSON.parse(JSON.stringify(CHECKLIST_INITIAL))
};

// Утилиты
function formatCurrency(amount) {
    return amount.toLocaleString('ru-RU') + ' ₽';
}

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function calculateCountdown() {
    const startDate = new Date(TRIP.startDate + 'T00:00:00');
    const endDate = new Date(TRIP.endDate + 'T23:59:59');
    const now = new Date();
    const diffTime = startDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (now > endDate) {
        return 'Поездка завершена';
    }
    if (diffDays > 0) {
        return `через ${diffDays} ${getDaysWord(diffDays)}`;
    }
    if (diffDays === 0) {
        return 'Сегодня!';
    }
    return 'Поездка идёт';
}

// Эффективное состояние конкретного блока: глобальное демо-состояние
// или локальное состояние после точечного повтора.
function getSectionState(section) {
    if (state.sectionState && state.sectionState[section]) {
        return state.sectionState[section];
    }
    // «Пустой день» относится только к маршруту — остальные блоки
    // продолжают показывать рабочие данные.
    if (section !== 'route' && state.appState === 'empty') {
        return 'success';
    }
    return state.appState;
}

function getDayEvents(dayIndex, pace) {
    const day = DAYS[dayIndex];
    if (!day) return [];
    if (day.events && typeof day.events === 'object' && !Array.isArray(day.events)) {
        return day.events[pace] || [];
    }
    return Array.isArray(day.events) ? day.events : [];
}

function getDayDate(dayIndex) {
    const date = new Date(TRIP.start);
    date.setDate(date.getDate() + dayIndex);
    return date;
}

function getNextChecklistTask() {
    for (const cat of Object.keys(state.checklist)) {
        for (const item of state.checklist[cat]) {
            if (!item.done) return item.text;
        }
    }
    return null;
}

function timeToMinutes(time) {
    const parts = String(time || '').split(':');
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return Number.POSITIVE_INFINITY;
    return hours * 60 + minutes;
}

// Текущий день поездки и ближайшее событие для мобильного блока «Сегодня».
function getTodayInfo() {
    const now = new Date();
    const start = new Date(TRIP.startDate + 'T00:00:00');
    const end = new Date(TRIP.endDate + 'T23:59:59');

    if (now > end) {
        return { phase: 'finished', dayIndex: -1, day: null, event: null };
    }

    if (now < start) {
        const firstEvents = getDayEvents(0, state.pace);
        return { phase: 'upcoming', dayIndex: 0, day: DAYS[0], event: firstEvents[0] || null };
    }

    const dayIndex = Math.min(
        DAYS.length - 1,
        Math.floor((now - start) / (1000 * 60 * 60 * 24))
    );
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const todayEvents = getDayEvents(dayIndex, state.pace);
    const nextToday = todayEvents.find(event => timeToMinutes(event.time) >= nowMinutes);

    if (nextToday) {
        return { phase: 'current', dayIndex, day: DAYS[dayIndex], event: nextToday };
    }

    for (let i = dayIndex + 1; i < DAYS.length; i++) {
        const nextEvents = getDayEvents(i, state.pace);
        if (nextEvents.length > 0) {
            return { phase: 'next-day', dayIndex: i, day: DAYS[i], event: nextEvents[0] };
        }
    }

    return { phase: 'current', dayIndex, day: DAYS[dayIndex], event: null };
}

function getBookingStatusInfo(bookingRef) {
    if (!bookingRef) return null;
    const booking = state.bookings.find(item => item.id === bookingRef);
    if (!booking) return { key: 'unknown', label: 'Бронь: есть' };
    return booking.status === 'confirmed'
        ? { key: 'confirmed', label: 'Бронь: подтверждена' }
        : { key: 'unconfirmed', label: 'Бронь: не подтверждена' };
}

function getBookingStatusText(event) {
    if (!event || !event.bookingRef) return 'Статус: Без брони';
    const booking = state.bookings.find(item => item.id === event.bookingRef);
    if (!booking) return 'Статус: Есть бронь';
    return booking.status === 'confirmed' ? 'Статус: Подтверждено' : 'Статус: Не подтверждено';
}

function getDaysWord(days) {
    const lastDigit = days % 10;
    const lastTwoDigits = days % 100;
    
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'дней';
    }
    if (lastDigit === 1) {
        return 'день';
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
        return 'дня';
    }
    return 'дней';
}

function calculatePlannedBudget() {
    const paceConfig = PACE_CONFIG[state.pace];
    const pace = state.pace;
    let total = 0;
    
    DAYS.forEach(day => {
        let events = [];
        if (day.events && typeof day.events === 'object' && !Array.isArray(day.events)) {
            events = day.events[pace] || [];
        } else if (Array.isArray(day.events)) {
            events = day.events;
            if (paceConfig.eventMultiplier < 1 && events.length > 1) {
                events = events.slice(0, Math.ceil(events.length * paceConfig.eventMultiplier));
            }
        }
        events.forEach(event => {
            total += (event.cost || 0) * (paceConfig.dayCostMultiplier || 1);
        });
    });
    
    let categoryTotal = 0;
    BUDGET_CATEGORIES.forEach(cat => {
        categoryTotal += cat.planned;
    });
    
    const forecast = Math.round(total * (paceConfig.budgetForecastMultiplier || 1));
    return Math.max(forecast, Math.round(categoryTotal * (paceConfig.budgetForecastMultiplier || 1)));
}

function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Рендер обложки
function renderCover() {
    document.getElementById('tripName').textContent = TRIP.name;
    document.getElementById('tripDates').textContent = TRIP.startDate.slice(8) + '–' + TRIP.endDate.slice(8) + ' сентября';
    document.getElementById('tripDaysCount').textContent = TRIP.daysCount + ' дней';
    document.getElementById('countdown').textContent = calculateCountdown();
    document.getElementById('routeText').textContent = TRIP.routeText;
}

// Рендер переключателя темпа
function renderPaceToggle() {
    const paceHint = document.getElementById('paceHint');
    const paceConfig = PACE_CONFIG[state.pace];
    paceHint.textContent = paceConfig.hint;
    
    // Обновляем активное состояние кнопок
    document.querySelectorAll('.pace-option').forEach(btn => {
        const isActive = btn.dataset.pace === state.pace;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

// Рендер навигации по дням
function renderRouteDays() {
    const routeDaysContainer = document.getElementById('routeDays');
    const previousScrollLeft = routeDaysContainer.scrollLeft;
    routeDaysContainer.innerHTML = '';
    
    DAYS.forEach(day => {
        const btn = document.createElement('button');
        btn.type = 'button';
        const isActive = day.index === state.selectedDayIndex;
        btn.className = 'route-day-btn' + (isActive ? ' is-active' : '');
        btn.textContent = day.dateLabel;
        btn.dataset.dayIndex = day.index;
        btn.setAttribute('aria-pressed', String(isActive));
        btn.addEventListener('click', () => {
            state.selectedDayIndex = day.index;
            renderAll();
            // После полного ре-рендера возвращаем фокус на выбранный день.
            const activeBtn = routeDaysContainer.querySelector('.route-day-btn.is-active');
            if (activeBtn) activeBtn.focus({ preventScroll: true });
        });
        routeDaysContainer.appendChild(btn);
    });

    // Держим выбранный день в поле зрения, не сбрасывая прокрутку ленты.
    routeDaysContainer.scrollLeft = previousScrollLeft;
    const activeBtn = routeDaysContainer.querySelector('.route-day-btn.is-active');
    if (activeBtn) {
        const btnLeft = activeBtn.offsetLeft;
        const btnRight = btnLeft + activeBtn.offsetWidth;
        const viewLeft = routeDaysContainer.scrollLeft;
        const viewRight = viewLeft + routeDaysContainer.clientWidth;

        if (btnLeft < viewLeft || btnRight > viewRight) {
            const target = btnLeft - (routeDaysContainer.clientWidth - activeBtn.offsetWidth) / 2;
            routeDaysContainer.scrollTo({
                left: Math.max(0, target),
                behavior: prefersReducedMotion() ? 'auto' : 'smooth'
            });
        }
    }
}

// Расчет стоимости выбранного дня
function calculateDayCost() {
    const day = DAYS[state.selectedDayIndex];
    const pace = state.pace;
    let events = [];
    if (day.events && typeof day.events === 'object' && !Array.isArray(day.events)) {
        events = day.events[pace] || [];
    } else if (Array.isArray(day.events)) {
        events = day.events;
    }
    let total = 0;
    events.forEach(event => {
        total += event.cost || 0;
    });
    return total;
}

// Показать нужный вариант блока по его состоянию
function showSectionState(section, elements, stateName) {
    const { content, skeleton, error, empty } = elements;

    if (content) content.style.display = 'none';
    if (skeleton) skeleton.style.display = 'none';
    if (error) error.style.display = 'none';
    if (empty) empty.style.display = 'none';

    if (stateName === 'loading') {
        if (skeleton) skeleton.style.display = 'flex';
    } else if (stateName === 'error') {
        if (error) error.style.display = 'flex';
    } else if (stateName === 'empty') {
        if (empty) empty.style.display = 'flex';
    } else if (stateName === 'success') {
        if (section === 'route') {
            // Если событий нет, отдельный блок «В этот день событий не запланировано»
            // показывает applyUIStates ниже — демо-карточку empty здесь не включаем.
            const hasEvents = content && content.querySelector('.route-event') !== null;
            if (hasEvents) content.style.display = 'flex';
        } else if (section === 'budget') {
            if (content) content.style.display = 'block';
        } else if (content) {
            content.style.display = 'flex';
        }
    }
}

// Применение состояний UI
function applyUIStates() {
    const routeState = getSectionState('route');
    const bookingsState = getSectionState('bookings');
    const checklistState = getSectionState('checklist');
    const budgetState = getSectionState('budget');

    showSectionState('route', {
        content: document.getElementById('routeSchedule'),
        skeleton: document.getElementById('routeSkeleton'),
        error: document.getElementById('routeError'),
        empty: document.getElementById('routeEmptyDay')
    }, routeState);

    // Отдельный блок «в этот день нет событий» — это не демо-состояние,
    // а нормальный результат для дня без программы.
    const routeScheduleEmpty = document.getElementById('routeScheduleEmpty');
    if (routeScheduleEmpty) {
        const routeSchedule = document.getElementById('routeSchedule');
        const showEmptyDay = routeState === 'success' &&
            routeSchedule &&
            routeSchedule.querySelector('.route-event') === null;
        routeScheduleEmpty.style.display = showEmptyDay ? 'block' : 'none';
    }

    showSectionState('bookings', {
        content: document.getElementById('bookingsList'),
        skeleton: document.getElementById('bookingsSkeleton'),
        error: document.getElementById('bookingsError')
    }, bookingsState);

    showSectionState('checklist', {
        content: document.getElementById('checklist'),
        skeleton: document.getElementById('checklistSkeleton'),
        error: document.getElementById('checklistError')
    }, checklistState);

    showSectionState('budget', {
        content: document.getElementById('budgetContent'),
        skeleton: document.getElementById('budgetSkeleton'),
        error: document.getElementById('budgetError')
    }, budgetState);

    renderTodayMobile();
}

// Мобильный блок «Сегодня»: текущий день поездки и ближайшее событие.
function renderTodayMobile() {
    const dayInfoEl = document.getElementById('todayMobileDayInfo');
    const eventTitleEl = document.getElementById('todayMobileEventTitle');
    const eventTimeEl = document.getElementById('todayMobileEventTime');
    const eventPlaceEl = document.getElementById('todayMobileEventPlace');
    const eventBookingEl = document.getElementById('todayMobileEventBooking');
    const taskTextEl = document.getElementById('todayMobileTaskText');

    const routeState = getSectionState('route');
    const checklistState = getSectionState('checklist');

    const setEventCard = (title, time, place, status) => {
        if (eventTitleEl) eventTitleEl.textContent = title;
        if (eventTimeEl) eventTimeEl.textContent = time;
        if (eventPlaceEl) eventPlaceEl.textContent = place;
        if (eventBookingEl) eventBookingEl.textContent = status;
    };

    if (routeState === 'loading') {
        if (dayInfoEl) dayInfoEl.textContent = 'Загрузка данных…';
        setEventCard('Загрузка событий…', '--:--', '…', 'Статус: —');
    } else if (routeState === 'error') {
        if (dayInfoEl) dayInfoEl.textContent = 'Данные недоступны';
        setEventCard('Не удалось загрузить событие', '--:--', 'Повторите попытку', 'Статус: —');
    } else if (routeState === 'empty') {
        if (dayInfoEl) dayInfoEl.textContent = 'День без событий';
        setEventCard('Нет событий', '--:--', '—', 'Статус: —');
    } else {
        const info = getTodayInfo();

        if (info.phase === 'finished') {
            if (dayInfoEl) dayInfoEl.textContent = 'Поездка завершена';
        } else if (info.phase === 'upcoming') {
            if (dayInfoEl) dayInfoEl.textContent = 'Старт: ' + info.day.dateLabel + ' — ' + info.day.city;
        } else if (info.phase === 'current') {
            if (dayInfoEl) dayInfoEl.textContent = 'Сегодня, ' + info.day.dateLabel + ' — ' + info.day.city;
        } else {
            if (dayInfoEl) dayInfoEl.textContent = 'Ближайшее: ' + info.day.dateLabel + ' — ' + info.day.city;
        }

        if (info.event) {
            setEventCard(
                info.event.title,
                info.event.time,
                info.day ? info.day.city : '—',
                getBookingStatusText(info.event)
            );
        } else {
            setEventCard(
                'Нет событий',
                '--:--',
                info.day ? info.day.city : '—',
                'Статус: —'
            );
        }
    }

    if (taskTextEl) {
        if (checklistState === 'loading') {
            taskTextEl.textContent = 'Загрузка задач…';
        } else if (checklistState === 'error') {
            taskTextEl.textContent = 'Не удалось загрузить задачи';
        } else {
            taskTextEl.textContent = getNextChecklistTask() || 'Все задачи выполнены';
        }
    }
}

// Рендер расписания выбранного дня
function renderRouteSchedule() {
    const day = DAYS[state.selectedDayIndex];
    const routeSchedule = document.getElementById('routeSchedule');
    const routeScheduleEmpty = document.getElementById('routeScheduleEmpty');
    const selectedDayCostEl = document.getElementById('selectedDayCost');
    
    document.getElementById('selectedDayCity').textContent = day.city;
    document.getElementById('selectedDayDate').textContent = day.dateLabel;
    
    const dayCost = calculateDayCost();
    if (selectedDayCostEl) {
        selectedDayCostEl.textContent = formatCurrency(dayCost);
    }
    
    if (routeSchedule) routeSchedule.innerHTML = '';
    
    const events = getDayEvents(state.selectedDayIndex, state.pace);
    
    if (getSectionState('route') !== 'success') {
        applyUIStates();
        return;
    }
    
    if (events.length === 0) {
        if (routeSchedule) routeSchedule.style.display = 'none';
        if (routeScheduleEmpty) routeScheduleEmpty.style.display = 'block';
        renderTodayMobile();
        return;
    }
    
    if (routeSchedule) routeSchedule.style.display = 'flex';
    if (routeScheduleEmpty) routeScheduleEmpty.style.display = 'none';
    
    events.forEach((event, index) => {
        const bookingInfo = getBookingStatusInfo(event.bookingRef);
        const eventEl = document.createElement('article');
        eventEl.className = 'route-event' + (index === 0 ? ' is-current' : '');
        if (index === 0) {
            eventEl.setAttribute('aria-current', 'true');
        }
        eventEl.innerHTML = `
            <div class="route-event__time">${escapeHtml(event.time)}</div>
            <div class="route-event__content">
                <div class="route-event__title">${escapeHtml(event.title)}</div>
                <div class="route-event__meta">
                    <span class="route-event__category">📁 ${escapeHtml(event.category)}</span>
                    <span class="route-event__city">📍 ${escapeHtml(day.city)}</span>
                    <span class="route-event__cost">💰 ${formatCurrency(event.cost || 0)}</span>
                    ${bookingInfo ? `<span class="route-event__booking is-${bookingInfo.key}">${bookingInfo.label}</span>` : ''}
                </div>
            </div>
        `;
        if (routeSchedule) routeSchedule.appendChild(eventEl);
    });
    
    renderTodayMobile();
}

// Рендер бюджета
function renderBudget() {
    const totalBudgetEl = document.getElementById('totalBudget');
    const plannedBudgetEl = document.getElementById('plannedBudget');
    const remainingBudgetEl = document.getElementById('remainingBudget');
    const budgetProgressFill = document.getElementById('budgetProgressFill');
    const budgetProgressPercent = document.getElementById('budgetProgressPercent');
    const budgetCategoriesList = document.getElementById('budgetCategoriesList');
    
    if (getSectionState('budget') !== 'success') {
        applyUIStates();
        return;
    }
    
    const plannedBudget = calculatePlannedBudget();
    const remaining = TRIP.totalBudget - plannedBudget;
    const percent = Math.min(100, Math.round((plannedBudget / TRIP.totalBudget) * 100));
    
    if (totalBudgetEl) totalBudgetEl.textContent = formatCurrency(TRIP.totalBudget);
    if (plannedBudgetEl) plannedBudgetEl.textContent = formatCurrency(plannedBudget);
    if (remainingBudgetEl) remainingBudgetEl.textContent = formatCurrency(Math.max(0, remaining));
    
    if (budgetProgressFill) {
        const previousPercent = budgetProgressFill.dataset.percent;
        budgetProgressFill.style.width = percent + '%';

        // Мягкий блик запускается только при реальном изменении прогресса.
        if (previousPercent !== String(percent)) {
            budgetProgressFill.dataset.percent = percent;
            budgetProgressFill.classList.remove('is-updated');
            void budgetProgressFill.offsetWidth;
            budgetProgressFill.classList.add('is-updated');

            const budgetProgress = budgetProgressFill.closest('.budget-progress');
            if (budgetProgress) {
                budgetProgress.classList.remove('is-updated');
                void budgetProgress.offsetWidth;
                budgetProgress.classList.add('is-updated');
            }
        }
    }
    if (budgetProgressPercent) budgetProgressPercent.textContent = percent;
    
    if (budgetCategoriesList) budgetCategoriesList.innerHTML = '';
    const paceConfig = PACE_CONFIG[state.pace];
    
    BUDGET_CATEGORIES.forEach(cat => {
        const amount = Math.round(cat.planned * paceConfig.budgetForecastMultiplier);
        const catEl = document.createElement('div');
        catEl.className = 'budget-category';
        catEl.innerHTML = `
            <span class="budget-category__label">${escapeHtml(cat.label)}</span>
            <span class="budget-category__value">${formatCurrency(amount)}</span>
        `;
        if (budgetCategoriesList) budgetCategoriesList.appendChild(catEl);
    });
}

// Рендер бронирований
function renderBookings() {
    const bookingsList = document.getElementById('bookingsList');
    const bookingsCounter = document.getElementById('bookingsConfirmedCount');
    const focusBookingId = state.focusBookingId;
    state.focusBookingId = null;
    if (bookingsList) bookingsList.innerHTML = '';
    
    const confirmedCount = state.bookings.filter(b => b.status === 'confirmed').length;
    if (bookingsCounter) {
        bookingsCounter.textContent = confirmedCount + '/' + state.bookings.length + ' подтверждено';
    }
    
    if (getSectionState('bookings') !== 'success') {
        applyUIStates();
        return;
    }
    
    if (bookingsList) bookingsList.style.display = 'flex';
    
    state.bookings.forEach(booking => {
        const bookingCard = document.createElement('article');
        bookingCard.className = 'booking-card ' + (booking.status === 'confirmed' ? 'is-confirmed' : 'is-unconfirmed');
        bookingCard.dataset.bookingId = booking.id;
        bookingCard.tabIndex = -1;
        bookingCard.innerHTML = `
            <div class="booking-card__info">
                <div class="booking-card__type">${escapeHtml(booking.type)}</div>
                <div class="booking-card__title">${escapeHtml(booking.title)}</div>
                <div class="booking-card__details">${escapeHtml(booking.details)}</div>
            </div>
            <div class="booking-card__actions">
                <div class="booking-card__status">
                    ${booking.status === 'confirmed' ? 'Подтверждено' : 'Не подтверждено'}
                </div>
                ${booking.status === 'unconfirmed' ? 
                    `<button type="button" class="booking-confirm-btn" data-booking-id="${escapeHtml(booking.id)}">Подтвердить</button>` : 
                    `<button type="button" class="booking-confirm-btn" disabled>Подтверждено</button>`
                }
            </div>
        `;
        if (bookingsList) bookingsList.appendChild(bookingCard);
    });
    
    // Добавляем обработчики для кнопок подтверждения
    document.querySelectorAll('.booking-confirm-btn:not([disabled])').forEach(btn => {
        btn.onclick = null;
        btn.addEventListener('click', () => {
            const bookingId = btn.dataset.bookingId;
            const booking = state.bookings.find(b => b.id === bookingId);
            if (booking && booking.status === 'unconfirmed') {
                booking.status = 'confirmed';
                saveBookings();
                state.focusBookingId = bookingId;
                renderAll();
                showToast('Бронирование подтверждено!');
            }
        });
    });

    // После подтверждения кнопка исчезает — возвращаем фокус на карточку.
    if (focusBookingId && bookingsList) {
        const focusTarget = bookingsList.querySelector(
            '.booking-card[data-booking-id="' + CSS.escape(focusBookingId) + '"]'
        );
        if (focusTarget) focusTarget.focus({ preventScroll: true });
    }
}

// Рендер чек-листа
function renderChecklist() {
    const checklistContainer = document.getElementById('checklist');
    const checklistDoneEl = document.getElementById('checklistDone');
    const checklistTotalEl = document.getElementById('checklistTotal');
    const checklistPercentEl = document.getElementById('checklistPercent');
    const checklistProgressFill = document.getElementById('checklistProgressFill');

    // Запоминаем, какой пункт был в фокусе, чтобы не терять клавиатурную позицию.
    const focusedCheckbox = document.activeElement &&
        document.activeElement.classList &&
        document.activeElement.classList.contains('checklist-item__checkbox')
        ? document.activeElement
        : null;
    const focusKey = focusedCheckbox
        ? { category: focusedCheckbox.dataset.category, itemId: focusedCheckbox.dataset.itemId }
        : null;
    
    if (checklistContainer) checklistContainer.innerHTML = '';
    
    let totalItems = 0;
    let doneItems = 0;
    
    Object.keys(state.checklist).forEach(categoryKey => {
        const categoryItems = state.checklist[categoryKey];
        categoryItems.forEach(item => {
            totalItems++;
            if (item.done) doneItems++;
        });
    });
    
    if (checklistDoneEl) checklistDoneEl.textContent = doneItems;
    if (checklistTotalEl) checklistTotalEl.textContent = totalItems;
    if (checklistPercentEl) checklistPercentEl.textContent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
    if (checklistProgressFill) {
        checklistProgressFill.style.width = totalItems > 0 ? (doneItems / totalItems) * 100 + '%' : '0%';
    }
    
    if (getSectionState('checklist') !== 'success') {
        applyUIStates();
        return;
    }
    
    if (checklistContainer) checklistContainer.style.display = 'flex';
    
    Object.keys(state.checklist).forEach(categoryKey => {
        const categoryItems = state.checklist[categoryKey];
        const categoryDiv = document.createElement('section');
        categoryDiv.className = 'checklist-category';
        
        const title = document.createElement('h3');
        title.className = 'checklist-category__title';
        title.textContent = CHECKLIST_CATEGORY_LABELS[categoryKey] || categoryKey;
        categoryDiv.appendChild(title);
        
        const itemsDiv = document.createElement('div');
        itemsDiv.className = 'checklist-items';
        
        categoryItems.forEach(item => {
            const itemDiv = document.createElement('label');
            itemDiv.className = 'checklist-item' + (item.done ? ' is-done' : '');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'checklist-item__checkbox';
            checkbox.checked = item.done;
            checkbox.dataset.category = categoryKey;
            checkbox.dataset.itemId = item.id;
            
            const text = document.createElement('span');
            text.className = 'checklist-item__text';
            text.textContent = item.text;
            
            checkbox.onchange = null;
            checkbox.addEventListener('change', () => {
                const cat = categoryKey;
                const itemId = item.id;
                const foundItem = state.checklist[cat].find(i => i.id === itemId);
                if (foundItem) {
                    foundItem.done = checkbox.checked;
                    saveChecklist();
                    renderChecklist();
                    // Блок «Сегодня» показывает следующую задачу — обновляем сразу.
                    renderTodayMobile();
                }
            });
            
            itemDiv.appendChild(checkbox);
            itemDiv.appendChild(text);
            itemsDiv.appendChild(itemDiv);
        });
        
        categoryDiv.appendChild(itemsDiv);
        if (checklistContainer) checklistContainer.appendChild(categoryDiv);
    });

    if (focusKey && checklistContainer) {
        const restored = checklistContainer.querySelector(
            '.checklist-item__checkbox[data-category="' + CSS.escape(focusKey.category) + '"]' +
            '[data-item-id="' + CSS.escape(focusKey.itemId) + '"]'
        );
        if (restored) restored.focus({ preventScroll: true });
    }
}

// Сохранение в localStorage
function saveBookings() {
    try {
        localStorage.setItem('routePlanner.bookings', JSON.stringify(state.bookings));
    } catch (e) {
        // Игнорируем ошибки localStorage
    }
}

function saveChecklist() {
    try {
        localStorage.setItem('routePlanner.checklist', JSON.stringify(state.checklist));
    } catch (e) {
        // Игнорируем ошибки localStorage
    }
}

function loadFromStorage() {
    try {
        const savedBookings = localStorage.getItem('routePlanner.bookings');
        if (savedBookings) {
            state.bookings = JSON.parse(savedBookings);
        }
        
        const savedChecklist = localStorage.getItem('routePlanner.checklist');
        if (savedChecklist) {
            state.checklist = JSON.parse(savedChecklist);
        }
    } catch (e) {
        // Игнорируем ошибки localStorage
    }
}

// Сброс данных
function resetData() {
    state.bookings = JSON.parse(JSON.stringify(BOOKINGS_INITIAL));
    state.checklist = JSON.parse(JSON.stringify(CHECKLIST_INITIAL));
    
    try {
        localStorage.removeItem('routePlanner.bookings');
        localStorage.removeItem('routePlanner.checklist');
    } catch (e) {
        // Игнорируем ошибки
    }
    
    renderAll();
    showToast('Учебные данные сброшены');
}

// Вспомогательная функция для экранирования HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Рендер всего приложения
function renderAll() {
    renderCover();
    renderPaceToggle();
    renderRouteDays();
    renderRouteSchedule();
    renderBudget();
    renderBookings();
    renderChecklist();
    renderTodayMobile();
    applyUIStates();
}

// ---------- Демо-состояния и точечный повтор ----------
const retryTimers = {};

function clearRetryTimers() {
    Object.keys(retryTimers).forEach(key => {
        clearTimeout(retryTimers[key]);
        delete retryTimers[key];
    });
}

function resetSectionStates() {
    Object.keys(state.sectionState).forEach(key => {
        state.sectionState[key] = null;
    });
}

function setDemoState(nextState) {
    clearRetryTimers();
    resetSectionStates();
    state.appState = nextState;
    renderAll();
}

function focusSection(section) {
    const selectors = {
        route: '.route-section',
        bookings: '.bookings-section',
        checklist: '.checklist-section',
        budget: '.budget-section'
    };
    const title = document.querySelector(selectors[section] + ' .section-header__title');
    if (title) {
        title.setAttribute('tabindex', '-1');
        title.focus({ preventScroll: true });
    }
}

function retrySection(section) {
    if (!section) return;
    clearTimeout(retryTimers[section]);
    state.sectionState[section] = 'loading';
    applyUIStates();
    retryTimers[section] = setTimeout(() => {
        delete retryTimers[section];
        // Блок стал рабочим, остальные остаются в прежнем состоянии.
        state.sectionState[section] = 'success';
        renderAll();
        showToast('Данные обновлены');
        focusSection(section);
    }, 800);
}

// ---------- Нижняя навигация ----------
const NAV_SECTIONS = [
    { nav: 'today', selector: '#todayMobile' },
    { nav: 'route', selector: '.route-section' },
    { nav: 'budget', selector: '.budget-section' },
    { nav: 'prep', selector: '.checklist-section' }
];

function setActiveNav(nav) {
    document.querySelectorAll('.bottom-nav__btn').forEach(btn => {
        const isActive = btn.dataset.nav === nav;
        btn.classList.toggle('is-active', isActive);
        if (isActive) {
            btn.setAttribute('aria-current', 'location');
        } else {
            btn.removeAttribute('aria-current');
        }
    });
}

function getNavTarget(nav) {
    const item = NAV_SECTIONS.find(section => section.nav === nav);
    return item ? document.querySelector(item.selector) : null;
}

function updateActiveNav() {
    const sections = NAV_SECTIONS
        .map(item => ({ nav: item.nav, element: document.querySelector(item.selector) }))
        .filter(item => item.element && item.element.offsetParent !== null);
    if (sections.length === 0) return;

    const doc = document.documentElement;
    const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
    let active = sections[0].nav;

    if (atBottom) {
        // Внизу страницы активен самый нижний по документу блок.
        let lowestTop = -Infinity;
        sections.forEach(item => {
            const top = item.element.getBoundingClientRect().top;
            if (top > lowestTop) {
                lowestTop = top;
                active = item.nav;
            }
        });
    } else {
        const line = window.scrollY + Math.min(window.innerHeight * 0.35, 260);
        let bestTop = -Infinity;
        sections.forEach(item => {
            const top = item.element.getBoundingClientRect().top + window.scrollY;
            if (top <= line && top > bestTop) {
                bestTop = top;
                active = item.nav;
            }
        });
    }

    setActiveNav(active);
}

function initNav() {
    document.querySelectorAll('.bottom-nav__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const nav = btn.dataset.nav;
            setActiveNav(nav);
            const target = getNavTarget(nav);
            if (target) {
                target.scrollIntoView({
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            ticking = false;
            updateActiveNav();
        });
    }, { passive: true });
    window.addEventListener('resize', updateActiveNav);
    updateActiveNav();
}

// ---------- Демо-просмотр экранов 1440 / 768 / 390 ----------
const VIEWPORTS = {
    mobile: { width: 390, height: 844, label: 'Смартфон · 390 px' },
    tablet: { width: 768, height: 1024, label: 'Планшет · 768 px' }
};

let currentViewport = null;
let viewportTrigger = null;

function isEmbeddedPreview() {
    try {
        return window.self !== window.top;
    } catch (error) {
        return true;
    }
}

function setActiveViewport(mode) {
    document.querySelectorAll('.demo-viewport-btn').forEach(btn => {
        const isActive = btn.dataset.viewport === mode;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });
}

// Сообщаем приложению внутри предпросмотра, что ширина изменилась:
// так пересчитываются активный пункт нижней навигации и адаптивные блоки.
function notifyViewportFrame() {
    const iframe = document.getElementById('viewportIframe');
    if (!iframe) return;
    try {
        const frameWindow = iframe.contentWindow;
        if (frameWindow) {
            frameWindow.dispatchEvent(new frameWindow.Event('resize'));
        }
    } catch (error) {
        // Предпросмотр ещё не загрузился — сообщение не требуется.
    }
}

function fitViewportFrame() {
    if (!currentViewport) return;
    const stage = document.getElementById('viewportStage');
    const frame = document.getElementById('viewportFrame');
    const scaleBox = document.getElementById('viewportScale');
    if (!stage || !frame || !scaleBox) return;

    const availableWidth = Math.max(200, stage.clientWidth - 32);
    const availableHeight = Math.max(200, stage.clientHeight - 32);
    const scale = Math.min(
        1,
        availableWidth / currentViewport.width,
        availableHeight / currentViewport.height
    );

    frame.style.width = currentViewport.width + 'px';
    frame.style.height = currentViewport.height + 'px';
    frame.style.transform = 'scale(' + scale + ')';
    scaleBox.style.width = Math.round(currentViewport.width * scale) + 'px';
    scaleBox.style.height = Math.round(currentViewport.height * scale) + 'px';

    notifyViewportFrame();
}

function openViewport(mode) {
    const config = VIEWPORTS[mode];
    const dialog = document.getElementById('viewportDialog');
    const frame = document.getElementById('viewportFrame');
    const iframe = document.getElementById('viewportIframe');
    const title = document.getElementById('viewportDialogTitle');
    if (!config || !dialog || !frame || !iframe) return;

    currentViewport = config;
    viewportTrigger = document.querySelector('.demo-viewport-btn[data-viewport="' + mode + '"]');
    frame.dataset.device = mode;
    if (title) title.textContent = config.label;
    if (!iframe.getAttribute('src')) iframe.setAttribute('src', 'index.html');

    if (!dialog.open) {
        dialog.showModal();
        document.body.classList.add('is-viewport-open');
        const closeBtn = document.getElementById('viewportCloseBtn');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    fitViewportFrame();
    setActiveViewport(mode);
}

function closeViewport(restoreFocus) {
    const dialog = document.getElementById('viewportDialog');
    currentViewport = null;
    if (dialog && dialog.open) dialog.close();
    document.body.classList.remove('is-viewport-open');
    setActiveViewport('desktop');

    if (restoreFocus) {
        const target = viewportTrigger ||
            document.querySelector('.demo-viewport-btn[data-viewport="desktop"]');
        if (target) target.focus({ preventScroll: true });
    }

    // В предпросмотре могли изменить брони или чек-лист — синхронизируем данные.
    loadFromStorage();
    renderAll();
}

function initViewportPreview() {
    document.querySelectorAll('.demo-viewport-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.viewport;
            if (mode === 'desktop') {
                closeViewport(true);
            } else {
                openViewport(mode);
            }
        });
    });

    const dialog = document.getElementById('viewportDialog');
    const closeBtn = document.getElementById('viewportCloseBtn');
    const stage = document.getElementById('viewportStage');
    const iframe = document.getElementById('viewportIframe');

    if (iframe) {
        iframe.addEventListener('load', () => {
            fitViewportFrame();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeViewport(true));
    }
    if (stage) {
        stage.addEventListener('click', event => {
            if (event.target === stage) closeViewport(true);
        });
    }
    if (dialog) {
        dialog.addEventListener('close', () => {
            document.body.classList.remove('is-viewport-open');
            setActiveViewport('desktop');
        });
        dialog.addEventListener('cancel', () => {
            // Escape закрывает нативный dialog — после этого вернём фокус.
            setTimeout(() => closeViewport(true), 0);
        });
    }

    window.addEventListener('resize', () => {
        if (currentViewport) fitViewportFrame();
    });

    setActiveViewport('desktop');
}

function initStorageSync() {
    window.addEventListener('storage', event => {
        if (!event.key || event.key.indexOf('routePlanner.') !== 0) return;
        loadFromStorage();
        renderAll();
    });
}

// Инициализация
function init() {
    // Загружаем данные из localStorage
    loadFromStorage();

    if (isEmbeddedPreview()) {
        document.documentElement.classList.add('is-embed');
    } else {
        initViewportPreview();
        initStorageSync();
    }

    // Обработчики для переключателя темпа
    document.querySelectorAll('.pace-option').forEach(btn => {
        btn.addEventListener('click', () => {
            state.pace = btn.dataset.pace;
            renderAll();
        });
    });
    
    // Обработчик для кнопки сброса данных
    const resetBtn = document.getElementById('resetDataBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetData);
    }
    
    // Обработчики для кнопок "Повторить": перезагружаем только свой блок
    document.querySelectorAll('.state-retry-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            retrySection(btn.dataset.retryTarget);
        });
    });
    
    // Обработчики для демо-панели состояний
    document.querySelectorAll('.demo-state-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const demoState = btn.dataset.demoState;
            if (!demoState) return;
            setDemoState(demoState);
            const labels = {
                loading: 'Режим: Загрузка',
                error: 'Режим: Ошибка',
                empty: 'Режим: Пустой день',
                success: 'Режим: Готово'
            };
            if (labels[demoState]) showToast(labels[demoState]);
        });
    });

    initNav();
    
    // Первый рендер
    renderAll();
}

// Запуск приложения после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
