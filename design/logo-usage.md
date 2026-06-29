# Logo Usage

Ожидаемые файлы в проекте:

```text
/assets/logo.png
/assets/favicon.png
/assets/apple-touch-icon.png
```

## Rules

- Использовать приложенный логотип как основной.
- Не создавать новый логотип.
- Не изменять фирменный стиль.
- Не менять цвета логотипа без необходимости.
- Если `apple-touch-icon.png` отсутствует, можно временно использовать `favicon.png`, но лучше подготовить отдельный файл 180×180.

## Recommended sizes

- `logo.png`: желательно 512 px по ширине или больше, с прозрачным фоном.
- `favicon.png`: 32×32, 48×48 или 64×64.
- `apple-touch-icon.png`: 180×180.

## HTML usage

```html
<link rel="icon" type="image/png" href="/assets/favicon.png" />
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
```
