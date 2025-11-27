lint:
	npx prettier@3.6.2 --check .
	npx jshint@2.13.6

format:
	npx prettier@3.6.2 --write .

halfdollar.min.js: halfdollar.js
	npx --package uglify-js@3.19.3 --quiet uglifyjs --compress --mangle -- $< > $@
	wc -c $@

clean:
	rm -f halfdollar.min.js
