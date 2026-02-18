# Tapir

Каталог товаров на Nuxt 4. Архитектура FSD — shared, entities, features, widgets, app.

**Стек:** Nuxt 4, Pinia, Vitest, ESLint, Stylelint, Husky.

## Запуск

```bash
npm install
npm run dev
```

Приложение на http://localhost:3000

## Команды

- `npm run dev` — разработка
- `npm run build` — сборка
- `npm run build:analyze` — сборка с анализом бандла (stats.html)
- `npm run typecheck` — проверка типов
- `npm run lint` / `npm run lint:style` — линтеры
- `npm run test` — тесты
- `npm run storybook` — storybook на 6006
- `npm run hooks:install` — если pre-commit перестал срабатывать

## Pre-commit

Перед каждым коммитом прогоняются lint-staged, полный lint, typecheck, тесты и build. Пока что-то падает — коммит не пройдёт.

## Структура

```
src/
├── app/       — layouts, plugins, types
├── pages/     — Страницы ("Главная", "Каталог")
├── widgets/   — Catalog, Header, Footer
├── features/  — load more, retry, favorite, header-*
├── entities/  — Product
└── shared/    — UI, стили, composables
```

## Ссылки

- [FSD — Feature-Sliced Design](https://feature-sliced.design/)
- [Conventional Commits](https://www.conventionalcommits.org/)
