# TODO: Добавить эксперта и преподавателя

## Что нужно уточнить / подготовить перед стартом

### 1. Изображения для персонажей

Сейчас в `src/assets/images/persons/` есть папки:
- `expert/` — только `main.png` (нужно остальное)
- `student/` — только `main.png`
- `representative/` — только `main.png`

**Нужно добавить эмоции для каждого персонажа** по аналогии со schoolboy:
```
schoolboy/: hello.png, sadness.png, main.png, think.png, klass.png, dont-now.png, not-top.png, welcome.png
```

Уточнить: кто из них «эксперт» и кто «преподаватель»? (`expert` / `student` / `representative`?)

Для каждого персонажа нужны изображения всех нужных эмоций (минимум: main, hello/welcome, sadness или аналог).

---

### 2. Изображения для зданий (buildings)

Сейчас в `src/assets/images/city/buildings/` есть:
- `academy/`, `career-center/`, `global-area/`, `member-profile/`, `olympic-center/`

**Нужно создать папки и добавить:**
```
src/assets/images/city/buildings/expert/
  main.png
  active.png
  complete.png

src/assets/images/city/buildings/teacher/   (или другое название)
  main.png
  active.png
  complete.png
```

---

### 3. Изображения для локаций (backgrounds)

Сейчас в `src/assets/images/city/locations/` есть:
- `academy/`, `career-center/`, `global-area/`, `olympic-center/`

**Нужно создать папки и добавить фоны:**
```
src/assets/images/city/locations/expert/
  main.png
  error.png      (опционально, если будет сценарий с ошибкой)
  complete.png   (опционально)

src/assets/images/city/locations/teacher/
  main.png
  ...
```

Если у локации есть карточки внутри (как в academy: start-card-image.png, start-card-avatar.png) — их тоже сюда.

---

### 4. Позиции на карте

Нужно посмотреть на макете координаты (X, Y) для:
- **Здание эксперта**: где стоит точка на карте → `position: [X, Y]`
- **Балун эксперта**: смещение подсказки → `baloon: { position: [X, Y] }`
- **Здание преподавателя**: `position: [X, Y]`
- **Балун преподавателя**: `baloon: { position: [X, Y] }`

Пример из data.ts:
```ts
position: [1252, 275],   // куда ставить здание на карте
baloon: { position: [120, -65] }  // смещение балуна от здания
```

---

### 5. Тексты / контент

Для каждой новой локации нужно подготовить:
- **title** — название локации (напр. «Кабинет эксперта»)
- **subtitle** — короткое описание для балуна
- **Текст приветствия** персонажа при старте (`getInitialReply`)
- **Текст для шагов** `replies.start[]` — диалоги при онбординге (как у schoolboy в data.ts)
- **Сценарий экрана** — что происходит внутри локации (квиз? компас? что-то своё?)

---

## Что делать (порядок шагов) когда всё готово

1. **`src/data/data.ts`**
   - Добавить `PersonId` для нового персонажа
   - Добавить `LocationId` для новой локации
   - Импортировать все картинки
   - Добавить объект в `persons[]`
   - Добавить объект в `locations[]` (с position, baloon, images)
   - В существующем schoolboy добавить новые локации в массив `locations[]` (если нужно)

2. **`src/features/locations/types.ts`** — без изменений (типы берутся из data.ts)

3. **`src/features/locations/registry.tsx`**
   - Импортировать новый `expertLocation` / `teacherLocation`
   - Добавить в `modules`:
     ```ts
     "expert": expertLocation,
     "teacher": teacherLocation,
     ```

4. **Новые файлы для каждой локации** (по аналогии с Academy):
   ```
   src/features/locations/ExpertLocation.tsx      — регистрация модуля
   src/features/locations/ExpertScreen.tsx        — логика и вёрстка экрана
   src/features/locations/ExpertLocation.module.css
   
   src/features/locations/TeacherLocation.tsx
   src/features/locations/TeacherScreen.tsx
   src/features/locations/TeacherLocation.module.css
   ```

---

## Структура файлов для справки

```
ExpertLocation.tsx:
  export const expertLocation: LocationModule = {
    id: "expert",
    getInitialReply: (person) => ({ image: person.image, text: "..." }),
    render: (props) => <ExpertScreen {...props} />,
  };

ExpertScreen.tsx:
  — импорт картинок персонажа
  — логика шагов (useState)
  — вёрстка: intro → основной сценарий
  — интро верстается через Card, CardAnons, CardImage, CardProfile, CardCards, CardsCard, Button
  — доступные UI: Card, Button, Quiz, Reply, Modal, Text, Location
```
