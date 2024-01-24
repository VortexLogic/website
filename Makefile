default:
	@echo "No default target defined"

.PHONY: build serve tailwind

TAILWIND_SRC = tailwind/input.css
TAILWIND_OUT = static/dist/output.css

install:
	npm install

build:
	npx tailwindcss -i $(TAILWIND_SRC) -o $(TAILWIND_OUT)
	hugo

serve:
	hugo server --disableFastRender

tailwind:
	npx tailwindcss -i $(TAILWIND_SRC) -o $(TAILWIND_OUT) --watch
