# Recommended Project Structure

```text
src/
  app/
    App.tsx
  components/
    Header.tsx
    HeroSection.tsx
    Firefly.tsx
    NeedMicrocreditSection.tsx
    SelfCheckSection.tsx
    StatisticsSection.tsx
    StartCardsSection.tsx
    KeyFactsSection.tsx
    RisksSection.tsx
    UsefulSections.tsx
    FinancialLiteracySection.tsx
    Footer.tsx
  data/
    navigation.ts
    sections.ts
  styles/
    globals.css
  main.tsx
```

## Component rules

- Одна секция = один компонент.
- Не держать всю страницу в одном `App.tsx`.
- Повторяющиеся карточки выносить в map по массиву данных.
- Тексты секций можно хранить в `src/data/sections.ts`.
- Анимации делать аккуратно через Framer Motion.
- Не использовать тяжелые зависимости без необходимости.
