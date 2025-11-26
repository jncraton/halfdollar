lint:
	npx prettier@3.6.2 --check .
	npx jshint@2.13.6

format:
	npx prettier@3.6.2 --write .

halfdollar.min.js: halfdollar.js
	npx -y uglify-js@3.19.3 --compress --mangle -- $< > $@
	wc -c $@

clean:
	rm -f halfdollar.min.js
