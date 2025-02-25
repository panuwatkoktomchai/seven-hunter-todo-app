dev:
	docker compose -f ./docker-compose-dev.yml up -d
	docker exec -it todo_list sh

clean:
	docker kill todo_list