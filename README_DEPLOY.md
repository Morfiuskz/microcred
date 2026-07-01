# Production Deploy

Этот проект деплоится на Ubuntu VPS в папку `/opt/microcredit`.

Схема:

- React/Vite собирается внутри Docker multi-stage build.
- Финальный контейнер использует `nginx:alpine`.
- Контейнер слушает порт `80`.
- Docker Compose пробрасывает контейнер на `localhost:8081`.
- Внешний Nginx на VPS проксирует домен на `http://localhost:8081`.

Изменения внешнего Nginx не входят в этот репозиторий.

## GitHub Secrets

В GitHub откройте репозиторий:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

Добавьте четыре секрета:

| Secret | Значение |
| --- | --- |
| `VPS_HOST` | IP-адрес или домен VPS |
| `VPS_USER` | пользователь на VPS, у которого есть доступ к `/opt/microcredit` и Docker |
| `VPS_PORT` | SSH-порт VPS, обычно `22` |
| `VPS_SSH_KEY` | приватный SSH-ключ для подключения к VPS |

Секреты нельзя хранить в репозитории, `.env`, README или workflow-файлах.

## Первый клон на сервер

Подключитесь к VPS:

```bash
ssh -p "$VPS_PORT" "$VPS_USER@$VPS_HOST"
```

Создайте папку проекта:

```bash
sudo mkdir -p /opt/microcredit
sudo chown "$USER:$USER" /opt/microcredit
```

Склонируйте репозиторий:

```bash
git clone https://github.com/Morfiuskz/microcred.git /opt/microcredit
cd /opt/microcredit
```

Если репозиторий станет private, настройте на сервере deploy key или другой разрешенный способ доступа к `git pull`.

## Первый запуск

На VPS:

```bash
cd /opt/microcredit
docker compose up -d --build
```

Проверка:

```bash
curl -fsS http://localhost:8081
```

Команда должна вернуть HTML страницы и завершиться без ошибки.

## Проверить контейнер

```bash
docker compose ps
docker ps --filter name=microcredit-frontend
curl -I http://localhost:8081
```

Ожидается, что сервис `microcredit-frontend` находится в состоянии `Up`, а `curl` возвращает HTTP `200`.

## Посмотреть логи

```bash
cd /opt/microcredit
docker compose logs -f microcredit-frontend
```

## Перезапустить

```bash
cd /opt/microcredit
docker compose restart microcredit-frontend
```

## Обновить вручную

```bash
cd /opt/microcredit
git pull
docker compose down
docker compose up -d --build
docker image prune -f
curl -fsS http://localhost:8081
```

Эти же команды выполняет GitHub Actions workflow после push в `main`.

## GitHub Actions Deploy

Workflow находится в `.github/workflows/deploy.yml`.

После каждого push в `main` GitHub Actions:

1. Подключается к VPS по SSH.
2. Переходит в `/opt/microcredit`.
3. Выполняет `git pull`.
4. Пересобирает и запускает Docker Compose.
5. Очищает неиспользуемые Docker images.
6. Проверяет сайт через `curl -fsS http://localhost:8081`.

Если `curl` не проходит, job завершается ошибкой.

