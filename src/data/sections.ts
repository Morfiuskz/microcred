import {
  AlertTriangle,
  BookOpen,
  BriefcaseBusiness,
  CalendarClock,
  CircleHelp,
  ClipboardCheck,
  FileSearch,
  HandHeart,
  History,
  Landmark,
  ListChecks,
  PiggyBank,
  ReceiptText,
  Scale,
  ShieldCheck,
  TimerReset,
  WalletCards,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const alternatives: CardItem[] = [
  { title: "Занять у близких", text: "Если это безопасно для отношений и без скрытого давления.", icon: HandHeart },
  { title: "Попросить отсрочку", text: "Иногда честный разговор дает больше времени без нового долга.", icon: CalendarClock },
  { title: "Перенести покупку", text: "Не каждая срочность действительно срочная.", icon: TimerReset },
  { title: "Найти подработку", text: "Даже временный доход может быть спокойнее займа.", icon: BriefcaseBusiness },
  { title: "Проверить рассрочку", text: "Сравните условия, штрафы и итоговую стоимость.", icon: ReceiptText },
  { title: "Использовать резерв", text: "Если он есть, посчитайте, что останется после траты.", icon: PiggyBank },
];

export const selfCheckQuestions = [
  "Я знаю, сколько всего придется вернуть",
  "У меня есть понятный план возврата",
  "После платежа у меня останутся деньги на обычные расходы",
  "Я прочитал договор до подписания",
  "Я понимаю, что будет при просрочке",
  "Я не беру новый займ, чтобы закрыть старый",
];

export const statisticsPlaceholders = [
  "Просроченная задолженность",
  "Средняя долговая нагрузка",
  "Количество заемщиков",
  "Динамика рынка микрофинансирования",
];

export const startCards: CardItem[] = [
  {
    title: "Я только разбираюсь",
    text: "Простое объяснение, что такое микрокредит и чем он отличается от кредита.",
    icon: BookOpen,
  },
  {
    title: "Я думаю взять микрокредит",
    text: "Чек-лист перед оформлением: договор, переплата, сроки и риски.",
    icon: ClipboardCheck,
  },
  {
    title: "У меня уже есть займ",
    text: "Что делать при просрочке, как общаться с МФО и какие есть права.",
    icon: ShieldCheck,
  },
];

export const keyFacts = [
  "Микрокредит нужно брать только при понятном плане возврата.",
  "Важно считать не только сумму займа, но и итоговую переплату.",
  "Договор нужно читать до подписания.",
  "Просрочка может привести к штрафам и ухудшению кредитной истории.",
  "Если возникли проблемы, лучше не скрываться, а искать законное решение.",
];

export const risks: CardItem[] = [
  { title: "Просрочка", text: "Даже несколько дней могут изменить итоговую стоимость.", icon: CalendarClock },
  { title: "Пени и штрафы", text: "Уточняйте порядок начислений до подписания договора.", icon: AlertTriangle },
  { title: "Кредитная история", text: "Проблемы с платежами могут повлиять на будущие заявки.", icon: History },
  { title: "Коллекторы и взыскание", text: "Важно знать свои права и фиксировать общение.", icon: Scale },
  { title: "Повторные займы", text: "Новый долг ради старого часто ухудшает ситуацию.", icon: WalletCards },
  { title: "Долговая спираль", text: "Главный риск появляется, когда нет паузы на пересчет.", icon: TimerReset },
];

export const usefulSections: CardItem[] = [
  { title: "Что такое микрокредит", text: "Базовое объяснение простым языком.", icon: CircleHelp },
  { title: "Как выбрать МФО", text: "На что смотреть до заявки и договора.", icon: FileSearch },
  { title: "Как читать договор", text: "Пункты, которые нельзя пропускать.", icon: ReceiptText },
  { title: "Что делать при просрочке", text: "Спокойные шаги вместо паники.", icon: TimerReset },
  { title: "Права заемщика", text: "Документы, обращения и законные процедуры.", icon: Landmark },
  { title: "Мировая практика", text: "Как микрокредитование устроено в разных странах.", icon: Scale },
];

export const literacyCards: CardItem[] = [
  { title: "Личный бюджет", text: "Понять, сколько денег остается после обязательных расходов.", icon: ListChecks },
  { title: "Резерв", text: "Небольшой запас снижает вероятность срочного займа.", icon: PiggyBank },
  { title: "Не закрывать долг долгом", text: "Новый заем редко решает причину финансовой нехватки.", icon: TimerReset },
];

